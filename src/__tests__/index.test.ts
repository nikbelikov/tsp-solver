import solve from "../index";

test("solve", () => {
  expect(
    solve([{ id: 0, name: "Санкт-Петербург" }], [{ set: [0, 0], value: 0 }])
  ).toStrictEqual({ result: [{ id: 0, name: "Санкт-Петербург" }] });

  expect(
    solve(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
      ],
      [
        { set: [0, 0], value: 0 },
        { set: [0, 1], value: 703 },
      ]
    )
  ).toStrictEqual({
    result: [
      { id: 0, name: "Санкт-Петербург" },
      { id: 1, name: "Москва" },
    ],
  });

  expect(
    solve(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
        { id: 2, name: "Псков" },
      ],
      [
        { set: [0, 1], value: 703 },
        { set: [0, 2], value: 292 },
        { set: [1, 2], value: 731 },
      ]
    )
  ).toStrictEqual({
    result: [
      { id: 0, name: "Санкт-Петербург" },
      { id: 2, name: "Псков" },
      { id: 1, name: "Москва" },
    ],
  });
});
