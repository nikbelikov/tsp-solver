import { IPoint } from "../models/Point";
import { IValue } from "../models/Value";
import { IParameters } from "../models/Params";
declare const _default: (points: IPoint[], values: IValue[], params: IParameters) => {
    result: IPoint[];
    latestPopulation: import("../models/Chromosome").IChromosomeWithFitness[];
};
export default _default;
