"use client";

import { useMapComponents } from "../..";
import { useEffect } from "react";

export const YMapZoomControl = () => {
  const { YMapZoomControl } = useMapComponents();

  // почему-то при клике на кнопки зума сабмитится форма
  // этот хук нужен, чтобы при клике на кнопки зума предотвращались все другие сторонние действия
  useEffect(() => {
    const tag = "ymaps3x0";

    const disableDefault = (e: any) => {
      if (e.target.className.includes && e.target.className.includes(tag)) e.preventDefault();
    };

    window.addEventListener("click", disableDefault);

    return () => {
      window.removeEventListener("click", disableDefault);
    };
  }, []);

  return <YMapZoomControl />;
};
