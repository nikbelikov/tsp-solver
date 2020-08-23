import { IPoint } from "../models/Point";
import { shuffle, concat } from "lodash";

export default (points: IPoint[]): number[] => {
  const ids: number[] = [];
  points.forEach((point) => {
    ids.push(point.id);
  });

  const tail = ids.slice(1, ids.length);

  return concat(ids[0], shuffle(tail));
};
