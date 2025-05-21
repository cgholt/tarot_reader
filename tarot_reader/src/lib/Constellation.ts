import { ConstellationRaw, Line, Star } from "@/app/interface";

export class Constellation {
  originalStars: Star[];
  normalizedStars: Star[];
  lines: Line[];
  centroid: Star;

  constructor(stars: Star[], lines: Line[]) {
    this.originalStars = stars;
    this.centroid = this.calculateCentroid(stars);
    this.normalizedStars = this.normalizeStars(stars, this.centroid);
    this.lines = lines;
  }

  // gets center of normalized stars
  private calculateCentroid(stars: Star[]): Star {
    const [sumX, sumY] = stars.reduce(
      ([sx, sy], [x, y]) => [sx + x, sy + y],
      [0, 0]
    );
    return [sumX / stars.length, sumY / stars.length];
  }

  // normalize star coordinates around centroid
  private normalizeStars(stars: Star[], centroid: Star): Star[] {
    return stars.map(([x, y]) => [x - centroid[0], y - centroid[1]]);
  }

  // Optional: apply scale and translation
  public getTransformedStars(scale: number, offset: Star): ConstellationRaw {
    const stars: Star[] = this.normalizedStars.map(([x, y]) => [
      x * scale + offset[0],
      y * scale + offset[1],
    ]);

    return {
      stars,
      lines: this.lines,
    };
  }
}
