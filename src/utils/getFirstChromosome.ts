import { IPoint } from "../models/Point";

export default (points: IPoint[], idToReturn: number | undefined) => {
  const firstChromosome: number[] = [];
  points.forEach((point) => {
    firstChromosome.push(point.id);
  });

  if (idToReturn !== undefined && idToReturn === 0) {
    firstChromosome.push(idToReturn);
    return firstChromosome;
  }

  const lastItem = firstChromosome[firstChromosome.length - 1];

  if (idToReturn !== undefined && lastItem !== idToReturn) {
    firstChromosome.push(
      firstChromosome.splice(firstChromosome.indexOf(idToReturn), 1)[0]
    );
  }

  return firstChromosome;
};
