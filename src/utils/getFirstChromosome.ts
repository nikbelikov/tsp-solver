import { IPoint } from "../models/Point";
import { IChromosome } from "../models/Chromosome";

export default (
  points: IPoint[],
  finishId: number | undefined
): IChromosome => {
  const firstChromosome: number[] = [];
  points.forEach((point) => {
    firstChromosome.push(point.id);
  });

  if (finishId !== undefined && finishId === 0) {
    firstChromosome.push(finishId);
    return firstChromosome;
  }

  const lastItem = firstChromosome[firstChromosome.length - 1];

  if (finishId !== undefined && lastItem !== finishId) {
    firstChromosome.push(
      firstChromosome.splice(firstChromosome.indexOf(finishId), 1)[0]
    );
  }

  return firstChromosome;
};
