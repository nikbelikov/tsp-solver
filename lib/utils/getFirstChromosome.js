"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (points, idToReturn) {
    var firstChromosome = [];
    points.forEach(function (point) {
        firstChromosome.push(point.id);
    });
    if (idToReturn !== undefined && idToReturn === 0) {
        firstChromosome.push(idToReturn);
        return firstChromosome;
    }
    var lastItem = firstChromosome[firstChromosome.length - 1];
    if (idToReturn !== undefined && lastItem !== idToReturn) {
        firstChromosome.push(firstChromosome.splice(firstChromosome.indexOf(idToReturn), 1)[0]);
    }
    return firstChromosome;
});
