import getFirstChromosome from "../getFirstChromosome";

test("getFirstChromosome", () => {
  expect(
    getFirstChromosome(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
        { id: 2, name: "Псков" },
      ],
      0
    )
  ).toStrictEqual([0, 1, 2, 0]);

  expect(
    getFirstChromosome(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
        { id: 2, name: "Псков" },
        { id: 3, name: "Череповец" },
      ],
      0
    )
  ).toStrictEqual([0, 1, 2, 3, 0]);

  expect(
    getFirstChromosome(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
        { id: 2, name: "Псков" },
        { id: 3, name: "Череповец" },
      ],
      1
    )
  ).toStrictEqual([0, 2, 3, 1]);

  expect(
    getFirstChromosome(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
        { id: 2, name: "Псков" },
        { id: 3, name: "Череповец" },
      ],
      2
    )
  ).toStrictEqual([0, 1, 3, 2]);

  expect(
    getFirstChromosome(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
        { id: 2, name: "Псков" },
        { id: 3, name: "Череповец" },
      ],
      undefined
    )
  ).toStrictEqual([0, 1, 2, 3]);
});
