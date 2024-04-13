"use client";
import { useContext } from "react";
import { YandexMapContext } from "..";

export const useMapComponents = () => {
  const mapModules = useContext(YandexMapContext);

  const { YMap } = mapModules;

  if (!YMap) throw new Error("Ошибка загрузки модулей карты");

  return mapModules;
};
