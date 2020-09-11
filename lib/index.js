"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var getFirstChromosome_1 = require("./utils/getFirstChromosome");
var solve = function (points, values, parameters) {
    var _a, _b, _c, _d, _e, _f;
    var params = {
        population: (_a = parameters === null || parameters === void 0 ? void 0 : parameters.population) !== null && _a !== void 0 ? _a : [],
        populationAmount: (_b = parameters === null || parameters === void 0 ? void 0 : parameters.populationAmount) !== null && _b !== void 0 ? _b : 20,
        generations: (_c = parameters === null || parameters === void 0 ? void 0 : parameters.generations) !== null && _c !== void 0 ? _c : 100,
        mutate: (_d = parameters === null || parameters === void 0 ? void 0 : parameters.mutate) !== null && _d !== void 0 ? _d : 20,
        finishId: (_e = parameters === null || parameters === void 0 ? void 0 : parameters.finishId) !== null && _e !== void 0 ? _e : undefined,
        permutations: (_f = parameters === null || parameters === void 0 ? void 0 : parameters.permutations) !== null && _f !== void 0 ? _f : 7,
    };
    checkParams_1.default(points, values, params);
    var populationWithFitness;
    if (points.length < 3) {
        return {
            result: points,
        };
    }
    var permArr = [];
    var usedChars = [];
    if (points.length <= params.permutations) {
        var getPermutations_1 = function (array) {
            var index, currentItem;
            for (index = 0; index < array.length; index++) {
                currentItem = array.splice(index, 1)[0];
                usedChars.push(currentItem);
                if (array.length === 0) {
                    permArr.push(usedChars.slice());
                }
                getPermutations_1(array);
                array.splice(index, 0, currentItem);
                usedChars.pop();
            }
            return permArr;
        };
        var chromosomeForPermutation = getFirstChromosome_1.default(points, params.finishId);
        chromosomeForPermutation.splice(0, 1);
        if (params.finishId !== undefined) {
            chromosomeForPermutation.pop();
        }
        var permutations = getPermutations_1(chromosomeForPermutation);
        permutations = permutations.map(function (item) { return __spreadArrays([0], item); });
        if (params.finishId !== undefined) {
            permutations = permutations.map(function (item) { return __spreadArrays(item, [
                params.finishId,
            ]); });
        }
        populationWithFitness = getPopulationWithFitness_1.default(permutations, values);
        populationWithFitness = lodash_1.sortBy(populationWithFitness, "fitness");
        var individual_1 = populationWithFitness[0].chromosome;
        return {
            result: select_1.default(individual_1, points),
        };
    }
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
};
exports.default = solve;
// TODO: populationWithFitness -> population
