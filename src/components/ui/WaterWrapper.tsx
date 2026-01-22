"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import WaterWave to avoid SSR issues
const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

interface WaterWrapperProps {
  imageUrl: string;
  dropRadius?: number;
  perturbance?: number;
  resolution?: number;
  children?: React.ReactNode;
  className?: string;
}

export function WaterWrapper({
  imageUrl,
  dropRadius = 30,
  perturbance = 0.07,
  resolution = 1024,
  children,
  className,
}: WaterWrapperProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <WaterWave
        imageUrl={imageUrl}
        dropRadius={dropRadius}
        perturbance={perturbance}
        resolution={resolution}
        style={{ width: "100%", height: "100%", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {(props: any) => (
          <div ref={props.container} className="w-full h-full relative z-10 cursor-pointer">
            {children}
          </div>
        )}
      </WaterWave>
    </div>
  );
}
