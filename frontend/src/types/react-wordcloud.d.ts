declare module 'react-wordcloud' {
    import * as React from 'react';
  
    export interface Word {
      text: string;
      value: number;
    }
  
    export interface WordCloudOptions {
      fontFamily?: string;
      fontSizes?: [number, number];
      fontStyle?: string;
      fontWeight?: string;
      padding?: number;
      rotations?: number;
      rotationAngles?: [number, number];
      scale?: 'linear' | 'log' | 'sqrt';
      spiral?: 'archimedean' | 'rectangular';
      transitionDuration?: number;
      deterministic?: boolean;
      enableTooltip?: boolean;
    }
  
    export interface WordCloudCallbacks {
      onWordClick?: (word: Word, event: MouseEvent) => void;
      onWordMouseOver?: (word: Word, event: MouseEvent) => void;
      onWordMouseOut?: (word: Word, event: MouseEvent) => void;
      getWordTooltip?: (word: Word) => string;
    }
  
    interface Props {
      words: Word[];
      options?: WordCloudOptions;
      callbacks?: WordCloudCallbacks;
    }
  
    const ReactWordcloud: React.FC<Props>;
    export default ReactWordcloud;
  }