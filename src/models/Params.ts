import { IChromosomeWithFitness } from "./Chromosome";

export interface IParams {
  population?: IChromosomeWithFitness[];
  populationAmount?: number;
  generations?: number;
  mutate?: number;
  idReturnTo?: number;
}
