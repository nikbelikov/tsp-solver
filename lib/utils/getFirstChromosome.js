"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (points, idReturnTo) {
    var firstChromosome = [];
    points.forEach(function (point) {
        firstChromosome.push(point.id);
    });
    if (idReturnTo !== undefined && idReturnTo === 0) {
        firstChromosome.push(idReturnTo);
        return firstChromosome;
    }
    var lastItem = firstChromosome[firstChromosome.length - 1];
    if (idReturnTo !== undefined && lastItem !== idReturnTo) {
        firstChromosome.push(firstChromosome.splice(firstChromosome.indexOf(idReturnTo), 1)[0]);
    }
    return firstChromosome;
});
