import getParameters from "../getParameters";

test("getParameters", () => {
  expect(getParameters({ finishId: 5 })).toStrictEqual({
    population: [],
    populationAmount: 20,
    generations: 100,
    mutate: 20,
    finishId: 5,
    permutations: 7,
    dangerMode: false,
  });

  expect(getParameters({ mutate: 5 })).toStrictEqual({
    population: [],
    populationAmount: 20,
    generations: 100,
    mutate: 5,
    finishId: undefined,
    permutations: 7,
    dangerMode: false,
  });

  expect(
    getParameters({ mutate: 40, finishId: 3, permutations: 9 })
  ).toStrictEqual({
    population: [],
    populationAmount: 20,
    generations: 100,
    mutate: 40,
    finishId: 3,
    permutations: 9,
    dangerMode: false,
  });
});
