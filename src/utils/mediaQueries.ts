import { breakpoints } from "../styles/breakpoints";

// Helper function to generate media query
const mediaQuery = (key: keyof typeof breakpoints) => (styles: string) =>
  `@media (max-width: ${breakpoints[key]}) { ${styles} }`;

export default mediaQuery;