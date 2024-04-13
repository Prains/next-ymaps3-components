"use client";
import { useMapComponents } from "../..";
import type { Orientation, Position } from "../..";

type YMapControlsProps = {
  position: Position;
  orientation?: Orientation;
  children: React.ReactNode;
}

export const YMapControls = ({ position, children, orientation }: YMapControlsProps) => {
  const { YMapControls } = useMapComponents();

  return (
    <YMapControls position={position} orientation={orientation}>
      {children}
    </YMapControls>
  );
};
