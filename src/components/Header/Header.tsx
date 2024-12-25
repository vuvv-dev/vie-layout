import React from "react";
import * as S from "./Header.styles";

export type HeaderProps = {
  children: React.ReactNode;
  
  width?: number | string;
  height?: number | string | "fit-content" | "inherit";

  contentWidth?: number | string;
  contentHeight?: number | string | "fit-content" | "inherit";
  contentCenter?: true | false;
  contentContainerStyle?: React.CSSProperties;

  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

export default function Header({
  children,
  width,
  height,
  contentWidth,
  contentHeight,
  contentCenter,
  contentContainerStyle,
  className,
  style,
  id,
}: HeaderProps) {
  return (
    <S.Header
      center={contentCenter!}
      className={className}
      style={style}
      id={id}
      width={width}
      height={height}
    >
      <S.HeaderContainer
        style={contentContainerStyle}
        width={contentWidth}
        height={contentHeight}
      >
        {children}
      </S.HeaderContainer>
    </S.Header>
  );
}
