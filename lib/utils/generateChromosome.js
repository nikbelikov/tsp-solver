"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = (function (chromosome, finishId) {
    if (finishId === undefined) {
        var tail = chromosome.slice(1, chromosome.length);
        return lodash_1.concat(chromosome[0], lodash_1.shuffle(tail));
    }
    var center = chromosome.slice(1, chromosome.length - 1);
    return lodash_1.concat(chromosome[0], lodash_1.shuffle(center), chromosome[chromosome.length - 1]);
});
