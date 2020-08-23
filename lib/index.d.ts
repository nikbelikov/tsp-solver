import { IPoint } from "./models/Point";
import { IValue } from "./models/Value";
import { IChromosomeWithFitness } from "./models/Chromosome";
interface IParams {
    population?: IChromosomeWithFitness[];
    populationAmount?: number;
    generations?: number;
    mutate?: number;
}
interface IResult {
    result: IPoint;
    latestPopulation: IChromosomeWithFitness[];
}
declare const solve: (points: IPoint[], values: IValue[], params?: IParams | undefined) => IResult;
export default solve;
