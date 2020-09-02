"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generatePopulation_1 = require("./utils/generatePopulation");
var lodash_1 = require("lodash");
var pickParents_1 = require("./utils/pickParents");
var select_1 = require("./utils/select");
var getPopulationWithFitness_1 = require("./utils/getPopulationWithFitness");
var mutate_1 = require("./utils/mutate");
var cross_1 = require("./utils/cross");
var getFitnessForChromosome_1 = require("./utils/getFitnessForChromosome");
var getSplitPosition_1 = require("./utils/getSplitPosition");
var checkParams_1 = require("./utils/checkParams");
var solve = function (points, values, parameters) {
    var _a, _b, _c, _d, _e;
    var params = {
        population: (_a = parameters === null || parameters === void 0 ? void 0 : parameters.population) !== null && _a !== void 0 ? _a : [],
        populationAmount: (_b = parameters === null || parameters === void 0 ? void 0 : parameters.populationAmount) !== null && _b !== void 0 ? _b : 20,
        generations: (_c = parameters === null || parameters === void 0 ? void 0 : parameters.generations) !== null && _c !== void 0 ? _c : 100,
        mutate: (_d = parameters === null || parameters === void 0 ? void 0 : parameters.mutate) !== null && _d !== void 0 ? _d : 20,
        idReturnTo: (_e = parameters === null || parameters === void 0 ? void 0 : parameters.idReturnTo) !== null && _e !== void 0 ? _e : undefined,
    };
    checkParams_1.default(points, values);
    var populationWithFitness;
    if (params.population.length > 0) {
        populationWithFitness = params.population;
    }
    else {
        populationWithFitness = getPopulationWithFitness_1.default(generatePopulation_1.default(points, params.populationAmount, params.idReturnTo), values);
    }
    for (var i = 0, l = params.generations; i < l; i++) {
        var parents = pickParents_1.default(populationWithFitness);
        var splitPosition = getSplitPosition_1.default(populationWithFitness[0].chromosome);
        var children = cross_1.default(parents, values, splitPosition, params.idReturnTo);
        var firstChromosome = mutate_1.default(children[0].chromosome, params.mutate, params.idReturnTo);
        var secondChromosome = mutate_1.default(children[1].chromosome, params.mutate, params.idReturnTo);
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
// TODO: populationWithFitness -> population
