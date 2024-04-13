export type Coordinates = [number, number] | number[];

export type YMapMarkerEventHandler = (coordinates: Coordinates) => void | false;

export type Orientation = "horizontal" | "vertical";

export type VerticalPosition = "top" | "bottom";

export type HorizontalPosition = "left" | "right";

export type MapMode = "vector" | "raster" | "auto";

export type Point = {
  geometry: {
    type: string; // "Point";
    coordinates: Coordinates;
    [key: string]: any;
  };
};

export type YMapBehavior =
  | "drag"
  | "pinchZoom"
  | "scrollZoom"
  | "dblClick"
  | "magnifier"
  | "oneFingerZoom"
  | "mouseRotate"
  | "mouseTilt"
  | "pinchRotate"
  | "panTilt";

export type Position =
  | VerticalPosition
  | HorizontalPosition
  | `${VerticalPosition} ${HorizontalPosition}`
  | `${HorizontalPosition} ${VerticalPosition}`;

export type YMapListenerClickEvent = {
  coordinates: Coordinates;
  screenCoordinates: Coordinates;
};

// bounds устанавливают границы карты.
// она высчитывает автоматический центр карты и его зум, чтобы все объекты было видно
export type YMapLocation = {
  center?: Coordinates;
  zoom?: number;
  bounds?: Coordinates[];
};

export type YMapListenerUpdateEvent = {
  type: "update";
  camera: {
    azimuth: number;
    tilt: number;
  };
  location: YMapLocation;
  mapInAction: boolean;
};
