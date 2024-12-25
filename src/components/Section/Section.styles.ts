import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

type SectionProps = {
  width?: number | string | "fit-content" | "inherit";
  height?: number | string | "fit-content" | "inherit";
  paddingX?: number | string;
  paddingY?: number | string;
};

export const Section = styled.div<SectionProps>`
  padding: ${(props) =>
    `${
      typeof props.paddingY === "number"
        ? `${props.paddingY}px`
        : props.paddingY
    } ${
      typeof props.paddingX === "number"
        ? `${props.paddingX}px`
        : props.paddingX
    }`};
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};

  @media (max-width: ${breakpoints.xl}) {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;
