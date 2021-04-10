import TSPSolver from "../src/index";
import { IChromosomeWithFitness } from "../src/models/Chromosome";

const ready = () => {
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
  ];

  const values = [
    { set: [0, 1], value: 1032 },
    { set: [0, 2], value: 1375 },
    { set: [0, 3], value: 877 },
    { set: [0, 4], value: 639 },
    { set: [0, 5], value: 539 },
    { set: [0, 6], value: 205 },
    { set: [0, 7], value: 683 },
    { set: [0, 8], value: 869 },

    { set: [1, 2], value: 354 },
    { set: [1, 3], value: 517 },
    { set: [1, 4], value: 902 },
    { set: [1, 5], value: 1484 },
    { set: [1, 6], value: 1232 },
    { set: [1, 7], value: 1591 },
    { set: [1, 8], value: 851 },

    { set: [2, 3], value: 856 },
    { set: [2, 4], value: 1245 },
    { set: [2, 5], value: 1823 },
    { set: [2, 6], value: 1570 },
    { set: [2, 7], value: 1930 },
    { set: [2, 8], value: 1153 },

    { set: [3, 4], value: 464 },
    { set: [3, 5], value: 1394 },
    { set: [3, 6], value: 1080 },
    { set: [3, 7], value: 1193 },
    { set: [3, 8], value: 1078 },

    { set: [4, 5], value: 1178 },
    { set: [4, 6], value: 845 },
    { set: [4, 7], value: 852 },
    { set: [4, 8], value: 1112 },

    { set: [5, 6], value: 326 },
    { set: [5, 7], value: 858 },
    { set: [5, 8], value: 967 },

    { set: [6, 7], value: 539 },
    { set: [6, 8], value: 998 },

    { set: [7, 8], value: 1525 },
  ];

  let i = 0;

  const count = (latestPopulation?: IChromosomeWithFitness[]) => {
    let solved;

    do {
      i++;
      solved = TSPSolver(points, values, {
        finishId: 0,
        population: latestPopulation || undefined,
      });
      // @ts-ignore
      document.getElementById("app").innerHTML = `${i}: ${JSON.stringify(
        solved.result
      )}`;
    } while (i % 1 !== 0);

    if (i === 300) {
      alert("done!");
    } else {
      setTimeout(count, 0, solved.latestPopulation);
    }
  };

  count();
};

document.addEventListener("DOMContentLoaded", ready);
