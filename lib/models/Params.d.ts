import { IChromosomeWithFitness } from "./Chromosome";
export interface IParams {
    population?: IChromosomeWithFitness[];
    populationAmount?: number;
    generations?: number;
    finishId?: number;
    permutations?: number;
    dangerMode?: boolean;
}
export interface IParameters {
    population: IChromosomeWithFitness[];
    populationAmount: number;
    generations: number;
    finishId: number | undefined;
    permutations: number;
    dangerMode: boolean;
}
