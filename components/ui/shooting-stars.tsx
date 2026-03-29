"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

interface StarState {
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Store mutable animation state in refs — zero React re-renders
  const starRef = useRef<StarState | null>(null);
  const rafRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Keep canvas sized to its CSS size
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const spawnStar = () => {
      const w = canvas.width;
      const h = canvas.height;
      const side = Math.floor(Math.random() * 4);
      const offset = Math.random() * w;
      let x = 0, y = 0, angle = 45;
      switch (side) {
        case 0: x = offset; y = 0; angle = 45; break;
        case 1: x = w; y = offset; angle = 135; break;
        case 2: x = offset; y = h; angle = 225; break;
        case 3: x = 0; y = offset; angle = 315; break;
      }
      starRef.current = {
        x, y, angle, scale: 1, distance: 0,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      };

      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutRef.current = setTimeout(spawnStar, delay);
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const s = starRef.current;
      if (s) {
        const rad = (s.angle * Math.PI) / 180;
        const newX = s.x + s.speed * Math.cos(rad);
        const newY = s.y + s.speed * Math.sin(rad);
        const newDist = s.distance + s.speed;
        const newScale = 1 + newDist / 100;

        if (newX < -20 || newX > w + 20 || newY < -20 || newY > h + 20) {
          starRef.current = null;
        } else {
          s.x = newX;
          s.y = newY;
          s.distance = newDist;
          s.scale = newScale;

          // Draw the star as a rotated rectangle using canvas transforms
          const sw = starWidth * s.scale;
          ctx.save();
          ctx.translate(s.x + sw / 2, s.y + starHeight / 2);
          ctx.rotate(rad);
          const grad = ctx.createLinearGradient(-sw / 2, 0, sw / 2, 0);
          grad.addColorStop(0, `${trailColor}00`);
          grad.addColorStop(1, starColor);
          ctx.fillStyle = grad;
          ctx.fillRect(-sw / 2, -starHeight / 2, sw, starHeight);
          ctx.restore();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    spawnStar();
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      ro.disconnect();
    };
    // Only re-run if props change — avoids re-mounting the loop on every parent render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starColor, trailColor, starWidth, starHeight]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full absolute inset-0", className)}
    />
  );
};
