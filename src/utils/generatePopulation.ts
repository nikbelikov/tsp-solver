import { IPoint } from "../models/Point";
import { IChromosome } from "../models/Chromosome";
import generateChromosome from "./generateChromosome";
import getFirstChromosome from "./getFirstChromosome";

export default (
  points: IPoint[],
  size: number,
  idReturnTo?: number
): IChromosome[] => {
  const population = [];

  const firstChromosome = getFirstChromosome(points, idReturnTo);
  population.push(firstChromosome);

  for (let index = 0, length = size - 1; index < length; index++) {
    population.push(generateChromosome(firstChromosome, idReturnTo));
  }

  return population;
};
