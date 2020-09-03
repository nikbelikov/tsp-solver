import solve from "../index";

// const POINTS = [
//   { id: 0, name: "Санкт-Петербург" },
//   { id: 1, name: "Москва" },
//   { id: 2, name: "Псков" },
//   { id: 3, name: "Череповец" },
//   { id: 4, name: "Ярославль" },
//   // { id: 5, name: "Тверь" },
// ];
//
// const VALUES = [
//   { set: [0, 1], value: 703 },
//   { set: [0, 2], value: 292 },
//   { set: [0, 3], value: 548 },
//   { set: [0, 4], value: 854 },
//   // { set: [0, 5], value: 535 },
//   { set: [1, 2], value: 731 },
//   { set: [1, 3], value: 492 },
//   { set: [1, 4], value: 266 },
//   // { set: [1, 5], value: 167 },
//   { set: [2, 3], value: 754 },
//   { set: [2, 4], value: 990 },
//   // { set: [2, 5], value: 596 },
//   { set: [3, 4], value: 256 },
//   // { set: [3, 5], value: 401 },
//   // { set: [4, 5], value: 328 },
// ];

test("solve", () => {
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
});
