import { COURSE_DATA_MOCKED } from "./__mocks__/couse.mock";
import { player as reducer, play, next } from "./player";

describe("player slice", () => {
  it("should be able to play", () => {
    const state = reducer(
      COURSE_DATA_MOCKED,
      play({
        moduleIndex: 1,
        lessonIndex: 1,
      }),
    );
    expect(state.currentVideoListIndex).toEqual(1);
    expect(state.currentVideoIndex).toEqual(1);
  });

  it("should be able to play next video automatically", () => {
    const state = reducer(COURSE_DATA_MOCKED, next());
    expect(state.currentVideoListIndex).toEqual(0);
    expect(state.currentVideoIndex).toEqual(1);
  });

  it("should be able to jump to the next module", () => {
    const state = reducer(
      {
        ...COURSE_DATA_MOCKED,
        currentVideoListIndex: 0,
        currentVideoIndex: 1,
      },
      next(),
    );
    expect(state.currentVideoListIndex).toEqual(1);
    expect(state.currentVideoIndex).toEqual(0);
  });
});
