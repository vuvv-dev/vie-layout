import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Section from "./components/Section/Section";
type Props = {};

export default function App() {
  return (
    <div>
      <Header
        contentCenter
        height={"fit-content"}
        contentContainerStyle={{
          background: "blue",
        }}
        contentWidth={1440}
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
      <Content align="center"  direction="column" contentCenter width={"100%"} height={"fit-content"}>
        <Section paddingX={80} paddingY={60} style={{background: "green"}} width={1440} height={500}>
            <div style={{background: "yellow", height: "100%"}}>Section</div>
        </Section>
        <Section paddingX={80} paddingY={60} style={{background: "green"}} width={1440} height={500}>
            <div style={{background: "yellow", height: "100%"}}>Section</div>
        </Section>
      </Content>
    </div>
  );
}
