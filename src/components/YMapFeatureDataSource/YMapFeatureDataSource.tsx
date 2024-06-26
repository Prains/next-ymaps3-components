"use client";

import { useMapComponents } from "../..";

type YMapFeatureDataSourceProps = {
  id: string;
}

export const YMapFeatureDataSource = ({ id }: YMapFeatureDataSourceProps) => {
  const { YMapFeatureDataSource } = useMapComponents();

  return <YMapFeatureDataSource id={id} />;
};
