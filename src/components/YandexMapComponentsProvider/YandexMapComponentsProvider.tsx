"use client";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { YandexMapContext } from "../..";

interface IProvider {
  children: React.ReactNode;
}

const YandexMapComponentsProvider = ({ children }: IProvider) => {
  const [mapModules, setMapModules] = useState<any>();

  useEffect(() => {
    const loadComponents = async () => {
      try {
        const ymaps3: any = (window as any).ymaps3;
        const middleMan = await ymaps3.import("@yandex/ymaps3-reactify");
        const reactify = middleMan.reactify.bindTo(React, ReactDOM);
        const modules = reactify.module(ymaps3);
        const { YMapZoomControl } = reactify.module(
          await ymaps3.import("@yandex/ymaps3-controls@0.0.1")
        );
        const { YMapClusterer, clusterByGrid } = reactify.module(
          await ymaps3.import("@yandex/ymaps3-clusterer@0.0.1")
        );
        modules.YMapZoomControl = YMapZoomControl;
        modules.YMapClusterer = YMapClusterer;
        modules.clusterByGrid = clusterByGrid;
        setMapModules(modules);
      } catch (error) {
        console.error(error);
        setMapModules("Ошибка загрузки модулей карты");
      }
    };
    loadComponents();
  }, []);

  if (!mapModules) return;

  return (
    <>
      <YandexMapContext.Provider value={mapModules}>{children}</YandexMapContext.Provider>
    </>
  );
};

export default YandexMapComponentsProvider;
