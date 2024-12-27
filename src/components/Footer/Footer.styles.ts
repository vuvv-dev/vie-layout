import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

type FooterProps = {
  width?: number | string | "fit-content" | "inherit";
  height?: number | string | "fit-content" | "inherit";

  center?: boolean;
};
export const Footer = styled.footer<FooterProps>`
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  align-items: center;
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};

  //responsive
  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.md}) {
    justify-content: ${(props) => (props.center ? "center" : "flex-start")};
    height: auto;
  }
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

type FooterContainerProps = {
  width?: number | string | "fit-content" | "inherit";
  height?: number | string | "fit-content" | "inherit";
};

export const FooterContent = styled.div<FooterContainerProps>`
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};

  @media (max-width: ${breakpoints.xl}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;
