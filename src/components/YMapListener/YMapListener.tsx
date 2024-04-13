"use client";
import { useMapComponents } from "../..";
import type { YMapListenerClickEvent, YMapListenerUpdateEvent } from "../..";

type YMapListenerProps = {
  layerId?: string;
  onUpdate?: (e: YMapListenerUpdateEvent) => void;
  onClick?: (object: any, event: YMapListenerClickEvent) => void;
}

export const YMapListener = ({ layerId = "any", onUpdate, onClick }: YMapListenerProps) => {
  const { YMapListener } = useMapComponents();

  return <YMapListener layer={layerId} onUpdate={onUpdate} onClick={onClick} />;
};
