import { IChromosome } from "../models/Chromosome";
import { IValue } from "../models/Value";
import { find } from "lodash";

export default (chromosome: IChromosome, values: IValue[]): number => {
  let fitness: number = 0;

  for (let i = 0, l = chromosome.length; i < l; i++) {
    const set = [];
    set.push(chromosome[i]);
    set.push(chromosome[i + 1]);
    const valueForSet = find(values, { set })?.value || 0;
    fitness += valueForSet;
  }

  return fitness;
};
