import { COURSE_DATA_MOCKED } from "./__mocks__/couse.mock";
import { player as reducer, play, next } from "./player.slice";

describe("player slice", () => {
  it("should be able to play", () => {
    const state = reducer(
      COURSE_DATA_MOCKED,
      play({
        videoListIndex: 1,
        videoIndex: 1,
      }),
    );
    expect(state.currentGroupIndex).toEqual(1);
    expect(state.currentElementIndex).toEqual(1);
  });

  it("should be able to play next video automatically", () => {
    const state = reducer(COURSE_DATA_MOCKED, next());
    expect(state.currentGroupIndex).toEqual(0);
    expect(state.currentElementIndex).toEqual(1);
  });

  it("should be able to jump to the next module", () => {
    const state = reducer(
      {
        ...COURSE_DATA_MOCKED,
        currentGroupIndex: 0,
        currentElementIndex: 1,
      },
      next(),
    );
    expect(state.currentGroupIndex).toEqual(1);
    expect(state.currentElementIndex).toEqual(0);
  });
});
