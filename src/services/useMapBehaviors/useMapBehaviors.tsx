import type { YMapBehavior } from "../..";
import { create } from "zustand";

// Определение типа для состояния
interface MapBehaviorsState {
  behaviors: YMapBehavior[];
  setBehaviors: (data: YMapBehavior[]) => void;
  removeBehavior: (behavior: YMapBehavior) => void;
  resetBehaviors: () => void;
}

const allBehaviors = [
  "drag",
  "pinchZoom",
  "scrollZoom",
  "dblClick",
  "magnifier",
  "oneFingerZoom",
  "mouseRotate",
  "mouseTilt",
  "pinchRotate",
  "panTilt",
] satisfies YMapBehavior[];

export const DRAG: YMapBehavior = "drag";
export const PINCH_ZOOM: YMapBehavior = "pinchZoom";
export const SCROLL_ZOOM: YMapBehavior = "scrollZoom";
export const DBL_CLICK: YMapBehavior = "dblClick";
export const MAGNIFIER: YMapBehavior = "magnifier";
export const ONE_FINGER_ZOOM: YMapBehavior = "oneFingerZoom";
export const MOUSE_ROTATE: YMapBehavior = "mouseRotate";
export const MOUSE_TILT: YMapBehavior = "mouseTilt";
export const PINCH_ROTATE: YMapBehavior = "pinchRotate";
export const PAN_TILT: YMapBehavior = "panTilt";

// Создание хранилища с типизированным состоянием
export const useMapBehaviors = create<MapBehaviorsState>((set) => ({
  behaviors: allBehaviors,
  setBehaviors: (behaviors: YMapBehavior[]) => set({ behaviors }),
  resetBehaviors: () => set({ behaviors: allBehaviors }),
  removeBehavior: (behavior: YMapBehavior) =>
    set({ behaviors: allBehaviors.filter((b) => b !== behavior) }),
}));
