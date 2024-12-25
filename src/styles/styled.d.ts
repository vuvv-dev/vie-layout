// src/styles/styled.d.ts
import 'styled-components';
import { breakpoints } from './breakpoints';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
    };
    breakpoints: typeof breakpoints
  }
}
