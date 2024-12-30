export type ThemeType = 'classic' | 'modern' | 'wooden' | 'neon';

export interface Theme {
  name: string;
  board: {
    light: string;
    dark: string;
    border: string;
    highlight: string;
    selected: string;
    possible: string;
  };
  pieces: {
    white: string;
    black: string;
  };
  background: string;
}