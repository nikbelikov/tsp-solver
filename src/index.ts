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
import { IParams } from "./models/Params";
import { IResult } from "./models/Result";
import checkParams from "./utils/checkParams";
import getFirstChromosome from "./utils/getFirstChromosome";

const solve = (
  points: IPoint[],
  values: IValue[],
  parameters?: IParams
): IResult => {
  const params = {
    population: parameters?.population ?? [],
    populationAmount: parameters?.populationAmount ?? 20,
    generations: parameters?.generations ?? 100,
    mutate: parameters?.mutate ?? 20,
    finishId: parameters?.finishId ?? undefined,
    permutations: parameters?.permutations ?? 7,
  };

  checkParams(points, values, params);

  let populationWithFitness;

  if (points.length < 3) {
    return {
      result: points,
    };
  }

  let permArr: any = [];
  let usedChars: any = [];

  if (points.length <= params.permutations) {
    const getPermutations = (array: number[]) => {
      let index, currentItem;
      for (index = 0; index < array.length; index++) {
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

    const chromosomeForPermutation = getFirstChromosome(
      points,
      params.finishId
    );

    chromosomeForPermutation.splice(0, 1);

    if (params.finishId !== undefined) {
      chromosomeForPermutation.pop();
    }

    let permutations = getPermutations(chromosomeForPermutation);
    permutations = permutations.map((item: any) => [0, ...item]);

    if (params.finishId !== undefined) {
      permutations = permutations.map((item: any) => [
        ...item,
        params.finishId,
      ]);
    }

    populationWithFitness = getPopulationWithFitness(permutations, values);
    populationWithFitness = sortBy(populationWithFitness, "fitness");
    const individual = populationWithFitness[0].chromosome;

    return {
      result: select(individual, points),
    };
  }

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
