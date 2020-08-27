import { IChromosome } from "../models/Chromosome";
import { random, clone, remove } from "lodash";

export default (
  chromosome: IChromosome,
  percent: number,
  idReturnTo?: number
): IChromosome => {
  const randomNumber = random(1, 100);

  if (randomNumber <= percent) {
    let chromosomeCopy = clone(chromosome);
    const endOfRandomising = idReturnTo !== undefined ? 2 : 1;

    let indexesLeft = [];
    for (let i = 1, l = chromosomeCopy.length - endOfRandomising; i < l; i++) {
      indexesLeft.push(i);
    }

    const firstPosition = random(1, chromosomeCopy.length - endOfRandomising);
    indexesLeft = remove(indexesLeft, (item) => {
      return item !== firstPosition;
    });
    const secondPosition = indexesLeft[random(1, indexesLeft.length - 1)];

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
