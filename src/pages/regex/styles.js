import styled from "styled-components";

import { Colors } from "./utils";
import ColorDashBoard from "../dashboard/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: ${Colors.first}; */
  background-image: ${ColorDashBoard.background.regex};
  min-height: 100vh;

  h1.title {
    text-align: center;
    margin-top: 50px;
    margin-bottom: -30px;
    font-size: 60px;
    color: ${Colors.third};
  }

  div.text {
    margin: 100px;

    input {
      padding: 10px 15px;
      border-radius: 5px;
      border: 0px;
      width: 100%;
      display: inline-block;
    }

    h1 {
      text-align: center;
      font-size: 30px;
      color: ${Colors.fiveth};
      padding: 40px;
    }

    p {
      background-color: white;
      border-radius: 5px;
      padding: 25px;
      white-space: pre-line;
      font-size: 15px;
    }
  }
`;
