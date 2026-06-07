'use client';

import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
      } else {
        width = window.innerWidth;
        height = window.innerHeight;
      }
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    // Grid configuration
    const cols = 40;
    const rows = 16;
    let time = 0;

    // Animation loop
    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Project grid points
      const points: { x: number; y: number; z: number; ox: number; oy: number; scale: number }[][] = [];

      for (let r = 0; r < rows; r++) {
        points[r] = [];
        for (let c = 0; c < cols; c++) {
          // Normalize coordinates with hexagonal offset
          // Alternate rows are offset by half-step
          const isOddRow = r % 2 === 1;
          const shift = isOddRow ? 0.5 : 0;
          const nx = (c + shift) / (cols - 0.5);
          const ny = r / (rows - 1);

          // Base 3D coordinate (plane tilted in perspective)
          // We project a grid that spans the width and goes back in depth (Z)
          const baseX = nx * width;
          const baseZ = ny * 400 - 200; // Z depth
          
          // Anti-gravity upward wave effect
          // y-offset has multiple sine components moving at different speeds
          const wave1 = Math.sin(nx * 5 + time * 2) * 40;
          const wave2 = Math.cos(ny * 4 - time * 3) * 20;
          
          // Upward continuous wave drift
          const upwardDrift = -time * 80;
          const wave3 = Math.sin((ny * 6) + nx * 3 + (upwardDrift * 0.05)) * 30;

          const baseY = height * 0.5 + wave1 + wave2 + wave3 + (ny - 0.5) * (height * 0.4);

          // Interaction with mouse
          let dx = baseX - mouse.x;
          let dy = baseY - mouse.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          let offsetX = 0;
          let offsetY = 0;

          if (mouse.active && dist < 250) {
            const force = (1 - dist / 250) * 45;
            offsetX = (dx / dist) * force;
            offsetY = (dy / dist) * force;
          }

          // Simple 3D perspective projection
          // Focus length
          const fl = 400;
          // Scale factor based on Z depth
          const scale = fl / (fl + baseZ);

          // Project to 2D
          const screenX = width * 0.5 + (baseX + offsetX - width * 0.5) * scale;
          const screenY = height * 0.4 + (baseY + offsetY - height * 0.5) * scale;

          points[r][c] = {
            x: screenX,
            y: screenY,
            z: baseZ,
            ox: baseX,
            oy: baseY,
            scale: scale
          };
        }
      }

      // Draw lines between mesh nodes to form the volume
      ctx.lineWidth = 0.5;
      
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = points[r][c];

          // Determine line transparency based on depth (Z)
          // Deeper points are fainter
          const alphaScale = (400 - p.z) / 600; // 0.33 to 1.0

          // Color: Slate/Ice grey to match Swiss lab clean look
          // Very transparent so it sits behind text elegantly
          ctx.strokeStyle = `rgba(228, 230, 234, ${0.45 * alphaScale})`;

          // Horizontal connections
          if (c < cols - 1) {
            const nextP = points[r][c + 1];
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(nextP.x, nextP.y);
            ctx.stroke();
          }

          // Diagonal connections for hexagonal grid layout
          if (r < rows - 1) {
            if (r % 2 === 0) {
              // Even rows connect to index c and c - 1 on odd rows
              const nextP1 = points[r + 1][c];
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(nextP1.x, nextP1.y);
              ctx.stroke();

              if (c > 0) {
                const nextP2 = points[r + 1][c - 1];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(nextP2.x, nextP2.y);
                ctx.stroke();
              }
            } else {
              // Odd rows connect to index c and c + 1 on even rows
              const nextP1 = points[r + 1][c];
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(nextP1.x, nextP1.y);
              ctx.stroke();

              if (c < cols - 1) {
                const nextP2 = points[r + 1][c + 1];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(nextP2.x, nextP2.y);
                ctx.stroke();
              }
            }
          }

          // Draw node particle points (subtle dots)
          ctx.fillStyle = `rgba(228, 230, 234, ${0.7 * alphaScale})`;
          ctx.beginPath();
          const particleSize = width < 768 ? 1.3 : 2.0;
          ctx.arc(p.x, p.y, particleSize * p.scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
