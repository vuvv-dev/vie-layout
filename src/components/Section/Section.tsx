import React from "react";
import * as S from "./Section.styles";
export type SectionProps = {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;

  paddingX?: number | string;
  paddingY?: number | string;

  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

export default function Section({
  children,
  width = "100%",
  height,
  className,
  paddingX,
  paddingY,
  style,
  id,
}: SectionProps) {
  return (
    <S.Section
      paddingX={paddingX}
      paddingY={paddingY}
      width={width}
      height={height}
      className={className}
      style={style}
      id={id}
    >
      {children}
    </S.Section>
  );
}
