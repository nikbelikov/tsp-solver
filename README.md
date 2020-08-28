# TSP Solver

[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/nikbelikov/tsp-solver/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@nikbelikov/tsp-solver.svg?style=flat)](https://www.npmjs.com/package/@nikbelikov/tsp-solver)

> 🛠 This package is in development now. Please wait for a more stable version.

## What a heck is that?

This package will help you in solving the traveling salesman problem. It uses a genetic algorithm by now.

## How to use

Install the package:

```
npm i @nikbelikov/tsp-solver
```

And then:

```
import TSPSolver from '@nikbelikov/tsp-solver';

const POINTS = [
  { id: 0, name: "Saint Petersburg" },
  { id: 1, name: "Moscow" },
  { id: 2, name: "Pskov" },
  { id: 3, name: "Cherepovets" },
  { id: 4, name: "Yaroslavl" },
  { id: 5, name: "Tver" },
];

const VALUES = [
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
];

TSPSolver(POINTS, VALUES);
// => { latestPopulation: [{chromosome, fitness}], result: [{id, name}] }
```

## Parameters

They are all set by default, but you can change one, two, or even all of them.

```
const params = {
  population: ...,
  populationAmount: ...,
  generations: ...,
  mutate: ...,
  idReturnTo: ...,
}

TSPSolver(points, values, { ...params });
```

| Parameter | Type | Default value | Description |
|---|---|---|---|
| `population` | array | [] | You can pass through a population that comes as a result of a previous iteration. It has a format: `[{ chromosome: [number], fitness: number }]`. |
| `populationAmount` | number | 20 | Population amount which will be involved in a participation. Will be considered if the `population` parameter stays an empty array. |
| `generations` | number | 100 | How many generations you need to solve the problem. |
| `mutate` | number | 20 | Mutation percent for a crossed chromosomes. |
| `idReturnTo` | number | undefined | `Id` you need return to. If `undefined`, the algorithm will find a better way to visit all the cities and no matter where you will finish the route. If you want to return to a start city, pass through 0. If you want to finish at a particular point, pass through an index of that point (for example, `TSPSolver(points, values, { idReturnTo: 2 })`). |
