import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

type LandingContainerProps = {
  leftSite?: boolean;
  rightSite?: boolean;
}
export const LandingContainer = styled.div``;

export const LandingContent = styled.div<LandingContainerProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${(props) => (props.leftSite ? "flex-start" : props.rightSite ? "flex-end" : "center")};

  @media (max-width: ${breakpoints.xl}) {
    flex-direction: column;
  }
`;
type SiteProps = {
  containerWidth?: number;
  fixed?: boolean;
};
export const LandingLeft = styled.div<SiteProps>`
  width: calc(
    ${(props) =>
      props.containerWidth
        ? `calc(50% - ${props.containerWidth / 2}px)`
        : "50%"}
  );
  ${(props) => (props.fixed ? "position: fixed;" : "")}
  @media (max-width: ${breakpoints.xl}) {
    width: 100%;
  }
`;
export const LandingRight = styled.div<SiteProps>`
  width: calc(
    ${(props) =>
      props.containerWidth
        ? `calc(50% - ${props.containerWidth / 2}px)`
        : "50%"}
  );

  @media (max-width: ${breakpoints.xl}) {
    width: 100%;
  }
`;

export const LandingCenterSite = styled.div<SiteProps>`
  width: ${(props) => (props.containerWidth ? `${props.containerWidth}px` : "100%")};

  @media (max-width: ${breakpoints.xl}) {
    width: 100%;
  }
`;