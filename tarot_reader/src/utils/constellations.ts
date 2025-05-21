import { ConstellationRaw } from "@/app/interface";

export const goblet: ConstellationRaw = {
  stars: [
    [10, 0], // 0 - Top left of bowl
    [0, 30], // 1 - Curve left
    [10, 60], // 2 - Bottom left
    [30, 100], // 3 - Bowl base center
    [30, 150], // 4 - Middle of stem
    [30, 200], // 5 - Bottom of stem
    [0, 220], // 6 - Base left
    [60, 220], // 7 - Base right
    [50, 60], // 8 - Bottom right
    [60, 30], // 9 - Curve right
    [50, 0], // 10 - Top right of bowl
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
export const wand: ConstellationRaw = {
  stars: [
    [0, 160],
    [20, 120],
    [40, 80],
    [60, 40],
    [80, 0],
  ],
  lines: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ],
};
export const sword: ConstellationRaw = {
  stars: [
    [20, 120],
    [20, 80],
    [20, 60],
    [20, 40],
    [20, 0],
    [40, 40],
    [0, 40],
  ],
  lines: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [5, 6],
  ],
};

export const pentagram: ConstellationRaw = {
  stars: [
    [70, 140], // 0 - Top point
    [110, 0], // 1 - Bottom right
    [0, 80], // 2 - Left
    [140, 80], // 3 - Right
    [30, 0], // 4 - Bottom left
  ],
  lines: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 0],
  ],
};
