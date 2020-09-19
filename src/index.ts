import { IPoint } from "./models/Point";
import { IValue } from "./models/Value";
import generatePopulation from "./utils/generatePopulation";
import { sortBy } from "lodash";
import pickParents from "./utils/pickParents";
import select from "./utils/select";
import getPopulationWithFitness from "./utils/getPopulationWithFitness";
import mutate from "./utils/mutate";
import cross from "./utils/cross";
import getFitnessForChromosome from "./utils/getFitnessForChromosome";
import getSplitPosition from "./utils/getSplitPosition";
import { IParameters } from "./models/Params";
import { IResult } from "./models/Result";
import checkParams from "./utils/checkParams";
import getPermutationsResult from "./utils/getPermutationsResult";
import getParams from "./utils/getParams";

const solve = (
  points: IPoint[],
  values: IValue[],
  parameters?: IParameters
): IResult => {
  const params = getParams(parameters);

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

  let populationWithFitness;

  if (params.population.length > 0) {
    populationWithFitness = params.population;
  } else {
    populationWithFitness = getPopulationWithFitness(
      generatePopulation(points, params.populationAmount, params.finishId),
      values
    );
  }

  for (let i = 0, l = params.generations; i < l; i++) {
    const parents = pickParents(populationWithFitness);
    const splitPosition = getSplitPosition(populationWithFitness[0].chromosome);
    const children = cross(parents, values, splitPosition, params.finishId);
    const firstChromosome = mutate(
      children[0].chromosome,
      params.mutate,
      params.finishId
    );
    const secondChromosome = mutate(
      children[1].chromosome,
      params.mutate,
      params.finishId
    );
    const firstChild = {
      chromosome: firstChromosome,
      fitness: getFitnessForChromosome(firstChromosome, values),
    };
    const secondChild = {
      chromosome: secondChromosome,
      fitness: getFitnessForChromosome(secondChromosome, values),
    };
    populationWithFitness.push(firstChild);
    populationWithFitness.push(secondChild);
    populationWithFitness = sortBy(populationWithFitness, "fitness");
    populationWithFitness.pop();
    populationWithFitness.pop();
  }

  const individual = populationWithFitness[0].chromosome;
  return {
    result: select(individual, points),
    latestPopulation: populationWithFitness,
  };
};

export default solve;

// TODO: populationWithFitness -> population
