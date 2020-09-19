import getFitnessForChromosome from "../getFitnessForChromosome";

test("getFitnessForChromosome", () => {
  expect(
    getFitnessForChromosome(
      [0, 2, 3, 1],
      [
        { set: [0, 1], value: 1 },
        { set: [0, 2], value: 2 },
        { set: [0, 3], value: 3 },
        { set: [1, 2], value: 4 },
        { set: [1, 3], value: 5 },
        { set: [2, 3], value: 6 },
      ]
    )
  ).toBe(13);

  expect(
    getFitnessForChromosome(
      [0, 2, 3, 1],
      [
        { set: [0, 1], value: 1 },
        { set: [0, 2], value: 2 },
        { set: [0, 3], value: 3 },
        { set: [1, 2], value: 4 },
        { set: [1, 3], value: 5 },
        { set: [2, 3], value: 6 },
        { set: [3, 1], value: 7 },
      ]
    )
  ).toBe(15);

  expect(
    getFitnessForChromosome(
      [0, 2, 1],
      [
        { set: [0, 1], value: 1 },
        { set: [0, 2], value: 3 },
        { set: [1, 2], value: 6 },
      ]
    )
  ).toBe(9);

  expect(
    getFitnessForChromosome(
      [0, 2, 1],
      [
        { set: [0, 1], value: 1 },
        { set: [0, 2], value: 3 },
        { set: [1, 2], value: 6 },
        { set: [2, 1], value: 10 },
      ]
    )
  ).toBe(13);
});
