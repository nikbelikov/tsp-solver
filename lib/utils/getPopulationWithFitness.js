"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFitnessForChromosome_1 = require("./getFitnessForChromosome");
exports.default = (function (population, values) {
    var result = [];
    population.forEach(function (chromosome) {
        var chromosomeWithFitness = {
            chromosome: chromosome,
            fitness: getFitnessForChromosome_1.default(chromosome, values),
        };
        result.push(chromosomeWithFitness);
    });
    return result;
});
