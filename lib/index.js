"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkParams_1 = require("./utils/checkParams");
var getPermutationsResult_1 = require("./utils/getPermutationsResult");
var getParameters_1 = require("./utils/getParameters");
var getGeneticResult_1 = require("./utils/getGeneticResult");
var solve = function (points, values, parameters) {
    var params = getParameters_1.default(parameters);
    if (!params.dangerMode) {
        checkParams_1.default(points, values, params);
    }
    if (points.length < 3) {
        return {
            result: points,
        };
    }
    if (points.length <= params.permutations) {
        return getPermutationsResult_1.default(points, values, params);
    }
    return getGeneticResult_1.default(points, values, params);
};
exports.default = solve;
