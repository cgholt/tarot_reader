"use client";

import { Constellation, Line, Star } from "@/app/interface";
import { goblet, sword, pentagram, wand } from "@/utils/constellations";
import { useEffect, useRef, useCallback } from "react";

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number>(null);

  const constellationList = [goblet, sword, pentagram, wand];

  const drawScene = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const drawStar = (x: number, y: number, r = 1) => {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
    };

    const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const generateStars = (count: number) => {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = Math.random() * 1.2 + 0.3;
        drawStar(x, y, r);
      }
    };

    const addExtraStarsNearConstellation = (
      constellation: Constellation,
      count: number
    ) => {
      for (let i = 0; i < count; i++) {
        const [baseX, baseY] =
          constellation.stars[
            Math.floor(Math.random() * constellation.stars.length)
          ];
        const offsetX = (Math.random() - 0.5) * 60;
        const offsetY = (Math.random() - 0.5) * 60;
        drawStar(baseX + offsetX, baseY + offsetY, Math.random() * 1 + 0.3);
      }
    };

    const drawConstellation = (
      constellation: Constellation,
      extraStars: number | null = null
    ) => {
      constellation.stars.forEach((star: Star) =>
        drawStar(star[0], star[1], 2)
      );

      if (extraStars) {
        addExtraStarsNearConstellation(constellation, extraStars);
      }

      constellation.lines.forEach((line: Line) => {
        const [x1, y1] = constellation.stars[line[0]];
        const [x2, y2] = constellation.stars[line[1]];
        drawLine(x1, y1, x2, y2);
      });
    };

    // Draw everything
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.lineWidth = 1;
    generateStars(150);
    constellationList.forEach((c) => drawConstellation(c, 25));
  }, []);

  useEffect(() => {
    drawScene();

    const handleResize = () => {
      cancelAnimationFrame(animationFrameRef.current!);
      animationFrameRef.current = requestAnimationFrame(drawScene);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current!);
    };
  }, [drawScene]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] bg-black"
    />
  );
}
