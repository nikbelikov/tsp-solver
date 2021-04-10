import { IParameters, IParams } from "../models/Params";

export default (parameters: IParams | undefined): IParameters => ({
  population: parameters?.population ?? [],
  populationAmount: parameters?.populationAmount ?? 20,
  generations: parameters?.generations ?? 100,
  finishId: parameters?.finishId ?? undefined,
  permutations: parameters?.permutations ?? 7,
  dangerMode: parameters?.dangerMode ?? false,
});
