import React from "react";
import * as S from "./Footer.styles";

export type FooterProps = {
  children: React.ReactNode;

  width?: number | string;
  height?: number | string;

  contentWidth?: number | string;
  contentHeight?: number | string | "fit-content" | "inherit";
  contentCenter?: true | false;
  contentContainerStyle?: React.CSSProperties;

  style?: React.CSSProperties;
  className?: string;
  id?: string;
};

export default function Footer({
  children,
  style,
  className,
  contentCenter,
  contentHeight,
  contentWidth,
  contentContainerStyle,
  id,
}: FooterProps) {
  return (
    <S.Footer style={style} className={className} id={id}>
      <S.FooterContent>{children}</S.FooterContent>
    </S.Footer>
  );
}
