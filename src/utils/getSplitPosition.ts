import { random } from "lodash";
import { IChromosome } from "../models/Chromosome";

export default (chromosome: IChromosome) => {
  return random(1, chromosome.length - 2);
};
