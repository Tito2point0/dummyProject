// src/types/index.ts
export interface Card {
    id: string;
    name: string;
    images: {
      small: string;
      large: string;
    };
    hp: string;
    types: string[];
    set: {
      name: string;
      releaseDate: string;
    };
    tcgplayer?: {
      url: string;
      prices: {
        holofoil?: {
          market: number;
        };
      };
    };
  }
  