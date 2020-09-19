"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getPopulationWithFitness_1 = require("./getPopulationWithFitness");
var generatePopulation_1 = require("./generatePopulation");
var pickParents_1 = require("./pickParents");
var getSplitPosition_1 = require("./getSplitPosition");
var cross_1 = require("./cross");
var mutate_1 = require("./mutate");
var getFitnessForChromosome_1 = require("./getFitnessForChromosome");
var lodash_1 = require("lodash");
var select_1 = require("./select");
exports.default = (function (points, values, params) {
    var populationWithFitness;
    if (params.population.length > 0) {
        populationWithFitness = params.population;
    }
    else {
        populationWithFitness = getPopulationWithFitness_1.default(generatePopulation_1.default(points, params.populationAmount, params.finishId), values);
    }
    for (var i = 0, l = params.generations; i < l; i++) {
        var parents = pickParents_1.default(populationWithFitness);
        var splitPosition = getSplitPosition_1.default(populationWithFitness[0].chromosome);
        var children = cross_1.default(parents, values, splitPosition, params.finishId);
        var firstChromosome = mutate_1.default(children[0].chromosome, params.mutate, params.finishId);
        var secondChromosome = mutate_1.default(children[1].chromosome, params.mutate, params.finishId);
        var firstChild = {
            chromosome: firstChromosome,
            fitness: getFitnessForChromosome_1.default(firstChromosome, values),
        };
        var secondChild = {
            chromosome: secondChromosome,
            fitness: getFitnessForChromosome_1.default(secondChromosome, values),
        };
        populationWithFitness.push(firstChild);
        populationWithFitness.push(secondChild);
        populationWithFitness = lodash_1.sortBy(populationWithFitness, "fitness");
        populationWithFitness.pop();
        populationWithFitness.pop();
    }
    var individual = populationWithFitness[0].chromosome;
    return {
        result: select_1.default(individual, points),
        latestPopulation: populationWithFitness,
    };
});
