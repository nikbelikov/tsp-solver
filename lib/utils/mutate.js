"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = (function (chromosome, percent, finishId) {
    var _a;
    var randomNumber = lodash_1.random(1, 100);
    if (randomNumber <= percent) {
        var chromosomeCopy = lodash_1.clone(chromosome);
        var endOfRandomising = finishId !== undefined ? 2 : 1;
        var indexesLeft = [];
        for (var i = 1, l = chromosomeCopy.length - endOfRandomising; i < l; i++) {
            indexesLeft.push(i);
        }
        var firstPosition_1 = lodash_1.random(1, chromosomeCopy.length - endOfRandomising);
        indexesLeft = lodash_1.remove(indexesLeft, function (item) {
            return item !== firstPosition_1;
        });
        var secondPosition = indexesLeft[lodash_1.random(1, indexesLeft.length - 1)];
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
