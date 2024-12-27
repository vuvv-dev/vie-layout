import React from "react";
import * as S from "./Landing.styles";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Section from "../../components/Section/Section";
import { Col, Row } from "../../components/Grid/Grid";
import Footer from "../../components/Footer/Footer";

export type LandingProps = {
  content?: React.ReactNode;
  header?: boolean;
  footer?: boolean;
  leftSite?: boolean;
  rightSite?: boolean;
  centerSiteWidth?: number;
  contentStyle?: React.CSSProperties;
  leftSiteContent?: React.ReactNode;
  rightSiteContent?: React.ReactNode;
};

export default function Landing({
  header = true,
  footer = true,
  content,
  leftSite = false,
  rightSite = false,
  centerSiteWidth = 1200,
  contentStyle,
  leftSiteContent,
  rightSiteContent,
  
}: LandingProps) {
  return (
    <S.LandingContainer>
      {header && (
        <Header
          width={"100%"}
          contentCenter
          height={"fit-content"}
          contentContainerStyle={{
            background: "blue",
          }}
          contentWidth={centerSiteWidth}
          fixed
          children={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 80px",
              }}
            >
              <div>Header</div>
              <div>Nav</div>
            </div>
          }
        />
      )}
      <S.LandingContent style={contentStyle} leftSite={leftSite} rightSite={rightSite}>
        {leftSite && (
          <S.LandingLeft
            id="left-site"
            containerWidth={centerSiteWidth as number}
          >
            {leftSiteContent}
          </S.LandingLeft>
        )}
        <S.LandingCenterSite id="center" containerWidth={centerSiteWidth}>
          <Content
            align="center"
            direction="column"
            contentCenter
            width={"100%"}
            height={"fit-content"}
          >
            {
              content
            }
          </Content>
        </S.LandingCenterSite>
        {rightSite && (
          <S.LandingRight
            id="right-site"
            containerWidth={centerSiteWidth as number}
          >
            {rightSiteContent}
          </S.LandingRight>
        )}
      </S.LandingContent>
      {footer && (
        <Footer
          width={"100%"}
          height={50}
          contentCenter
          contentWidth={centerSiteWidth}
          contentContainerStyle={{
            background: "blue",
          }}
          children={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 80px",
              }}
            >
              <div>Footer</div>
              <div>Nav</div>
            </div>
          }
        />
      )}
    </S.LandingContainer>
  );
}
