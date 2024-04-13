"use client";
import type { YMapBehavior } from "../../";
import { useMapBehaviors } from "../../";
import { useEffect } from "react";

export const useRemoveBehaviorOnHover = (behavior: YMapBehavior, domElementId: string) => {
  const { removeBehavior, resetBehaviors } = useMapBehaviors();

  useEffect(() => {
    const elementToHoverOn = document.querySelector(`#${domElementId}`);

    if (!elementToHoverOn)
      throw new Error(`Ошибка определения элемента для наведения ${domElementId}`);

    const handleMouseEnter = () => removeBehavior(behavior);
    const handleMouseLeave = () => resetBehaviors();

    elementToHoverOn.addEventListener("mouseenter", handleMouseEnter);
    elementToHoverOn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      resetBehaviors();
      elementToHoverOn.removeEventListener("mouseenter", handleMouseEnter);
      elementToHoverOn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [behavior, removeBehavior, resetBehaviors, domElementId]);
};
