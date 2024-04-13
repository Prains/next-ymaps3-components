"use client";
import { useMapComponents } from "../..";
import { Coordinates } from "../..";

interface YMapFeatureProps {
  id?: string;
  source?: string;
  geometry: {
    type: string;
    coordinates: Coordinates[];
  };
  style: {
    [key: string]: any;
  };
}

export const YMapFeature = ({ geometry, style, id }: YMapFeatureProps) => {
  const { YMapFeature } = useMapComponents();
  return <YMapFeature geometry={geometry} style={style} id={id} />;
};
