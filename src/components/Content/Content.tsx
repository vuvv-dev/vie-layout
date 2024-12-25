import React from "react";
import * as S from "./Content.styles";
export type ContentProps = {
  children: React.ReactNode;
  width?: number | string | "fit-content" | "inherit";
  height?: number | string | "fit-content" | "inherit";

  direction?: "row" | "column" | "row-reverse" | "column-reverse";

  className?: string;
  style?: React.CSSProperties;
  id?: string;
  contentCenter?: true | false;
  align?: "flex-start" | "center" | "flex-end";
};

export default function Content({
  children,
  width,
  height,
  direction,
  align,
  contentCenter,
  className,
  style,
  id,
}: ContentProps) {
  return (
    <S.Content
      width={width}
      height={height}
      style={style}
      className={className}
      id={id}
      direction={direction}
      center={contentCenter!}
      align={align} 
    >
      {children}
    </S.Content>
  );
}
