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

  expect(
    solve(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
        { id: 2, name: "Псков" },
        { id: 3, name: "Череповец" },
      ],
      [
        { set: [0, 1], value: 703 },
        { set: [0, 2], value: 292 },
        { set: [0, 3], value: 548 },
        { set: [1, 2], value: 731 },
        { set: [1, 3], value: 492 },
        { set: [2, 3], value: 754 },
      ]
    )
  ).toStrictEqual({
    result: [
      { id: 0, name: "Санкт-Петербург" },
      { id: 2, name: "Псков" },
      { id: 1, name: "Москва" },
      { id: 3, name: "Череповец" },
    ],
  });

  expect(
    solve(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
        { id: 2, name: "Псков" },
        { id: 3, name: "Череповец" },
      ],
      [
        { set: [0, 1], value: 703 },
        { set: [0, 2], value: 292 },
        { set: [0, 3], value: 548 },
        { set: [1, 2], value: 731 },
        { set: [1, 3], value: 492 },
        { set: [2, 3], value: 754 },
      ],
      {
        finishId: 1,
      }
    )
  ).toStrictEqual({
    result: [
      { id: 0, name: "Санкт-Петербург" },
      { id: 2, name: "Псков" },
      { id: 3, name: "Череповец" },
      { id: 1, name: "Москва" },
    ],
  });

  expect(
    solve(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
        { id: 2, name: "Псков" },
        { id: 3, name: "Череповец" },
        { id: 4, name: "Ярославль" },
      ],
      [
        { set: [0, 1], value: 703 },
        { set: [0, 2], value: 292 },
        { set: [0, 3], value: 548 },
        { set: [0, 4], value: 854 },
        { set: [1, 2], value: 731 },
        { set: [1, 3], value: 492 },
        { set: [1, 4], value: 266 },
        { set: [2, 3], value: 754 },
        { set: [2, 4], value: 990 },
        { set: [3, 4], value: 256 },
      ]
    )
  ).toStrictEqual({
    result: [
      { id: 0, name: "Санкт-Петербург" },
      { id: 2, name: "Псков" },
      { id: 1, name: "Москва" },
      { id: 4, name: "Ярославль" },
      { id: 3, name: "Череповец" },
    ],
  });

  expect(
    solve(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
        { id: 2, name: "Псков" },
        { id: 3, name: "Череповец" },
        { id: 4, name: "Ярославль" },
        { id: 5, name: "Тверь" },
      ],
      [
        { set: [0, 1], value: 703 },
        { set: [0, 2], value: 292 },
        { set: [0, 3], value: 548 },
        { set: [0, 4], value: 854 },
        { set: [0, 5], value: 535 },
        { set: [1, 2], value: 731 },
        { set: [1, 3], value: 492 },
        { set: [1, 4], value: 266 },
        { set: [1, 5], value: 167 },
        { set: [2, 3], value: 754 },
        { set: [2, 4], value: 990 },
        { set: [2, 5], value: 596 },
        { set: [3, 4], value: 256 },
        { set: [3, 5], value: 401 },
        { set: [4, 5], value: 328 },
      ]
    )
  ).toStrictEqual({
    result: [
      { id: 0, name: "Санкт-Петербург" },
      { id: 2, name: "Псков" },
      { id: 5, name: "Тверь" },
      { id: 1, name: "Москва" },
      { id: 4, name: "Ярославль" },
      { id: 3, name: "Череповец" },
    ],
  });

  expect(
    solve(
      [
        { id: 0, name: "Санкт-Петербург" },
        { id: 1, name: "Москва" },
        { id: 2, name: "Псков" },
        { id: 3, name: "Череповец" },
        { id: 4, name: "Ярославль" },
        { id: 5, name: "Тверь" },
      ],
      [
        { set: [0, 1], value: 703 },
        { set: [0, 2], value: 292 },
        { set: [0, 3], value: 548 },
        { set: [0, 4], value: 854 },
        { set: [0, 5], value: 535 },
        { set: [1, 2], value: 731 },
        { set: [1, 3], value: 492 },
        { set: [1, 4], value: 266 },
        { set: [1, 5], value: 167 },
        { set: [2, 3], value: 754 },
        { set: [2, 4], value: 990 },
        { set: [2, 5], value: 596 },
        { set: [3, 4], value: 256 },
        { set: [3, 5], value: 401 },
        { set: [4, 5], value: 328 },
      ],
      {
        finishId: 4,
      }
    )
  ).toStrictEqual({
    result: [
      { id: 0, name: "Санкт-Петербург" },
      { id: 2, name: "Псков" },
      { id: 5, name: "Тверь" },
      { id: 1, name: "Москва" },
      { id: 3, name: "Череповец" },
      { id: 4, name: "Ярославль" },
    ],
  });
});
