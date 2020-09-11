import { IChromosome, IChromosomeWithFitness } from "../models/Chromosome";
import getFitnessForChromosome from "./getFitnessForChromosome";
import { IValue } from "../models/Value";
import { clone } from "lodash";

export default (
  parents: IChromosomeWithFitness[],
  values: IValue[],
  splitPosition: number,
  finishId?: number
): IChromosomeWithFitness[] => {
  const firstChromosome = clone(parents[0].chromosome);
  const secondChromosome = clone(parents[1].chromosome);

  const firstChild: IChromosome = [];
  const secondChild: IChromosome = [];

  if (finishId !== undefined) {
    firstChromosome.pop();
    secondChromosome.pop();
  }

  for (let i = 0, l = splitPosition; i <= l; i++) {
    firstChild.push(firstChromosome[i]);
  }

  for (
    let i = splitPosition + 1, l = secondChromosome.length - 1;
    i <= l;
    i++
  ) {
    if (!firstChild.includes(secondChromosome[i])) {
      firstChild.push(secondChromosome[i]);
    }
  }

  secondChromosome.forEach((item) => {
    if (!firstChild.includes(item)) {
      firstChild.push(item);
    }
  });

  const one = {
    chromosome: firstChild,
    fitness: getFitnessForChromosome(firstChild, values),
  };

  for (let i = 0, l = splitPosition; i <= l; i++) {
    secondChild.push(secondChromosome[i]);
  }

  for (let i = splitPosition + 1, l = firstChromosome.length - 1; i <= l; i++) {
    if (!secondChild.includes(firstChromosome[i])) {
      secondChild.push(firstChromosome[i]);
    }
  }

  firstChromosome.forEach((item) => {
    if (!secondChild.includes(item)) {
      secondChild.push(item);
    }
  });

  const two = {
    chromosome: secondChild,
    fitness: getFitnessForChromosome(secondChild, values),
  };

  if (finishId !== undefined) {
    one.chromosome.push(finishId);
    two.chromosome.push(finishId);
  }

  return [one, two];
};
