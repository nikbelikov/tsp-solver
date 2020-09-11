import { IPoint } from "../models/Point";
import { IChromosome } from "../models/Chromosome";
import generateChromosome from "./generateChromosome";
import getFirstChromosome from "./getFirstChromosome";

export default (
  points: IPoint[],
  size: number,
  finishId?: number
): IChromosome[] => {
  const population = [];

  const firstChromosome = getFirstChromosome(points, finishId);
  population.push(firstChromosome);

  for (let index = 0, length = size - 1; index < length; index++) {
    population.push(generateChromosome(firstChromosome, finishId));
  }

  return population;
};
