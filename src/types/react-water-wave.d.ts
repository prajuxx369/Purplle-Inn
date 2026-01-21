declare module 'react-water-wave' {
  import * as React from 'react';

  export interface WaterWaveProps {
    imageUrl?: string;
    dropRadius?: number;
    perturbance?: number;
    resolution?: number;
    style?: React.CSSProperties;
    children?: (props: {
      pause: () => void;
      play: () => void;
      container: HTMLElement;
    }) => React.ReactNode;
  }

  const WaterWave: React.FC<WaterWaveProps>;
  export default WaterWave;
}
