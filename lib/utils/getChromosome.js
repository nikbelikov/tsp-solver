"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = (function (points) {
    var ids = [];
    points.forEach(function (point) {
        ids.push(point.id);
    });
    var tail = ids.slice(1, ids.length);
    return lodash_1.concat(ids[0], lodash_1.shuffle(tail));
});
