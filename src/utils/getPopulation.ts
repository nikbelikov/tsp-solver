import { IPoint } from "../models/Point";
import { IChromosome } from "../models/Chromosome";
import generateChromosome from "./getChromosome";

export default (points: IPoint[], size: number): IChromosome[] => {
  const population = [];

  const firstChromosome: number[] = [];
  points.forEach((point) => {
    firstChromosome.push(point.id);
  });

  population.push(firstChromosome);

  for (let index = 0, length = size - 1; index < length; index++) {
    population.push(generateChromosome(points));
  }

  return population;
};
