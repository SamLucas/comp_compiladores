import styled from "styled-components";

import { Link } from "react-router-dom";
import Color from "./colors";

export const Container = styled.div`
  background-color: ${Color.background.first};
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 50px;

  .header {
    background-color: ${Color.background.second};
    padding: 25px;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  }

  .grid {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
  }
`;

const PropsBackGrounds = {
  des: {
    back: `background: ${Color.background.des_fixforfix};`,
    link: "desfixforfix",
  },
  reg: {
    back: `background-image: ${Color.background.regex};`,
    link: "regex",
  },
  ceasy: {
    back: `background-color: #084C7C;`,
    link: "ceasy",
  },
};

export const Project = styled(Link).attrs((props) => ({
  to: `/${PropsBackGrounds[props.type].link}`,
}))`
  display: flex;
  list-style: none;
  padding: 20px;
  border-radius: 5px;
  width: 190px;
  height: 100px;
  margin-right: 20px;
  align-items: flex-end;
  box-shadow: 1.5px 3px rgba(0, 0, 0, 0.2);
  text-decoration: none;

  ${(props) => PropsBackGrounds[props.type].back};

  h1 {
    color: white;
    text-transform: capitalize;
  }
`;
