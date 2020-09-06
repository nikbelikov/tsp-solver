"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = (function (individual, points) {
    var result = [];
    individual.forEach(function (item) {
        result.push(lodash_1.find(points, { id: item }));
    });
    return result;
});
