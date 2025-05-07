"use client";

import { Constellation, Line, Star } from "@/app/interface";
import { useEffect, useRef } from "react";

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

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
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 1.2 + 0.3; // star size variation
        drawStar(x, y, r);
      }
    };

    const goblet: Constellation = {
      stars: [
        [100, 100], // 0 - Top left of bowl
        [90, 130], // 1 - Curve left
        [100, 160], // 2 - Bottom left
        [120, 200], // 3 - Bowl base center
        [120, 250], // 4 - Middle of stem
        [120, 300], // 5 - Bottom of stem
        [90, 320], // 6 - Base left
        [150, 320], // 7 - Base right
        [140, 160], // 8 - Bottom right
        [150, 130], // 9 - Curve right
        [140, 100], // 10 - Top right of bowl
      ],
      lines: [
        [0, 1],
        [1, 2], // Left side of bowl
        [2, 3],
        [3, 4],
        [4, 5], // Stem
        [5, 6],
        [6, 7],
        [7, 5], // Base
        [3, 8],
        [8, 9],
        [9, 10], // Right side of bowl
      ],
    };
    const wand: Constellation = {
      stars: [
        [100, 800],
        [120, 760],
        [140, 720],
        [160, 680],
        [180, 640],
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    };
    const sword: Constellation = {
      stars: [
        [1140, 800],
        [1140, 760],
        [1140, 720],
        [1140, 680],
        [1140, 640],
        [1160, 680],
        [1120, 680],
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [5, 6],
      ],
    };

    const pentagram: Constellation = {
      stars: [
        [1150, 190], // 0 - Top point
        [1190, 50], // 1 - Bottom right
        [1080, 130], // 2 - Left
        [1220, 130], // 3 - Right
        [1110, 50], // 4 - Bottom left
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 0],
      ],
    };

    const addExtraStarsNearConstellation = (
      constellation: Constellation,
      count: number
    ) => {
      for (let i = 0; i < count; i++) {
        // Choose a random point from the constellation to start near
        const [baseX, baseY] =
          constellation.stars[
            Math.floor(Math.random() * constellation.stars.length)
          ];

        // Offset it randomly within a reasonable range
        const offsetX = (Math.random() - 0.5) * 60; // ±30px
        const offsetY = (Math.random() - 0.5) * 60;

        const x = baseX + offsetX;
        const y = baseY + offsetY;

        // Slightly smaller and dimmer star
        drawStar(x, y, Math.random() * 1 + 0.3);
      }
    };

    const drawConstellations = (
      constellations: Constellation[],
      extraStars: number | null = null
    ) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = 1;

      generateStars(150); // ✨ Add this line for random stars

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
        // Draw lines
        constellation.lines.forEach((line: Line) => {
          const [x1, y1] = constellation.stars[line[0]];
          const [x2, y2] = constellation.stars[line[1]];
          drawLine(x1, y1, x2, y2);
        });
      };
      constellations.forEach((constellation) =>
        drawConstellation(constellation, extraStars)
      );
    };

    const constellationList = [goblet, sword, pentagram, wand];
    drawConstellations(constellationList, 25);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] bg-black"
    />
  );
}
