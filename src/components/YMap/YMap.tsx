"use client";
import { useMapComponents } from "../..";
import { YMapControls, YMapZoomControl } from "../..";
import type { YMapLocation, MapMode, Position } from "../..";
import { useMapBehaviors } from "../..";

type YMapProps = {
  location: YMapLocation;
  mode?: MapMode;
  children: React.ReactNode;
  withZoom?: boolean;
  zoomPosition?: Position;
}

const InnerZoomControlsComponents = ({ zoomPosition }: { zoomPosition?: Position }) => {
  return (
    <YMapControls position={zoomPosition || "right"}>
      <YMapZoomControl />
    </YMapControls>
  );
};

export const YMap = ({ children, location, mode = "auto", withZoom, zoomPosition }: YMapProps) => {
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = useMapComponents();
  const { behaviors } = useMapBehaviors();

  return (
    <div className="relative h-full w-full">
      <YMap location={location} mode={mode} behaviors={behaviors}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        {withZoom && <InnerZoomControlsComponents zoomPosition={zoomPosition} />}
        {children}
      </YMap>
    </div>
  );
};
