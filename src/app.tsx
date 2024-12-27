import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid/Grid";

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
      <Content
        align="center"
        direction="column"
        contentCenter
        width={"100%"}
        height={"fit-content"}
      >
        <Section
          paddingX={80}
          paddingY={60}
          style={{ background: "green" }}
          width={1440}
          height={500}
        >
            <Grid.Row gutter={[8, 8]} align="middle" justify="space-between">
              <Grid.Col span={6} xs={24} sm={12} md={8}>
                <div style={{ background: "lightblue", padding: "16px" }}>
                  Column 1
                </div>
              </Grid.Col>
              <Grid.Col span={6} xs={24} sm={12} md={8}>
                <div style={{ background: "lightgreen", padding: "16px" }}>
                  Column 2
                </div>
              </Grid.Col>
              <Grid.Col span={6} xs={24} sm={12} md={8}>
                <div style={{ background: "lightcoral", padding: "16px" }}>
                  Column 3
                </div>
              </Grid.Col>
            </Grid.Row>
        </Section>
        <Section
          paddingX={80}
          paddingY={60}
          style={{ background: "green" }}
          width={1440}
          height={500}
        >
          <div style={{ background: "yellow", height: "100%" }}>Section</div>
        </Section>
      </Content>
      <Footer
        width={"100%"}
        height={50}
        contentCenter
        contentWidth={1440}
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
    </div>
  );
}
