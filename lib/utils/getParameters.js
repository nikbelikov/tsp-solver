"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (parameters) {
    var _a, _b, _c, _d, _e, _f;
    return ({
        population: (_a = parameters === null || parameters === void 0 ? void 0 : parameters.population) !== null && _a !== void 0 ? _a : [],
        populationAmount: (_b = parameters === null || parameters === void 0 ? void 0 : parameters.populationAmount) !== null && _b !== void 0 ? _b : 20,
        generations: (_c = parameters === null || parameters === void 0 ? void 0 : parameters.generations) !== null && _c !== void 0 ? _c : 100,
        finishId: (_d = parameters === null || parameters === void 0 ? void 0 : parameters.finishId) !== null && _d !== void 0 ? _d : undefined,
        permutations: (_e = parameters === null || parameters === void 0 ? void 0 : parameters.permutations) !== null && _e !== void 0 ? _e : 7,
        dangerMode: (_f = parameters === null || parameters === void 0 ? void 0 : parameters.dangerMode) !== null && _f !== void 0 ? _f : false,
    });
});
