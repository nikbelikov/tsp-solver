import { random } from "lodash";
import { IChromosome, IChromosomeWithFitness } from "../models/Chromosome";
import getFitnessForChromosome from "./getFitnessForChromosome";
import { IValue } from "../models/Value";

export default (
  population: IChromosomeWithFitness[],
  values: IValue[],
  splitPosition: number
): IChromosomeWithFitness[] => {
  const firstParent = population[0];
  const secondParent = population[1];

  const firstChild: IChromosome = [];
  const secondChild: IChromosome = [];

  for (let i = 0, l = splitPosition; i <= l; i++) {
    firstChild.push(firstParent.chromosome[i]);
  }

  for (
    let i = splitPosition + 1, l = secondParent.chromosome.length - 1;
    i <= l;
    i++
  ) {
    if (!firstChild.includes(secondParent.chromosome[i])) {
      firstChild.push(secondParent.chromosome[i]);
    }
  }

  secondParent.chromosome.forEach((item) => {
    if (!firstChild.includes(item)) {
      firstChild.push(item);
    }
  });

  const one = {
    chromosome: firstChild,
    fitness: getFitnessForChromosome(firstChild, values),
  };

  for (let i = 0, l = splitPosition; i <= l; i++) {
    secondChild.push(secondParent.chromosome[i]);
  }

  for (
    let i = splitPosition + 1, l = firstParent.chromosome.length - 1;
    i <= l;
    i++
  ) {
    if (!secondChild.includes(firstParent.chromosome[i])) {
      secondChild.push(firstParent.chromosome[i]);
    }
  }

  firstParent.chromosome.forEach((item) => {
    if (!secondChild.includes(item)) {
      secondChild.push(item);
    }
  });

  const two = {
    chromosome: secondChild,
    fitness: getFitnessForChromosome(secondChild, values),
  };

  return [one, two];
};
