import getPopulationWithFitness from "./getPopulationWithFitness";
import generatePopulation from "./generatePopulation";
import pickParents from "./pickParents";
import getSplitPosition from "./getSplitPosition";
import cross from "./cross";
import mutate from "./mutate";
import getFitnessForChromosome from "./getFitnessForChromosome";
import { sortBy } from "lodash";
import select from "./select";
import { IPoint } from "../models/Point";
import { IValue } from "../models/Value";
import { IParameters } from "../models/Params";

export default (points: IPoint[], values: IValue[], params: IParameters) => {
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
