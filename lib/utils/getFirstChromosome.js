"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (points, finishId) {
    var firstChromosome = [];
    points.forEach(function (point) {
        firstChromosome.push(point.id);
    });
    if (finishId !== undefined && finishId === 0) {
        firstChromosome.push(finishId);
        return firstChromosome;
    }
    var lastItem = firstChromosome[firstChromosome.length - 1];
    if (finishId !== undefined && lastItem !== finishId) {
        firstChromosome.push(firstChromosome.splice(firstChromosome.indexOf(finishId), 1)[0]);
    }
    return firstChromosome;
});
