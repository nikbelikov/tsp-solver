"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateChromosome_1 = require("./generateChromosome");
var getFirstChromosome_1 = require("./getFirstChromosome");
exports.default = (function (points, size, finishId) {
    var population = [];
    var firstChromosome = getFirstChromosome_1.default(points, finishId);
    population.push(firstChromosome);
    for (var index = 0, length_1 = size - 1; index < length_1; index++) {
        population.push(generateChromosome_1.default(firstChromosome, finishId));
    }
    return population;
});
