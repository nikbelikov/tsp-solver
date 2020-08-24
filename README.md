## What a heck is that?

This package will help you in solving the traveling salesman problem.

> 🛠 This package is in a development now. Please wait for a more stable version.

## How to use

```
import TSPSolver from '@nikbelikov/tsp-solver';

const POINTS = [
  { id: 0, name: "Saint Petersburg" },
  { id: 1, name: "Moscow" },
  { id: 2, name: "Pskov" },
  { id: 3, name: "Cherepovets" },
];

const VALUES = [
  { set: [0, 1], value: 697 },
  { set: [0, 2], value: 286 },
  { set: [0, 3], value: 536 },
  { set: [1, 2], value: 731 },
  { set: [1, 3], value: 492 },
  { set: [2, 3], value: 756 },
];

TSPSolver(POINTS, VALUES);
// => { latestPopulation: [{chromosome, fitness}], result: [{id, name}] }
```

## Parameters (not required)

```
const params = {
  population: ...,
  populationAmount: ...,
  generations: ...,
  mutate: ...,
}

TSPSolver(points, values, { ...params });
```

| Parameter | Type | Default value | Description |
|---|---|---|---|
| `population` | array | [] | You can pass through a population which comes as a result of a previous iteration. It has a format: `[{ chromosome: [number], fitness: number }]` |
| `populationAmount` | number | 20 | Population amount which will be involved in a participation. |
| `generations` | number | 100 | For how many generations we need to solve the problem. |
| `mutate` | number | 20 | Mutation amount for a crossed chromosomes. |
