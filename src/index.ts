import { IPoint } from "./models/Point";
import { IValue } from "./models/Value";
import getPopulation from "./utils/getPopulation";
import { sortBy } from "lodash";
import pickParents from "./utils/pickParents";
import select from "./utils/select";
import getPopulationWithFitness from "./utils/getPopulationWithFitness";
import mutate from "./utils/mutate";
import cross from "./utils/cross";
import getFitnessForChromosome from "./utils/getFitnessForChromosome";
import getSplitPosition from "./utils/getSplitPosition";
import { IChromosomeWithFitness } from "./models/Chromosome";

// TODO: move to models folder
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

const solve = (
  points: IPoint[],
  values: IValue[],
  params?: IParams
): IResult => {
  const solverParams = {
    population: params?.population || [],
    populationAmount: params?.populationAmount || 20,
    generations: params?.generations || 100,
    mutate: params?.mutate || 20,
  };

  let populationWithFitness;
  if (solverParams.population.length > 0) {
    populationWithFitness = solverParams.population;
  } else {
    populationWithFitness = getPopulationWithFitness(
      getPopulation(points, solverParams.populationAmount),
      values
    );
  }

  for (let i = 0, l = solverParams.generations; i < l; i++) {
    const children = cross(
      pickParents(populationWithFitness),
      values,
      getSplitPosition(populationWithFitness[0].chromosome)
    );
    const firstChromosome = mutate(children[0].chromosome, solverParams.mutate);
    const secondChromosome = mutate(
      children[1].chromosome,
      solverParams.mutate
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
