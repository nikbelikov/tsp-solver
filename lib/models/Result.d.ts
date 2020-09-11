import { IChromosomeWithFitness } from "./Chromosome";
import { IPoint } from "./Point";
export interface IResult {
    result: IPoint[];
    latestPopulation?: IChromosomeWithFitness[];
}
