import { IChromosome } from "../models/Chromosome";
import { IValue } from "../models/Value";
import { find } from "lodash";

export default (chromosome: IChromosome, values: IValue[]): number => {
  let fitness: number = 0;

  for (let i = 0, l = chromosome.length; i < l; i++) {
    const set: number[] = [];
    set.push(chromosome[i]);
    set.push(chromosome[i + 1]);
    let valueFromSet =
      find(values, (item) => {
        return item.set[0] === set[0] && item.set[1] === set[1];
      })?.value || 0;

    if (valueFromSet === 0) {
      valueFromSet = find(values, { set })?.value || 0;
    }

    fitness += valueFromSet;
  }

  return fitness;
};
