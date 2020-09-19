"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = (function (chromosome) {
    return lodash_1.random(1, chromosome.length - 2);
});
