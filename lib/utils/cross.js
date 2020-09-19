"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFitnessForChromosome_1 = require("./getFitnessForChromosome");
var lodash_1 = require("lodash");
var getChild = function (splitPosition, child, chromosomeA, chromosomeB, values) {
    for (var i = 0, l = splitPosition; i <= l; i++) {
        child.push(chromosomeA[i]);
    }
    for (var i = splitPosition + 1, l = chromosomeB.length - 1; i <= l; i++) {
        if (!child.includes(chromosomeB[i])) {
            child.push(chromosomeB[i]);
        }
    }
    chromosomeB.forEach(function (item) {
        if (!child.includes(item)) {
            child.push(item);
        }
    });
    return {
        chromosome: child,
        fitness: getFitnessForChromosome_1.default(child, values),
    };
};
exports.default = (function (parents, values, splitPosition, finishId) {
    var firstChromosome = lodash_1.clone(parents[0].chromosome);
    var secondChromosome = lodash_1.clone(parents[1].chromosome);
    var firstChild = [];
    var secondChild = [];
    if (finishId !== undefined) {
        firstChromosome.pop();
        secondChromosome.pop();
    }
    var one = getChild(splitPosition, firstChild, firstChromosome, secondChromosome, values);
    var two = getChild(splitPosition, secondChild, secondChromosome, firstChromosome, values);
    if (finishId !== undefined) {
        one.chromosome.push(finishId);
        two.chromosome.push(finishId);
    }
    return [one, two];
});
