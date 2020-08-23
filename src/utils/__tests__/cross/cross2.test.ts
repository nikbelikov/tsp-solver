import cross from "../../cross";

const VALUES = [
  { set: [0, 1], value: 100 },
  { set: [0, 2], value: 200 },
  { set: [0, 3], value: 300 },
  { set: [1, 2], value: 400 },
  { set: [1, 3], value: 100 },
  { set: [2, 3], value: 200 },
];

const POPULATION = [
  {
    chromosome: [0, 1, 2, 3],
    fitness: 700,
  },
  {
    chromosome: [0, 3, 1, 2],
    fitness: 800,
  },
];

const RESULT = [
  {
    chromosome: [0, 1, 2, 3],
    fitness: 700,
  },
  {
    chromosome: [0, 3, 1, 2],
    fitness: 800,
  },
];

test("cross", () => {
  expect(cross(POPULATION, VALUES, 2)).toStrictEqual(RESULT);
});
