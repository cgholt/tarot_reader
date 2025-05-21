import { Constellation } from "@/app/interface";

export const goblet: Constellation = {
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
export const wand: Constellation = {
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
export const sword: Constellation = {
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

export const pentagram: Constellation = {
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
