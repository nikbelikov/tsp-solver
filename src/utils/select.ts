import { find } from "lodash";
import { IPoint } from "../models/Point";
import { IChromosome } from "../models/Chromosome";

export default (individual: IChromosome, points: IPoint[]): IPoint[] => {
  const result: IPoint[] = [];

  individual.forEach((item: number) => {
    const current = find(points, { id: item });
    if (current) {
      result.push(current);
    }
  });

  return result;
};
