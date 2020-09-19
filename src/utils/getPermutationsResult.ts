import getFirstChromosome from "./getFirstChromosome";
import getPopulationWithFitness from "./getPopulationWithFitness";
import { sortBy } from "lodash";
import select from "./select";
import { IParams } from "../models/Params";
import { IPoint } from "../models/Point";
import { IValue } from "../models/Value";
import { IResult } from "../models/Result";

export default (
  points: IPoint[],
  values: IValue[],
  params?: IParams
): IResult => {
  let populationWithFitness;
  const permArr: any = [];
  const usedChars: any = [];

  const getPermutations = (array: number[]) => {
    let currentItem;

    for (let index = 0; index < array.length; index++) {
      currentItem = array.splice(index, 1)[0];
      usedChars.push(currentItem);
      if (array.length === 0) {
        permArr.push(usedChars.slice());
      }
      getPermutations(array);
      array.splice(index, 0, currentItem);
      usedChars.pop();
    }
    return permArr;
  };

  const chromosomeForPermutation = getFirstChromosome(points, params?.finishId);

  chromosomeForPermutation.splice(0, 1);

  if (params?.finishId !== undefined) {
    chromosomeForPermutation.pop();
  }

  let permutations = getPermutations(chromosomeForPermutation);
  permutations = permutations.map((item: any) => [0, ...item]);

  if (params?.finishId !== undefined) {
    permutations = permutations.map((item: any) => [...item, params?.finishId]);
  }

  populationWithFitness = getPopulationWithFitness(permutations, values);
  populationWithFitness = sortBy(populationWithFitness, "fitness");
  const individual = populationWithFitness[0].chromosome;

  return {
    result: select(individual, points),
  };
};
