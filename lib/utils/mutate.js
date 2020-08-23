"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = (function (chromosome, percent) {
    var _a;
    var randomNumber = lodash_1.random(1, 100);
    if (randomNumber <= percent) {
        var chromosomeCopy = lodash_1.clone(chromosome);
        var firstPosition_1 = lodash_1.random(1, chromosomeCopy.length - 1);
        chromosomeCopy = lodash_1.remove(chromosomeCopy, function (item) {
            return item !== firstPosition_1;
        });
        var secondPosition = chromosomeCopy[lodash_1.random(1, chromosomeCopy.length - 1)];
        var swapPositions = [firstPosition_1, secondPosition];
        var resultChromosome = lodash_1.clone(chromosome);
        _a = [
            resultChromosome[swapPositions[1]],
            resultChromosome[swapPositions[0]],
        ], resultChromosome[swapPositions[0]] = _a[0], resultChromosome[swapPositions[1]] = _a[1];
        return resultChromosome;
    }
    return chromosome;
});
