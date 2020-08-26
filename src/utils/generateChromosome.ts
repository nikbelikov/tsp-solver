import { shuffle, concat } from "lodash";
import { IChromosome } from "../models/Chromosome";

export default (
  chromosome: IChromosome,
  idToReturn: number | undefined
): IChromosome => {
  if (idToReturn === undefined) {
    const tail = chromosome.slice(1, chromosome.length);
    return concat(chromosome[0], shuffle(tail));
  }

  const center = chromosome.slice(1, chromosome.length - 1);
  return concat(
    chromosome[0],
    shuffle(center),
    chromosome[chromosome.length - 1]
  );
};
