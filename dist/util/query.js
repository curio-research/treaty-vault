"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeConstantTag = exports.setDiff = exports.setIntersection = exports.setUnion = void 0;
const setUnion = (set1, set2) => {
    return new Set([...set1, ...set2]);
};
exports.setUnion = setUnion;
const setIntersection = (set1, set2) => {
    return new Set([...set1].filter((i) => set2.has(i)));
};
exports.setIntersection = setIntersection;
const setDiff = (set1, set2) => {
    return new Set([...set1].filter((x) => !set2.has(x)));
};
exports.setDiff = setDiff;
// encode world constants
const encodeConstantTag = (functionName, componentName, entityName, level) => {
    return `Constant-${functionName}-${componentName}-${entityName}-${level}`;
};
exports.encodeConstantTag = encodeConstantTag;
//# sourceMappingURL=query.js.map