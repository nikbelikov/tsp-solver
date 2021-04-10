import getPopulationWithFitness from "./getPopulationWithFitness";
import generatePopulation from "./generatePopulation";
import getFitnessForChromosome from "./getFitnessForChromosome";
import { sortBy } from "lodash";
import select from "./select";
import { IPoint } from "../models/Point";
import { IValue } from "../models/Value";
import { IParameters } from "../models/Params";
import generateChromosome from "./generateChromosome";

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
    const randomChromosome = generateChromosome(
      populationWithFitness[0].chromosome,
      params.finishId
    );
    const randomIndividual = {
      chromosome: randomChromosome,
      fitness: getFitnessForChromosome(randomChromosome, values),
    };
    populationWithFitness.push(randomIndividual);
    populationWithFitness = sortBy(populationWithFitness, "fitness");
    populationWithFitness.pop();
  }

  const individual = populationWithFitness[0].chromosome;
  return {
    result: select(individual, points),
    latestPopulation: populationWithFitness,
  };
};
