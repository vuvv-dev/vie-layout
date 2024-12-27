import React from "react";
import styled, { css } from "styled-components";

// Breakpoints giống Ant Design
const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

// Helper để tạo CSS responsive
const createResponsiveStyles = (span?: number) => {
  if (!span) return "";
  return css`
    @media (min-width: ${breakpoints.xs}px) {
      flex: 0 0 ${(span / 24) * 100}%;
      max-width: ${(span / 24) * 100}%;
    }
  `;
};

// Styled Row
const StyledRow = styled.div<{ gutter?: number | [number, number] }>`
  display: flex;
  flex-wrap: wrap;
  margin: ${({ gutter }) =>
    Array.isArray(gutter)
      ? `-${gutter[1]! / 2}px -${gutter[0]! / 2}px`
      : `-${gutter || 0}px`};

  & > * {
    padding: ${({ gutter }) =>
      Array.isArray(gutter)
        ? `${gutter[1]! / 2}px ${gutter[0]! / 2}px`
        : `${gutter || 0}px`};
  }
`;

// Styled Col
const StyledCol = styled.div<{
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}>`
  flex: 0 0 ${(props) => (props.span ? (props.span / 24) * 100 : 100)}%;
  max-width: ${(props) => (props.span ? (props.span / 24) * 100 : 100)}%;

  ${(props) => createResponsiveStyles(props.xs)}
  ${(props) => createResponsiveStyles(props.sm)}
  ${(props) => createResponsiveStyles(props.md)}
  ${(props) => createResponsiveStyles(props.lg)}
  ${(props) => createResponsiveStyles(props.xl)}
  ${(props) => createResponsiveStyles(props.xxl)}
`;

export const Row = ({
  children,
  gutter = 0,
}: {
  children: React.ReactNode;
  gutter?: number | [number, number];
}) => {
  return <StyledRow gutter={gutter}>{children}</StyledRow>;
};

export const Col = ({
  children,
  span,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}: {
  children: React.ReactNode;
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}) => {
  return (
    <StyledCol span={span} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      {children}
    </StyledCol>
  );
};

export type ColProps = React.PropsWithChildren<{
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}>;

export type RowProps = React.PropsWithChildren<{
  gutter?: number | [number, number];
}>;
