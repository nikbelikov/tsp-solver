"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = (function (points, values, params) {
    if (params.finishId && params.finishId > points.length - 1) {
        throw new Error("The 'finishId' parameter can not be more than " + (points.length - 1) + ".");
    }
    if (params.permutations && params.permutations < 5) {
        throw new Error("The 'permutations' parameter can not be less than 5.");
    }
    points.forEach(function (point, index) {
        if (point.id !== index) {
            throw new Error("Looks like '" + index + "' id is missing. Your points are: " + JSON.stringify(points) + ", but expected format is: " + JSON.stringify([
                { id: 0, name: "Saint Petersburg" },
                { id: 1, name: "Moscow" },
                { id: 2, name: "Pskov" },
            ]) + "...");
        }
    });
    for (var firstIndex = 0, firstIndexLength = points.length; firstIndex < firstIndexLength; firstIndex++) {
        for (var secondIndex = firstIndex + 1, secondIndexLength = points.length; secondIndex < secondIndexLength; secondIndex++) {
            var checkingSet = [firstIndex, secondIndex];
            if (lodash_1.findIndex(values, { set: checkingSet }) === -1) {
                throw new Error("Set " + JSON.stringify(checkingSet) + " is not in your values array. Your values are " + JSON.stringify(values));
            }
        }
    }
});
