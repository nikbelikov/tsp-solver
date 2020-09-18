import { IChromosome, IChromosomeWithFitness } from "../models/Chromosome";
import getFitnessForChromosome from "./getFitnessForChromosome";
import { IValue } from "../models/Value";
import { clone } from "lodash";

const getChild = (
  splitPosition: number,
  child: number[],
  chromosomeA: number[],
  chromosomeB: number[],
  values: IValue[]
) => {
  for (let i = 0, l = splitPosition; i <= l; i++) {
    child.push(chromosomeA[i]);
  }

  for (let i = splitPosition + 1, l = chromosomeB.length - 1; i <= l; i++) {
    if (!child.includes(chromosomeB[i])) {
      child.push(chromosomeB[i]);
    }
  }

  chromosomeB.forEach((item) => {
    if (!child.includes(item)) {
      child.push(item);
    }
  });

  return {
    chromosome: child,
    fitness: getFitnessForChromosome(child, values),
  };
};

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

  const one = getChild(
    splitPosition,
    firstChild,
    firstChromosome,
    secondChromosome,
    values
  );

  const two = getChild(
    splitPosition,
    secondChild,
    secondChromosome,
    firstChromosome,
    values
  );

  if (finishId !== undefined) {
    one.chromosome.push(finishId);
    two.chromosome.push(finishId);
  }

  return [one, two];
};
