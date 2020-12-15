import * as React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
display: flex;
min-height: 100vh;
`;

export default (props: { children?: React.ReactNode }) => (
  <LayoutWrapper>
    {props.children}
  </LayoutWrapper>
);
