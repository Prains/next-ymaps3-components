"use client";
import { useMapComponents } from "../..";
import { useMemo } from "react";
import type { Point, Coordinates } from "../..";

type YMapClustererProps = {
  gridSize: number;
  points: Point[];
  marker: (feature: Point) => JSX.Element;
  cluster: (coordinates: Coordinates, features: Point[]) => JSX.Element;
}

/**
 * Как работает пакет кластеризации:
 *
 * 1. При вызове метода clusterByGrid, все точки, которые входят в ячейку, будут переданы в метод cluster.
 * 2. Метод cluster вызывается для каждой ячейки, и возвращает JSX-элемент, который будет отображаться в ячейке.
 * 3. Метод clusterByGrid вызывается для каждой ячейки, и возвращает JSX-элемент, который будет отображаться в ячейке.
 * 4. Метод clusterByGrid передает все точки в ячейку в метод cluster, и возвращает JSX-элемент, который будет отображаться в ячейке.
 *
 * Используя points, нужно указать координаты точки. Вместе с points с функцию marker можно передать абсолютно любую информацию, запрос, функцию
 * Используя cluster, можно получить текущие координаты кластера и все включенные в кластер точки, чтобы сформировать кластер.
 * Соответственно, если передать в points все нужные данные и флаги о текущем маркере, то можно составить абсолютно лююбой кластер
 *
 * points, marker стоит объявлять с мемоизацией, чтобы не перезаписываться при каждом вызове метода clusterByGrid
 *
 */

export const YMapClusterer = ({ gridSize, points, marker, cluster }: YMapClustererProps) => {
  const { clusterByGrid, YMapClusterer } = useMapComponents();

  const gridSizedMethod = useMemo(() => clusterByGrid({ gridSize }), [clusterByGrid, gridSize]);

  return (
    <YMapClusterer method={gridSizedMethod} features={points} marker={marker} cluster={cluster} />
  );
};
