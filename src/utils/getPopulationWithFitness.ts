import { IChromosomeWithFitness } from "../models/Chromosome";
import getFitnessForChromosome from "./getFitnessForChromosome";
import { IPopulation } from "../models/Population";
import { IValue } from "../models/Value";

export default (
  population: IPopulation,
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
