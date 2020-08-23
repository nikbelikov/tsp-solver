import { IChromosome } from "../models/Chromosome";
import { random, clone, remove } from "lodash";

export default (chromosome: IChromosome, percent: number): IChromosome => {
  const randomNumber = random(1, 100);

  if (randomNumber <= percent) {
    let chromosomeCopy = clone(chromosome);

    const firstPosition = random(1, chromosomeCopy.length - 1);
    chromosomeCopy = remove(chromosomeCopy, (item) => {
      return item !== firstPosition;
    });
    const secondPosition = chromosomeCopy[random(1, chromosomeCopy.length - 1)];

    const swapPositions = [firstPosition, secondPosition];
    const resultChromosome = clone(chromosome);

    [resultChromosome[swapPositions[0]], resultChromosome[swapPositions[1]]] = [
      resultChromosome[swapPositions[1]],
      resultChromosome[swapPositions[0]],
    ];

    return resultChromosome;
  }

  return chromosome;
};
