"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathWalker = void 0;
const utilities_1 = require("./utilities");
class PathWalker {
    constructor({ speed, path, onEachStep, initialCoords, onReachEnd }) {
        this.speed = speed;
        this.path = path;
        this.onEachStep = onEachStep;
        this.onReachEnd = onReachEnd;
        this.currentCoords = initialCoords;
        this.targetPathIndex = 0;
    }
    getStepParams(inputTargetPathIndex) {
        let newTargetPathIndex = inputTargetPathIndex;
        const targetCoords = this.path[newTargetPathIndex];
        let hypotenuseAndLegs = (0, utilities_1.getHypotenuseAndLegs)(this.currentCoords, targetCoords);
        // We need this to decide if ending callback has to be called
        let isReachedPathEnd = false;
        // If point is about to be reached within this movement step
        if (hypotenuseAndLegs.hypotenuse < this.speed) {
            newTargetPathIndex += 1;
            // If next step exists, return step params heading to it
            if (this.path[newTargetPathIndex]) {
                return this.getStepParams(newTargetPathIndex);
            }
            // Next step does not exists (this is final movement step)
            else {
                isReachedPathEnd = true;
            }
        }
        return {
            newTargetPathIndex,
            isReachedPathEnd,
            hypotenuseAndLegs
        };
    }
    /**
     * This method is called on each logical cycle
     */
    processStep() {
        const { newTargetPathIndex, isReachedPathEnd, hypotenuseAndLegs } = this.getStepParams(this.targetPathIndex);
        this.targetPathIndex = newTargetPathIndex;
        const { x: xOffset, y: yOffset } = (0, utilities_1.getMovingOffsets)(hypotenuseAndLegs, this.speed);
        this.currentCoords = {
            x: this.currentCoords.x + xOffset,
            y: this.currentCoords.y + yOffset,
        };
        this.onEachStep(this.currentCoords);
        if (isReachedPathEnd) {
            this.onReachEnd();
        }
    }
}
exports.PathWalker = PathWalker;
//# sourceMappingURL=PathWalker.js.map