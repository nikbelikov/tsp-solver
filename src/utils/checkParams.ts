import { findIndex } from "lodash";
import { IPoint } from "../models/Point";
import { IValue } from "../models/Value";

export default (points: IPoint[], values: IValue[]) => {
  points.forEach((point, index) => {
    if (point.id !== index) {
      throw new Error(
        `Looks like '${index}' id is missing. Your points are: ${JSON.stringify(
          points
        )}, but expected format is: ${JSON.stringify([
          { id: 0, name: "Saint Petersburg" },
          { id: 1, name: "Moscow" },
          { id: 2, name: "Pskov" },
        ])}...`
      );
    }
  });

  for (
    let firstIndex = 0, firstIndexLength = points.length;
    firstIndex < firstIndexLength;
    firstIndex++
  ) {
    for (
      let secondIndex = firstIndex + 1, secondIndexLength = points.length;
      secondIndex < secondIndexLength;
      secondIndex++
    ) {
      const checkingSet = [firstIndex, secondIndex];
      if (findIndex(values, { set: checkingSet }) === -1) {
        throw new Error(
          `Set ${JSON.stringify(
            checkingSet
          )} is not in your values array. Your values are ${JSON.stringify(
            values
          )}`
        );
      }
    }
  }
};
