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
