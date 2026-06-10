'use client';

import { useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// ParticleCanvas — reusable hex-lattice particle animation
//
// Drop it inside any `position: relative` container and it fills the parent
// automatically. Every visual parameter is exposed as a prop so you can adapt
// the look to each section without touching the core algorithm.
//
// Usage examples:
//
//   // Hero (default light look — matches the original hero banner)
//   <ParticleCanvas />
//
//   // Dark section (e.g. Platform, Quality)
//   <ParticleCanvas
//     particleColor="rgba(100, 220, 200, 1)"
//     edgeColor="rgba(100, 220, 200, 1)"
//     particleAlpha={0.55}
//     edgeAlpha={0.28}
//   />
//
//   // Slower, subtler background decoration
//   <ParticleCanvas
//     speed={0.5}
//     waveAmplitude={6}
//     mouseRepulsion={false}
//   />
// ─────────────────────────────────────────────────────────────────────────────

export interface ParticleCanvasProps {
  /**
   * Base RGB of particle dots — supply as "r, g, b" (without "rgba(...)").
   * @default "228, 230, 234"  (light grey — matches the hero)
   */
  particleColor?: string;

  /**
   * Base RGB of connecting edges.
   * @default "228, 230, 234"
   */
  edgeColor?: string;

  /**
   * Maximum opacity multiplier for particles (0–1).
   * @default 0.75
   */
  particleAlpha?: number;

  /**
   * Maximum opacity multiplier for edges (0–1).
   * @default 0.48
   */
  edgeAlpha?: number;

  /**
   * Global animation speed multiplier (1 = normal).
   * @default 1
   */
  speed?: number;

  /**
   * Hex cell size in pixels (controls grid density).
   * Smaller = more cells = higher density.
   * @default 52
   */
  hexSize?: number;

  /**
   * Maximum wave displacement in pixels.
   * @default 1  (scales the existing three-wave combo)
   */
  waveAmplitude?: number;

  /**
   * Enable or disable mouse-repulsion interaction.
   * @default true
   */
  mouseRepulsion?: boolean;

  /**
   * Radius of mouse-repulsion effect in pixels.
   * @default 150
   */
  repulsionRadius?: number;

  /**
   * Strength of the repulsion push in pixels.
   * @default 16
   */
  repulsionStrength?: number;

  /**
   * CSS z-index for the canvas element.
   * @default 0
   */
  zIndex?: number;
}

export default function ParticleCanvas({
  particleColor    = '228, 230, 234',
  edgeColor        = '228, 230, 234',
  particleAlpha    = 0.75,
  edgeAlpha        = 0.48,
  speed            = 1,
  hexSize          = 52,
  waveAmplitude    = 1,
  mouseRepulsion   = true,
  repulsionRadius  = 150,
  repulsionStrength = 16,
  zIndex           = 0,
}: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: 0, y: 0, active: false, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width  = 0;
    let height = 0;

    // ── Static vertex + edge structures (rebuilt on resize) ──────────────────
    type StaticVertex = { staticX: number; staticY: number };
    let vertexList: StaticVertex[]     = [];
    let edgeList:   [number, number][] = [];

    const hexW        = Math.sqrt(3) * hexSize;   // pointy-top width
    const rowStep     = hexSize * 1.5;             // vertical step between row centres
    const vertexAngles = Array.from(
      { length: 6 },
      (_, i) => (Math.PI / 180) * (60 * i - 30),
    );

    const buildGrid = () => {
      vertexList = [];
      edgeList   = [];

      const cols     = Math.ceil(width  / hexW)    + 3;
      const rows     = Math.ceil(height / rowStep) + 3;
      const posToId  = new Map<string, number>();
      const edgeSet  = new Set<string>();

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
          const cx = col * hexW + (row % 2 === 1 ? hexW * 0.5 : 0);
          const cy = row * rowStep;

          const ids: number[] = [];
          for (let i = 0; i < 6; i++) {
            const svx = cx + Math.cos(vertexAngles[i]) * hexSize;
            const svy = cy + Math.sin(vertexAngles[i]) * hexSize;
            ids.push(getOrAddVertex(svx, svy));
          }

          for (let i = 0; i < 6; i++) {
            const a    = ids[i];
            const b    = ids[(i + 1) % 6];
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
        width  = parent.clientWidth;
        height = parent.clientHeight;
      } else {
        width  = window.innerWidth;
        height = window.innerHeight;
      }
      canvas.width        = width  * window.devicePixelRatio;
      canvas.height       = height * window.devicePixelRatio;
      canvas.style.width  = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      buildGrid();
    };

    resize();
    window.addEventListener('resize', resize);

    // ── Mouse tracking ───────────────────────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active  = true;
    };
    const handleMouseLeave = () => { mouseRef.current.active = false; };

    const parent = canvas.parentElement;
    if (parent && mouseRepulsion) {
      parent.addEventListener('mousemove',  handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    // ── Animation loop ───────────────────────────────────────────────────────
    let time = 0;

    const animate = () => {
      time += 0.004 * speed;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Step 1 — compute animated position for every unique vertex
      const ax    = new Float32Array(vertexList.length);
      const ay    = new Float32Array(vertexList.length);
      const alpha = new Float32Array(vertexList.length);

      for (let id = 0; id < vertexList.length; id++) {
        const { staticX, staticY } = vertexList[id];
        const nx = staticX / width;
        const ny = staticY / height;

        // Three-layer wave — amplitudes scaled by the waveAmplitude prop
        const wave1 = Math.sin(nx * 4 + time * 1.8)           * 16 * waveAmplitude;
        const wave2 = Math.cos(ny * 3 - time * 2.5)           * 10 * waveAmplitude;
        const wave3 = Math.sin(nx * 2 + ny * 3 + time * 1.2)  * 12 * waveAmplitude;

        let vx = staticX + wave1;
        let vy = staticY + wave2 + wave3;

        // Mouse repulsion
        if (mouseRepulsion && mouse.active) {
          const dx   = vx - mouse.x;
          const dy   = vy - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < repulsionRadius && dist > 0) {
            const force = (1 - dist / repulsionRadius) * repulsionStrength;
            vx += (dx / dist) * force;
            vy += (dy / dist) * force;
          }
        }

        ax[id] = vx;
        ay[id] = vy;

        // Depth-based alpha (top of canvas = fainter)
        const baseZ   = ny * 300 - 150;
        alpha[id]     = Math.max(0.25, (400 - baseZ) / 550);
      }

      // Step 2 — draw edges
      ctx.lineWidth = 0.6;
      for (const [a, b] of edgeList) {
        const avgAlpha = (alpha[a] + alpha[b]) * 0.5;
        ctx.strokeStyle = `rgba(${edgeColor}, ${edgeAlpha * avgAlpha})`;
        ctx.beginPath();
        ctx.moveTo(ax[a], ay[a]);
        ctx.lineTo(ax[b], ay[b]);
        ctx.stroke();
      }

      // Step 3 — draw particles
      const r = width < 768 ? 1.7 : 2.6;
      for (let id = 0; id < vertexList.length; id++) {
        ctx.fillStyle = `rgba(${particleColor}, ${particleAlpha * alpha[id]})`;
        ctx.beginPath();
        ctx.arc(ax[id], ay[id], r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (parent && mouseRepulsion) {
        parent.removeEventListener('mousemove',  handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    particleColor, edgeColor, particleAlpha, edgeAlpha,
    speed, hexSize, waveAmplitude,
    mouseRepulsion, repulsionRadius, repulsionStrength,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      'absolute',
        top:           0,
        left:          0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'none',
        zIndex,
      }}
    />
  );
}
