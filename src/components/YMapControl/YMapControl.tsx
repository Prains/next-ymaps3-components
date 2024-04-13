"use client";
import { useMapComponents } from "../..";

type YMapControlProps = {
  children: React.ReactNode;
  className?: string;
}

export const YMapControl = ({ children, className }: YMapControlProps) => {
  const { YMapControl } = useMapComponents();

  return (
    <YMapControl>
      <div className={className}>{children}</div>
    </YMapControl>
  );
};
