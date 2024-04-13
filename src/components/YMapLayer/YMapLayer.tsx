"use client";

import { useMapComponents } from "../..";

interface YMapLayerProps {
  id?: string;
  type: "markers";
  zIndex: number;
  source: string;
}

export const YMapLayer = ({ id, type, zIndex, source }: YMapLayerProps) => {
  const { YMapLayer } = useMapComponents();

  return <YMapLayer id={id} type={type} zIndex={zIndex} source={source} />;
};
