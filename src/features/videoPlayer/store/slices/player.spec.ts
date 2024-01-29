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
    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(1);
  });

  it("should be able to play next video automatically", ()=> {
    const state = reducer(
      COURSE_DATA_MOCKED,
      next(),
    );
    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(1)
  })

  it("should be able to jump to the next module", ()=> {
    const state = reducer(
      {
        ...COURSE_DATA_MOCKED,
        currentModuleIndex: 0,
        currentLessonIndex: 1,
      },
      next(),
    );
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  })
});
