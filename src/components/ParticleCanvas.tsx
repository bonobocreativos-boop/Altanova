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

    // --- Static vertex + edge structures (rebuilt on resize) ---
    type StaticVertex = { staticX: number; staticY: number };
    let vertexList: StaticVertex[] = [];   // index = vertex id
    let edgeList: [number, number][] = []; // pairs of vertex ids (unique)

    const hexSize = 52;
    const hexW = Math.sqrt(3) * hexSize;  // pointy-top width
    const rowStep = hexSize * 1.5;        // vertical step between row centers
    const vertexAngles = Array.from({ length: 6 }, (_, i) => (Math.PI / 180) * (60 * i - 30));

    const buildGrid = () => {
      vertexList = [];
      edgeList = [];

      const cols = Math.ceil(width / hexW) + 3;
      const rows = Math.ceil(height / rowStep) + 3;

      // Map: "rounded_x,rounded_y" → vertex index
      const posToId = new Map<string, number>();
      const edgeSet = new Set<string>();

      const getOrAddVertex = (svx: number, svy: number): number => {
        const key = `${Math.round(svx * 10)},${Math.round(svy * 10)}`;
        if (!posToId.has(key)) {
          posToId.set(key, vertexList.length);
          vertexList.push({ staticX: svx, staticY: svy });
        }
        return posToId.get(key)!;
      };

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          // Hex center — offset odd rows by half a hex width
          const cx = col * hexW + (row % 2 === 1 ? hexW * 0.5 : 0);
          const cy = row * rowStep;

          const ids: number[] = [];
          for (let i = 0; i < 6; i++) {
            const svx = cx + Math.cos(vertexAngles[i]) * hexSize;
            const svy = cy + Math.sin(vertexAngles[i]) * hexSize;
            ids.push(getOrAddVertex(svx, svy));
          }

          // Add the 6 edges of this hexagon (deduplicated globally)
          for (let i = 0; i < 6; i++) {
            const a = ids[i];
            const b = ids[(i + 1) % 6];
            const eKey = a < b ? `${a},${b}` : `${b},${a}`;
            if (!edgeSet.has(eKey)) {
              edgeSet.add(eKey);
              edgeList.push([a, b]);
            }
          }
        }
      }
    };

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
      buildGrid();
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
    const handleMouseLeave = () => { mouseRef.current.active = false; };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    let time = 0;

    const animate = () => {
      time += 0.004;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Step 1: Animate each unique vertex from ITS OWN static position
      // — this guarantees shared vertices always have one consistent animated position
      const ax = new Float32Array(vertexList.length);
      const ay = new Float32Array(vertexList.length);
      const alpha = new Float32Array(vertexList.length);

      for (let id = 0; id < vertexList.length; id++) {
        const { staticX, staticY } = vertexList[id];
        const nx = staticX / width;
        const ny = staticY / height;

        // Multi-layer wave based on this vertex's own static position
        const wave1 = Math.sin(nx * 4 + time * 1.8) * 16;
        const wave2 = Math.cos(ny * 3 - time * 2.5) * 10;
        const wave3 = Math.sin(nx * 2 + ny * 3 + time * 1.2) * 12;

        let vx = staticX + wave1;
        let vy = staticY + wave2 + wave3;

        // Subtle mouse repulsion
        const dx = vx - mouse.x;
        const dy = vy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (mouse.active && dist < 150 && dist > 0) {
          const force = (1 - dist / 150) * 16;
          vx += (dx / dist) * force;
          vy += (dy / dist) * force;
        }

        ax[id] = vx;
        ay[id] = vy;

        // Depth-based alpha (top of canvas = more depth = fainter)
        const baseZ = ny * 300 - 150;
        alpha[id] = Math.max(0.25, (400 - baseZ) / 550);
      }

      // Step 2: Draw all unique hex edges
      ctx.lineWidth = 0.6;
      for (const [a, b] of edgeList) {
        const avgAlpha = (alpha[a] + alpha[b]) * 0.5;
        ctx.strokeStyle = `rgba(228, 230, 234, ${0.48 * avgAlpha})`;
        ctx.beginPath();
        ctx.moveTo(ax[a], ay[a]);
        ctx.lineTo(ax[b], ay[b]);
        ctx.stroke();
      }

      // Step 3: Draw particles at each unique vertex
      const r = width < 768 ? 1.7 : 2.6;
      for (let id = 0; id < vertexList.length; id++) {
        ctx.fillStyle = `rgba(228, 230, 234, ${0.75 * alpha[id]})`;
        ctx.beginPath();
        ctx.arc(ax[id], ay[id], r, 0, Math.PI * 2);
        ctx.fill();
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
