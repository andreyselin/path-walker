import {PathWalker, PathWalkerConfig} from "./PathWalker";

describe('Path walker', () => {

  it('Should reach single-path end', () => {

    let isEndReached = false;

    const pathWalkerConfig: PathWalkerConfig = {
      speed: 3,
      initialCoords: { x: 0, y: 0 },
      onReachEnd: () => isEndReached = true,
      onEachStep: ({ x, y }) => { console.log('Okay', { x, y }) },
      path: [{ x: 0, y: 0 }, { x: 10, y: 0 }],
    };

    let pathWalker = new PathWalker(pathWalkerConfig);
    expect(pathWalker.currentCoords).toEqual({ x: 0, y: 0 });

    pathWalker.processStep();
    expect(pathWalker.currentCoords).toEqual({ x: 3, y: 0 });

    pathWalker.processStep();
    expect(pathWalker.currentCoords).toEqual({ x: 6, y: 0 });

    pathWalker.processStep();
    expect(pathWalker.currentCoords).toEqual({ x: 9, y: 0 });
    expect(isEndReached).toBeFalsy();

    pathWalker.processStep();
    expect(pathWalker.currentCoords).toEqual({ x: 10, y: 0 });
    expect(isEndReached).toBeTruthy();

  });


});