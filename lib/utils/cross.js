"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFitnessForChromosome_1 = require("./getFitnessForChromosome");
var lodash_1 = require("lodash");
exports.default = (function (parents, values, splitPosition, idReturnTo) {
    var firstChromosome = lodash_1.clone(parents[0].chromosome);
    var secondChromosome = lodash_1.clone(parents[1].chromosome);
    var firstChild = [];
    var secondChild = [];
    if (idReturnTo !== undefined) {
        firstChromosome.pop();
        secondChromosome.pop();
    }
    for (var i = 0, l = splitPosition; i <= l; i++) {
        firstChild.push(firstChromosome[i]);
    }
    for (var i = splitPosition + 1, l = secondChromosome.length - 1; i <= l; i++) {
        if (!firstChild.includes(secondChromosome[i])) {
            firstChild.push(secondChromosome[i]);
        }
    }
    secondChromosome.forEach(function (item) {
        if (!firstChild.includes(item)) {
            firstChild.push(item);
        }
    });
    var one = {
        chromosome: firstChild,
        fitness: getFitnessForChromosome_1.default(firstChild, values),
    };
    for (var i = 0, l = splitPosition; i <= l; i++) {
        secondChild.push(secondChromosome[i]);
    }
    for (var i = splitPosition + 1, l = firstChromosome.length - 1; i <= l; i++) {
        if (!secondChild.includes(firstChromosome[i])) {
            secondChild.push(firstChromosome[i]);
        }
    }
    firstChromosome.forEach(function (item) {
        if (!secondChild.includes(item)) {
            secondChild.push(item);
        }
    });
    var two = {
        chromosome: secondChild,
        fitness: getFitnessForChromosome_1.default(secondChild, values),
    };
    if (idReturnTo !== undefined) {
        one.chromosome.push(idReturnTo);
        two.chromosome.push(idReturnTo);
    }
    return [one, two];
});
