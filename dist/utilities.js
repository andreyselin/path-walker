"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovingOffsets = exports.getHypotenuseAndLegs = exports.utilities = void 0;
const radianValue = Math.PI / 180;
function getRadians(degrees) {
    return degrees * radianValue;
}
function getDegrees(radians) {
    return radians / radianValue;
}
function getSin(direction) {
    return Math.sin(getRadians(direction));
}
function getCos(direction) {
    return direction === 90 ? 0 : Math.cos(getRadians(direction)) * -1;
}
function utilities(distance, direction) {
    return {
        x: getSin(direction) * distance,
        y: getCos(direction) * distance,
    };
}
exports.utilities = utilities;
function getHypotenuseAndLegs(source, destination) {
    const legs = {
        x: destination.x - source.x,
        y: destination.y - source.y, // ?
        // x: source.x - destination.x,
        // y: (source.y - destination.y) * -1, // ?
    };
    const hypotenuse = Math.sqrt(legs.x * legs.x + legs.y * legs.y);
    return { hypotenuse, legs };
}
exports.getHypotenuseAndLegs = getHypotenuseAndLegs;
// Seems to require simplification:
function getMovingOffsets(hypotenuseAndLegs, speed) {
    const { hypotenuse, legs: diff } = hypotenuseAndLegs;
    let distance = hypotenuse > speed ? speed : hypotenuse;
    const coefficients = {
        x: diff.x / hypotenuse,
        y: diff.y / hypotenuse,
    };
    return {
        x: coefficients.x * distance,
        y: coefficients.y * distance,
    };
}
exports.getMovingOffsets = getMovingOffsets;
// console.log('1-->', getMovingOffsets(getHypotenuseAndLegs({ x: 20, y: 20 }, { x: 10, y: 10 }), 1));
// console.log('2-->', getMovingOffsets(getHypotenuseAndLegs({ x: 20, y: 10 }, { x: 10, y: 20 }), 1));
// console.log('3-->', getMovingOffsets(getHypotenuseAndLegs({ x: 10, y: 10 }, { x: 20, y: 20 }), 1));
// console.log('4-->', getMovingOffsets(getHypotenuseAndLegs({ x: 10, y: 20 }, { x: 20, y: 10 }), 1));
//# sourceMappingURL=utilities.js.map