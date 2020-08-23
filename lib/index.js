"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getPopulation_1 = require("./utils/getPopulation");
var lodash_1 = require("lodash");
var pickParents_1 = require("./utils/pickParents");
var select_1 = require("./utils/select");
var getPopulationWithFitness_1 = require("./utils/getPopulationWithFitness");
var mutate_1 = require("./utils/mutate");
var cross_1 = require("./utils/cross");
var getFitnessForChromosome_1 = require("./utils/getFitnessForChromosome");
var getSplitPosition_1 = require("./utils/getSplitPosition");
var solve = function (points, values, params) {
    var solverParams = {
        population: (params === null || params === void 0 ? void 0 : params.population) || [],
        populationAmount: (params === null || params === void 0 ? void 0 : params.populationAmount) || 20,
        generations: (params === null || params === void 0 ? void 0 : params.generations) || 100,
        mutate: (params === null || params === void 0 ? void 0 : params.mutate) || 20,
    };
    var populationWithFitness;
    if (solverParams.population.length > 0) {
        populationWithFitness = solverParams.population;
    }
    else {
        populationWithFitness = getPopulationWithFitness_1.default(getPopulation_1.default(points, solverParams.populationAmount), values);
    }
    for (var i = 0, l = solverParams.generations; i < l; i++) {
        var children = cross_1.default(pickParents_1.default(populationWithFitness), values, getSplitPosition_1.default(populationWithFitness[0].chromosome));
        var firstChromosome = mutate_1.default(children[0].chromosome, solverParams.mutate);
        var secondChromosome = mutate_1.default(children[1].chromosome, solverParams.mutate);
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
};
exports.default = solve;
