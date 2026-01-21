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
  dropRadius = 20,
  perturbance = 0.04,
  resolution = 256,
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
        style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
      >
        {({ pause, play }: { pause: () => void; play: () => void }) => (
          <div className="w-full h-full relative">
            {children}
          </div>
        )}
      </WaterWave>
    </div>
  );
}
