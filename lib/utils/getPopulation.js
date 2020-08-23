"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getChromosome_1 = require("./getChromosome");
exports.default = (function (points, size) {
    var population = [];
    var firstChromosome = [];
    points.forEach(function (point) {
        firstChromosome.push(point.id);
    });
    population.push(firstChromosome);
    for (var index = 0, length_1 = size - 1; index < length_1; index++) {
        population.push(getChromosome_1.default(points));
    }
    return population;
});
