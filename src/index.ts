import { IPoint } from "./models/Point";
import { IValue } from "./models/Value";
import { IParams } from "./models/Params";
import { IResult } from "./models/Result";
import checkParams from "./utils/checkParams";
import getPermutationsResult from "./utils/getPermutationsResult";
import getParameters from "./utils/getParameters";
import getGeneticResult from "./utils/getGeneticResult";

const solve = (
  points: IPoint[],
  values: IValue[],
  parameters?: IParams
): IResult => {
  const params = getParameters(parameters);

  if (!params.dangerMode) {
    checkParams(points, values, params);
  }

  if (points.length < 3) {
    return {
      result: points,
    };
  }

  if (points.length <= params.permutations) {
    return getPermutationsResult(points, values, params);
  }

  return getGeneticResult(points, values, params);
};

export default solve;

// TODO: populationWithFitness -> population
