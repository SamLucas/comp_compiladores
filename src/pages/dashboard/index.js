import React from "react";

import { Container } from "./styles";

export default function dashboard() {
  return (
    <Container>
      <h1>Projetos</h1>
      <p>Projetos catalogados da diciplica de compiladores.</p>

      <ul>
        <li>
          <h1>des(fixforfix)</h1>
        </li>
        <li>
          <h1>regex</h1>
        </li>
      </ul>
    </Container>
  );
}
