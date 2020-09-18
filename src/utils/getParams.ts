import { IParams } from "../models/Params";

export default (parameters: IParams | undefined) => ({
  population: parameters?.population ?? [],
  populationAmount: parameters?.populationAmount ?? 20,
  generations: parameters?.generations ?? 100,
  mutate: parameters?.mutate ?? 20,
  finishId: parameters?.finishId ?? undefined,
  permutations: parameters?.permutations ?? 7,
  dangerMode: parameters?.dangerMode ?? false,
});
