import React from "react";
import { RowContainer, ColContainer } from "./Grid.styles";

type RowProps = {
  children: React.ReactNode;
  gutter?: number | [number, number];
  align?: "top" | "middle" | "bottom";
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
};

type ColProps = {
  children: React.ReactNode;
  span?: number;
  offset?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

export function Row({ gutter = 0, align, justify, children }: RowProps) {
  return (
    <RowContainer gutter={gutter} align={align} justify={justify}>
      {children}
    </RowContainer>
  );
}

export function Col({
  span,
  offset,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  children,
}: ColProps) {
  return (
    <ColContainer
      span={span}
      offset={offset}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
    >
      {children}
    </ColContainer>
  );
}

const Grid = {
  Row,
  Col,
};

export default Grid;
