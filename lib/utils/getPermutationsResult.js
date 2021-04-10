"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var getFirstChromosome_1 = require("./getFirstChromosome");
var getPopulationWithFitness_1 = require("./getPopulationWithFitness");
var lodash_1 = require("lodash");
var select_1 = require("./select");
exports.default = (function (points, values, params) {
    var populationWithFitness;
    var permArr = [];
    var usedChars = [];
    var getPermutations = function (array) {
        var currentItem;
        for (var index = 0; index < array.length; index++) {
            currentItem = array.splice(index, 1)[0];
            usedChars.push(currentItem);
            if (array.length === 0) {
                permArr.push(usedChars.slice());
            }
            getPermutations(array);
            array.splice(index, 0, currentItem);
            usedChars.pop();
        }
        return permArr;
    };
    var chromosomeForPermutation = getFirstChromosome_1.default(points, params === null || params === void 0 ? void 0 : params.finishId);
    chromosomeForPermutation.splice(0, 1);
    if ((params === null || params === void 0 ? void 0 : params.finishId) !== undefined) {
        chromosomeForPermutation.pop();
    }
    var permutations = getPermutations(chromosomeForPermutation);
    permutations = permutations.map(function (item) { return __spreadArray([0], item); });
    if ((params === null || params === void 0 ? void 0 : params.finishId) !== undefined) {
        permutations = permutations.map(function (item) { return __spreadArray(__spreadArray([], item), [params === null || params === void 0 ? void 0 : params.finishId]); });
    }
    populationWithFitness = getPopulationWithFitness_1.default(permutations, values);
    populationWithFitness = lodash_1.sortBy(populationWithFitness, "fitness");
    var individual = populationWithFitness[0].chromosome;
    return {
        result: select_1.default(individual, points),
    };
});
