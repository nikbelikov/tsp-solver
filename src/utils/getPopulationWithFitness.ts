import { IChromosome, IChromosomeWithFitness } from "../models/Chromosome";
import getFitnessForChromosome from "./getFitnessForChromosome";
import { IValue } from "../models/Value";

export default (
  population: IChromosome[],
  values: IValue[]
): IChromosomeWithFitness[] => {
  const result: IChromosomeWithFitness[] = [];

  population.forEach((chromosome) => {
    const chromosomeWithFitness = {
      chromosome,
      fitness: getFitnessForChromosome(chromosome, values),
    };
    result.push(chromosomeWithFitness);
  });

  return result;
};
