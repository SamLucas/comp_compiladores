import React from "react";

import { Container, Project } from "./styles";

export default function dashboard() {
  return (
    <Container>
      <div className="header">
        <h1>Projetos</h1>
        <p>Projetos catalogados da diciplica de compiladores.</p>
      </div>
      <div className="grid">
        <Project type={"des"}>
          <h1>des(fixforfix)</h1>
        </Project>
        <Project type={"reg"}>
          <h1>regex</h1>
        </Project>
        <Project type={"ceasy"}>
          <h1>Ceasy</h1>
        </Project>
      </div>
    </Container>
  );
}
