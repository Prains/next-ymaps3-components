"use client";
import { useMapComponents } from "../..";
import type { Coordinates, YMapMarkerEventHandler } from "../..";
import { twMerge } from "tailwind-merge";

type YMapMarkerProps = {
  coordinates: Coordinates;
  draggable?: boolean;
  id?: string;
  source?: string;
  mapFollowsOnDrag?: boolean;
  disableRoundCoordinates?: boolean;
  onClick?: (e: MouseEvent) => void;
  onDoubleClick?: (e: MouseEvent) => void;
  onDragEnd?: YMapMarkerEventHandler;
  onDragMove?: YMapMarkerEventHandler;
  onDragStart?: YMapMarkerEventHandler;
  onFastClick?: (e: MouseEvent) => void;
  properties?: Record<string, unknown>;
  children: React.ReactNode;
  className?: string;
  zIndex?: number;
}

export const YMapMarker = ({
  children,
  coordinates,
  draggable,
  className,
  ...props
}: YMapMarkerProps) => {
  const { YMapMarker } = useMapComponents();
  return (
    <YMapMarker coordinates={coordinates} draggable={draggable} {...props}>
      {/* нам нужна эта обертка, т.к. отвратительные дяди из яндекс не упомянули, 
      что без этих стилей маркер не будет стоять точь-в-точь на координатах */}
      <div
        className={twMerge("relative -z-10 -translate-x-1/2 -translate-y-1/2 transform", className)}
      >
        {children}
      </div>
    </YMapMarker>
  );
};
