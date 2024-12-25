import styled from "styled-components";

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
`;
