import { find } from "lodash";
import { IPoint } from "../models/Point";
import { IChromosome } from "../models/Chromosome";

export default (individual: IChromosome, points: IPoint[]) => {
  const result: any = [];

  individual.forEach((item: number) => {
    result.push(find(points, { id: item }));
  });

  return result;
};
