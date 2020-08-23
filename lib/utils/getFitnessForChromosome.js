"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = (function (chromosome, values) {
    var _a;
    var fitness = 0;
    for (var i = 0, l = chromosome.length; i < l; i++) {
        var set = [];
        set.push(chromosome[i]);
        set.push(chromosome[i + 1]);
        var valueForSet = ((_a = lodash_1.find(values, { set: set })) === null || _a === void 0 ? void 0 : _a.value) || 0;
        fitness += valueForSet;
    }
    return fitness;
});
