import React from "react";
import Landing from "./layouts/Landing/Landing";
import Section from "./components/Section/Section";
import { Col, Row } from "./components/Grid/Grid";

export default function App() {
  return (
    <div>
      <Landing contentStyle={{marginTop: 41}} content = {
        <>
          <Section
              paddingX={80}
              paddingY={60}
              style={{ background: "green" }}
              height={500}
            >
              <Row gutter={[16, 24]}>
                <Col span={24}>
                  <div style={{ background: "#f0f0f0", padding: "16px" }}>
                    Col 1
                  </div>
                </Col>
                <Col span={12} sm={12} md={8} lg={6}>
                  <div style={{ background: "#f0f0f0", padding: "16px" }}>
                    Col 2
                  </div>
                </Col>
                <Col span={12} sm={12} md={8} lg={6}>
                  <div style={{ background: "#f0f0f0", padding: "16px" }}>
                    Col 3
                  </div>
                </Col>
                <Col span={12} sm={12} md={8} lg={6}>
                  <div style={{ background: "#f0f0f0", padding: "16px" }}>
                    Col 4
                  </div>
                </Col>
                <Col span={12} sm={12} md={8} lg={6}>
                  <div style={{ background: "#f0f0f0", padding: "16px" }}>
                    Col 5
                  </div>
                </Col>
                <Col span={12} sm={12} md={8} lg={6}>
                  <div style={{ background: "#f0f0f0", padding: "16px" }}>
                    Col 6
                  </div>
                </Col>
                <Col span={12} sm={12} md={8} lg={6}>
                  <div style={{ background: "#f0f0f0", padding: "16px" }}>
                    Col 7
                  </div>
                </Col>
                <Col span={12} sm={12} md={8} lg={6}>
                  <div style={{ background: "#f0f0f0", padding: "16px" }}>
                    Col 8
                  </div>
                </Col>
              </Row>
            </Section>
            <Section
              paddingX={80}
              paddingY={60}
              style={{ background: "green" }}
              height={500}
            >
              <div style={{ background: "yellow", height: "100%" }}>
                Section
              </div>
            </Section>
        </>
      }/>
    </div>
  );
}
