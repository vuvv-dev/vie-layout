import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

type ContentProps = {
  width?: number | string | "fit-content" | "inherit";
  height?: number | string | "fit-content" | "inherit";
  background?: React.CSSProperties["background"];
  center?: boolean;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "flex-start" | "center" | "flex-end";
};
export const Content = styled.div<ContentProps>`
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
  display: flex;
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};

  background: ${(props) => props.background};

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
