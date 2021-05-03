# TSP Solver

[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/nikbelikov/tsp-solver/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@nikbelikov/tsp-solver.svg?style=flat)](https://www.npmjs.com/package/@nikbelikov/tsp-solver)

## What a heck is that?

This package will help you in solving the traveling salesman problem.

## Demo

[https://codesandbox.io/s/musing-davinci-i3tss](https://codesandbox.io/s/musing-davinci-i3tss)

Also, a local demo page is available at the `/demo/` folder. To run it, just do `npm run demo`. In this case you need to install [https://parceljs.org](https://parceljs.org) first.

## How to use it?

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

// when points.length <= permutations parameter
// => { result: [{id, name}] }

// other time
// => { latestPopulation: [{chromosome, fitness}], result: [{id, name}] }
```

## Parameters

They are all set by default, but you can change one, two, or even all of them.

```
const params = {
  population: ...,
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
| `finishId` | number | undefined | The `Id` you need to finish at. If `undefined`, the algorithm will find a better way to visit all the cities and no matter where you will finish the route. If you want to return to a start city, pass through 0. If you want to finish at a particular point, pass through an index of that point (for example, `TSPSolver(points, values, { finishId: 2 })`). |
| `permutations` | number | 7 | The number indicates a count of cities when the package will generate all possible permutations of nodes and **will ignore the genetic algorithm**. Can not be less than 5. |
| `dangerMode` | boolean | false | If `true`, the package will ignore parameters check. It can increase performance, but be careful with it. |

### About Values

If you have, for example, a `[2, 1]` set in some route, the algorithm will try to find the exact value for that set. If not, it'll check for `[1, 2]` value in case if it exists.

So this behavior allows you to describe situations when a path from one city to another is equal to both directions. Also, you can implement situations when a return path is different.

For example: 

```
[0, 2, 1]

[
  { set: [0, 1], value: 1 },
  { set: [0, 2], value: 3 }, <-
  { set: [1, 2], value: 6 }, <-
]
```

The path here will be 9:

```
0 -> 2 = 3
2 -> 1 = 6
```

And:

```
[0, 2, 1]

[
  { set: [0, 1], value: 1 },
  { set: [0, 2], value: 3 }, <-
  { set: [1, 2], value: 6 },
  { set: [2, 1], value: 10 }, <-
]
```

The path is 13:

```
0 -> 2 = 3
2 -> 1 = 10
```

## Little more about it

As you probably know the Traveling Salesman Problem can be solved only by iterating all possible ways from one city to another. But the thing is that you just can't do that. Because at some number of cities, for example, 16, you will have `(n-1)!/2 = 653837184000` variants you need to check.

And here many algorithms come out. Some of them more efficient than others. I learned that the better way to solve the problem is to use a branch and bound method. But in the first version of my package, I selected a more simple method – a **genetic algorithm**. But simplified one.

I think it has quite [wide settings](https://github.com/nikbelikov/tsp-solver#parameters) you can work with. For example, you can set a return city as a place you need to finish. Or you can choose some other city. And when the situation dictates that no matter where to finish, you have that opportunity too.

The package allows you to describe situations when a path from one city to another is equal to both directions. Also, you can implement situations when a return path is different.

If cities are less than 3, you will instantly get those cities as a result.

From 3 to 7 the package will check all possible permutations and will find out the better way to visit all points with minimum path length. You can change the `permutations` parameter if you want.

8 and more — the genetic algorithm begins and the rest parameters become available, such as `populationAmount`, `generations`, and more.

The genetic algorithm will find out a better way to visit cities and will return a result as soon as possible. But remember not to use large values for parameters, because it can freeze your web browser.

To implement a non-stopping search of a better solution I propose to use the `population` parameter. You will get a good population from the latest iteration. And you can pass through this array [to a function](https://github.com/nikbelikov/tsp-solver/blob/master/demo/index.ts#L72). So the package will not doing a generation from the start and will use your array. In this case, the search continues and you can make stop, play, pause buttons to control the process.

Also, the package will help you by checking incoming parameters. For example, maybe you forgot to set a value from one city to another. The package will tell you which one is missing. Parameters checking work every time you initiate a function but you can turn it off to increase performance a little bit.

## Contributing

Certainly, **feel free to contribute** 😀

Just make a [Pull request](https://github.com/nikbelikov/tsp-solver/pulls) if you see how you can improve this tool.
