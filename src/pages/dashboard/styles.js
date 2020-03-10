import styled from "styled-components";

import Color from "./colors";

export const Container = styled.div`
  background-color: ${Color.background.first};
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 50px;
`;
