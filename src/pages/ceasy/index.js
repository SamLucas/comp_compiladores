import React from "react";

import CeasyRender from "./CeasyRender";
import Styles from "./styles_example.ceasy";

export default function ceasy() {
  return (
    <CeasyRender ceasy={Styles}>
      <div>
        <h1>Bem vindo!!</h1>
        <p>Bem vindo a nova linguagem de programação ceasy!!</p>
      </div>
    </CeasyRender>
  );
}
