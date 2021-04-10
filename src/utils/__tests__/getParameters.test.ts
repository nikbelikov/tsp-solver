import getParameters from "../getParameters";

test("getParameters", () => {
  expect(getParameters({ finishId: 5 })).toStrictEqual({
    population: [],
    populationAmount: 20,
    generations: 100,
    finishId: 5,
    permutations: 7,
    dangerMode: false,
  });

  expect(getParameters({ finishId: 3, permutations: 9 })).toStrictEqual({
    population: [],
    populationAmount: 20,
    generations: 100,
    finishId: 3,
    permutations: 9,
    dangerMode: false,
  });
});
