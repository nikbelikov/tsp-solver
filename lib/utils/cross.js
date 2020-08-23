"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFitnessForChromosome_1 = require("./getFitnessForChromosome");
exports.default = (function (population, values, splitPosition) {
    var firstParent = population[0];
    var secondParent = population[1];
    var firstChild = [];
    var secondChild = [];
    for (var i = 0, l = splitPosition; i <= l; i++) {
        firstChild.push(firstParent.chromosome[i]);
    }
    for (var i = splitPosition + 1, l = secondParent.chromosome.length - 1; i <= l; i++) {
        if (!firstChild.includes(secondParent.chromosome[i])) {
            firstChild.push(secondParent.chromosome[i]);
        }
    }
    secondParent.chromosome.forEach(function (item) {
        if (!firstChild.includes(item)) {
            firstChild.push(item);
        }
    });
    var one = {
        chromosome: firstChild,
        fitness: getFitnessForChromosome_1.default(firstChild, values),
    };
    for (var i = 0, l = splitPosition; i <= l; i++) {
        secondChild.push(secondParent.chromosome[i]);
    }
    for (var i = splitPosition + 1, l = firstParent.chromosome.length - 1; i <= l; i++) {
        if (!secondChild.includes(firstParent.chromosome[i])) {
            secondChild.push(firstParent.chromosome[i]);
        }
    }
    firstParent.chromosome.forEach(function (item) {
        if (!secondChild.includes(item)) {
            secondChild.push(item);
        }
    });
    var two = {
        chromosome: secondChild,
        fitness: getFitnessForChromosome_1.default(secondChild, values),
    };
    return [one, two];
});
