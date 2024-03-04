export type PathWalkerCoords = {
    x: number;
    y: number;
};
export type PathWalkerConfig = {
    speed: number;
    initialCoords: PathWalkerCoords;
    onEachStep: (coords: PathWalkerCoords) => void;
    onReachEnd: () => void;
    path: PathWalkerCoords[];
};
export declare class PathWalker {
    constructor({ speed, path, onEachStep, initialCoords, onReachEnd }: PathWalkerConfig);
    speed: number;
    targetPathIndex: number;
    currentCoords: PathWalkerCoords;
    onEachStep: (newCoords: PathWalkerCoords) => void;
    onReachEnd: () => void;
    path: PathWalkerCoords[];
    private getStepParams;
    /**
     * This method is called on each logical cycle
     */
    processStep(): void;
}
