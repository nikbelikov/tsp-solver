import { sum } from "lodash";
import getChromosome from "../getChromosome";

const POINTS = [
  { id: 0, name: "Воронеж" },
  { id: 1, name: "Санкт-Петербург" },
  { id: 2, name: "Псков" },
  { id: 3, name: "Казань" },
];

test("getChromosome", () => {
  expect(sum(getChromosome(POINTS))).toBe(6);
  expect(sum(getChromosome(POINTS))).toBe(6);
  expect(sum(getChromosome(POINTS))).toBe(6);
  expect(sum(getChromosome(POINTS))).toBe(6);
  expect(sum(getChromosome(POINTS))).toBe(6);
});
