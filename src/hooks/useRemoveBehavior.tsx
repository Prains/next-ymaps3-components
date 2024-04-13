"use client";
import type { YMapBehavior } from "../../";
import { useMapBehaviors } from "../../";
import { useEffect } from "react";

export const useRemoveBehavior = (behavior: YMapBehavior) => {
  const { removeBehavior, resetBehaviors } = useMapBehaviors();

  useEffect(() => {
    removeBehavior(behavior);

    return () => resetBehaviors();
  }, [behavior, removeBehavior, resetBehaviors]);
};
