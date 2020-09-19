import { IChromosomeWithFitness } from "./Chromosome";

export interface IParameters {
  population: IChromosomeWithFitness[];
  populationAmount: number;
  generations: number;
  mutate: number;
  finishId: number | undefined;
  permutations: number;
  dangerMode: boolean;
}
