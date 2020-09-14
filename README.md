# TSP Solver

[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/nikbelikov/tsp-solver/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@nikbelikov/tsp-solver.svg?style=flat)](https://www.npmjs.com/package/@nikbelikov/tsp-solver)

## What a heck is that?

This package will help you in solving the traveling salesman problem.

## Demo

[https://codesandbox.io/s/magical-zhukovsky-mdtyp](https://codesandbox.io/s/magical-zhukovsky-mdtyp)

## How to use

Install the package:

```
npm i @nikbelikov/tsp-solver
```

And then:

```
import TSPSolver from '@nikbelikov/tsp-solver';

const points = [
  { id: 0, name: "Praha" },
  { id: 1, name: "Paris" },
  { id: 2, name: "Rennes" },
  { id: 3, name: "Amsterdam" },
  { id: 4, name: "Hamburg" },
  { id: 5, name: "Budapest" },
  { id: 6, name: "Brno" },
  { id: 7, name: "Warszava" },
  { id: 8, name: "Milano" },
  ...
];

const values = [
  { set: [0, 1], value: 1032 },
  { set: [0, 2], value: 1375 },
  { set: [0, 3], value: 877 },
  { set: [0, 4], value: 639 },
  ...

  { set: [1, 2], value: 354 },
  { set: [1, 3], value: 517 },
  { set: [1, 4], value: 902 },
  { set: [1, 5], value: 1484 },
  ...

  { set: [2, 3], value: 856 },
  { set: [2, 4], value: 1245 },
  { set: [2, 5], value: 1823 },
  { set: [2, 6], value: 1570 },
  ...
];

TSPSolver(points, values);

// when permutations parameter <= POINTS.length
// => { result: [{id, name}] }

// other time
// => { latestPopulation: [{chromosome, fitness}], result: [{id, name}] }
```

## Parameters

They are all set by default, but you can change one, two, or even all of them.

```
const params = {
  population: ...,
  mutate: ...,
  finishId: ...,
  ...
}

TSPSolver(points, values, { ...params });
```

| Parameter | Type | Default value | Description |
|---|---|---|---|
| `population` | array | [] | You can pass through a population that comes as a result of a previous iteration. It has a format: `[{ chromosome: [number], fitness: number }]` (see **How to use** section). |
| `populationAmount` | number | 20 | Population amount which will be involved in a participation. Will be considered if the `population` parameter stays an empty array. |
| `generations` | number | 100 | How many generations you need to solve the problem. |
| `mutate` | number | 20 | Mutation percent for a crossed chromosomes. |
| `finishId` | number | undefined | `Id` you need to finish at. If `undefined`, the algorithm will find a better way to visit all the cities and no matter where you will finish the route. If you want to return to a start city, pass through 0. If you want to finish at a particular point, pass through an index of that point (for example, `TSPSolver(points, values, { finishId: 2 })`). |
| `permutations` | number | 7 | The number indicates a count of cities when the package will generate all possible permutations of nodes and **will ignore the genetic algorithm**. Can not be less than 5. |
| `dangerMode` | boolean | false | If `true`, the package will ignore parameters check. It can increase performance, but be careful with it. |
