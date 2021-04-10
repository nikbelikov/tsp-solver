"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getPopulationWithFitness_1 = require("./getPopulationWithFitness");
var generatePopulation_1 = require("./generatePopulation");
var getFitnessForChromosome_1 = require("./getFitnessForChromosome");
var lodash_1 = require("lodash");
var select_1 = require("./select");
var generateChromosome_1 = require("./generateChromosome");
exports.default = (function (points, values, params) {
    var populationWithFitness;
    if (params.population.length > 0) {
        populationWithFitness = params.population;
    }
    else {
        populationWithFitness = getPopulationWithFitness_1.default(generatePopulation_1.default(points, params.populationAmount, params.finishId), values);
    }
    for (var i = 0, l = params.generations; i < l; i++) {
        var randomChromosome = generateChromosome_1.default(populationWithFitness[0].chromosome, params.finishId);
        var randomIndividual = {
            chromosome: randomChromosome,
            fitness: getFitnessForChromosome_1.default(randomChromosome, values),
        };
        populationWithFitness.push(randomIndividual);
        populationWithFitness = lodash_1.sortBy(populationWithFitness, "fitness");
        populationWithFitness.pop();
    }
    var individual = populationWithFitness[0].chromosome;
    return {
        result: select_1.default(individual, points),
        latestPopulation: populationWithFitness,
    };
});
