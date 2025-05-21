"use client";

import { ConstellationRaw, Line, Star } from "@/app/interface";
import { Constellation } from "@/lib/Constellation";
import { goblet, sword, pentagram, wand } from "@/utils/constellations";
import { useEffect, useRef, useCallback } from "react";

export default function ConstellationBackground() {
  // Get refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number>(null);

  // import list of constellations
  const constellationList: ConstellationRaw[] = [
    goblet,
    sword,
    pentagram,
    wand,
  ];

  const drawScene = useCallback(() => {
    // Define the canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    // get the context
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Canvas center
    const midX = canvas.width / 2;
    const midY = canvas.height / 2;

    // Scale for constellation size
    const scale = 1.5; // scale up normalized coordinates

    // Center of each window quadrant
    const offsetMap = [
      [midX / 2, midY / 2], // Quadrant I
      [midX + midX / 2, midY / 2], // Quadrant II
      [midX / 2, midY + midY / 2], // Quadrant III
      [midX + midX / 2, midY + midY / 2], // Quadrant IV
    ];

    // Draw a star
    const drawStar = (x: number, y: number, r = 1) => {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
    };

    // Draws a line between to points to highlight a constellation
    const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    // generates stars around the window randomly
    const generateStars = (count: number) => {
      for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const r = Math.floor(Math.random() * 1.2 + 0.3);
        drawStar(x, y, r);
      }
    };

    // adds extra stars around a constellation for aesthetics
    const addExtraStarsNearConstellation = (
      constellation: ConstellationRaw,
      count: number
    ) => {
      for (let i = 0; i < count; i++) {
        //picks a random star in the constellation
        const [baseX, baseY] =
          constellation.stars[
            Math.floor(Math.random() * constellation.stars.length)
          ];
        // Random offset from selected star
        const offsetX = (Math.random() - 0.5) * Math.floor(width / 10);
        const offsetY = (Math.random() - 0.5) * Math.floor(width / 10);
        // Draw star
        drawStar(baseX + offsetX, baseY + offsetY, Math.random() * 1 + 0.3);
      }
    };

    // Draws a constellation and connects the dots
    const drawConstellation = (
      constellation: ConstellationRaw,
      extraStars: number | null = null
    ) => {
      constellation.stars.forEach((star: Star) =>
        drawStar(star[0], star[1], 2)
      );

      // if you want to add extra stars around the main constellation
      if (extraStars) {
        addExtraStarsNearConstellation(constellation, extraStars);
      }

      // draw each star and line
      constellation.lines.forEach((line: Line) => {
        const [x1, y1] = constellation.stars[line[0]];
        const [x2, y2] = constellation.stars[line[1]];
        drawLine(x1, y1, x2, y2);
      });
    };

    // Clear canvas and set styles
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.lineWidth = 1;

    // Create stars
    generateStars(600);

    // Loop through list of normalized constellation coordinates
    constellationList.forEach((constellationRaw, i) => {
      // create a new constellation class
      const newConstellation = new Constellation(
        constellationRaw.stars,
        constellationRaw.lines
      );

      // Get the quadrant center and randomize
      let [ox, oy] = offsetMap[i];
      ox = ox + ((Math.random() - 0.5) * width) / 10;
      oy = oy + ((Math.random() - 0.5) * height) / 10;

      // Transform the normallized data to a location in the quadrant
      const transformed = newConstellation.getTransformedStars(scale, [ox, oy]);

      // Draw constellation and extra stars
      drawConstellation(transformed, 100);
    });
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
