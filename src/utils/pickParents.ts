import { clone, random } from "lodash";
import { IChromosomeWithFitness } from "../models/Chromosome";

export default (
  population: IChromosomeWithFitness[]
): IChromosomeWithFitness[] => {
  const result: IChromosomeWithFitness[] = [];

  let populationCopy: IChromosomeWithFitness[] = clone(population);
  let randomNumber: number = random(0, populationCopy.length - 1);

  result.push(populationCopy[randomNumber]);

  populationCopy = populationCopy.filter(
    (item, index) => index !== randomNumber
  );

  randomNumber = random(0, populationCopy.length - 1);
  result.push(populationCopy[randomNumber]);

  return result;
};
