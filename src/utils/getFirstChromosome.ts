import { IPoint } from "../models/Point";

export default (points: IPoint[], idReturnTo: number | undefined) => {
  const firstChromosome: number[] = [];
  points.forEach((point) => {
    firstChromosome.push(point.id);
  });

  if (idReturnTo !== undefined && idReturnTo === 0) {
    firstChromosome.push(idReturnTo);
    return firstChromosome;
  }

  const lastItem = firstChromosome[firstChromosome.length - 1];

  if (idReturnTo !== undefined && lastItem !== idReturnTo) {
    firstChromosome.push(
      firstChromosome.splice(firstChromosome.indexOf(idReturnTo), 1)[0]
    );
  }

  return firstChromosome;
};
