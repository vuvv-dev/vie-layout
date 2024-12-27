import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

type RowProps = {
  gutter?: number | [number, number];
  align?: "top" | "middle" | "bottom";
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
};

type ColProps = {
  span?: number;
  offset?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

// Row Styles
export const RowContainer = styled.div<RowProps>`
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
  row-gap: ${props => (Array.isArray(props.gutter) ? `${props.gutter[1]}px` : `${props.gutter}px`)};
  margin-left: ${({ gutter }) =>
    Array.isArray(gutter) ? `-${gutter[0] / 2}px` : `-${gutter! / 2}px`};
  margin-right: ${({ gutter }) =>
    Array.isArray(gutter) ? `-${gutter[0] / 2}px` : `-${gutter! / 2}px`};

  ${({ gutter }) =>
    Array.isArray(gutter)
      ? css`
          margin-top: -${gutter[1] / 2}px;
          margin-bottom: -${gutter[1] / 2}px;
        `
      : css`
          margin-top: -${gutter! / 2}px;
          margin-bottom: -${gutter! / 2}px;
        `}

  align-items: ${({ align }) =>
    align === "top"
      ? "flex-start"
      : align === "middle"
      ? "center"
      : align === "bottom"
      ? "flex-end"
      : "stretch"};
  justify-content: ${({ justify }) =>
    justify === "start"
      ? "flex-start"
      : justify === "end"
      ? "flex-end"
      : justify === "center"
      ? "center"
      : justify === "space-around"
      ? "space-around"
      : justify === "space-between"
      ? "space-between"
      : "stretch"};
`;

// Col Styles
export const ColContainer = styled.div<ColProps>`
  position: relative;
  flex: 0 0 ${({ span }) => (span ? (span / 24) * 100 : "100")}%;
  max-width: ${({ span }) => (span ? (span / 24) * 100 : "100")}%;
  margin-left: ${({ offset }) => (offset ? `${(offset / 24) * 100}%` : "0")};

  ${({ xs }) =>
    xs &&
    css`
      @media (max-width: ${breakpoints.xs}px) {
        flex: 0 0 ${(xs / 24) * 100}%;
        max-width: ${(xs / 24) * 100}%;
      }
    `}
  ${({ sm }) =>
    sm &&
    css`
      @media (max-width: ${breakpoints.sm}px) {
        flex: 0 0 ${(sm / 24) * 100}%;
        max-width: ${(sm / 24) * 100}%;
      }
    `}
  ${({ md }) =>
    md &&
    css`
      @media (max-width: ${breakpoints.md}px) {
        flex: 0 0 ${(md / 24) * 100}%;
        max-width: ${(md / 24) * 100}%;
      }
    `}
  ${({ lg }) =>
    lg &&
    css`
      @media (max-width: ${breakpoints.lg}px) {
        flex: 0 0 ${(lg / 24) * 100}%;
        max-width: ${(lg / 24) * 100}%;
      }
    `}
  ${({ xl }) =>
    xl &&
    css`
      @media (max-width: ${breakpoints.xl}px) {
        flex: 0 0 ${(xl / 24) * 100}%;
        max-width: ${(xl / 24) * 100}%;
      }
    `}
  ${({ xxl }) =>
    xxl &&
    css`
      @media (max-width: ${breakpoints.xxl}px) {
        flex: 0 0 ${(xxl / 24) * 100}%;
        max-width: ${(xxl / 24) * 100}%;
      }
    `}
`;
