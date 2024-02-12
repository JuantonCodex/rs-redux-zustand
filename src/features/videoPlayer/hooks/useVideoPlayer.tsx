import { useMemo } from "react";
import { useAppSelector } from "../../../store";
import { IElement, IGroup } from "../store/slices/player.type";

interface IReturn {
  currentGroup: IGroup | undefined;
  currentElement: IElement | undefined;
}
export const useVideoPlayer = (): IReturn => {
  const player = useAppSelector((state) => state.player);

  const { currentGroup, currentElement } = useMemo(() => {
    const {
      collection,
      currentGroupIndex: currentVideoListIndex,
      currentElementIndex: currentVideoIndex,
    } = player;
    const currentGroup = collection?.groups[currentVideoListIndex];
    const currentElement = currentGroup?.elements[currentVideoIndex];

    return {
      currentGroup,
      currentElement,
    };
  }, [player]);

  return {
    currentGroup,
    currentElement,
  };
};
