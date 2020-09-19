"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = (function (chromosome, values) {
    var _a, _b;
    var fitness = 0;
    var _loop_1 = function (i, l) {
        var set = [];
        set.push(chromosome[i]);
        set.push(chromosome[i + 1]);
        var valueFromSet = ((_a = lodash_1.find(values, function (item) {
            return item.set[0] === set[0] && item.set[1] === set[1];
        })) === null || _a === void 0 ? void 0 : _a.value) || 0;
        if (valueFromSet === 0) {
            valueFromSet = ((_b = lodash_1.find(values, { set: set })) === null || _b === void 0 ? void 0 : _b.value) || 0;
        }
        fitness += valueFromSet;
    };
    for (var i = 0, l = chromosome.length; i < l; i++) {
        _loop_1(i, l);
    }
    return fitness;
});
