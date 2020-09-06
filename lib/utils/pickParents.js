"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = (function (population) {
    var result = [];
    var populationCopy = lodash_1.clone(population);
    var randomNumber = lodash_1.random(0, populationCopy.length - 1);
    result.push(populationCopy[randomNumber]);
    populationCopy = populationCopy.filter(function (item, index) { return index !== randomNumber; });
    randomNumber = lodash_1.random(0, populationCopy.length - 1);
    result.push(populationCopy[randomNumber]);
    return result;
});
