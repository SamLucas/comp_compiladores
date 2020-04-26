import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CeasyRender = ({ ceasy, children }) => {
  const [style, setStyle] = useState("");

  useEffect(() => Compilate(ceasy), [ceasy]);

  const Compilate = async (ceasy) => {
    const styles = await (await fetch(ceasy).then((r) => r.text()))
      .split("\n")
      .join("")
      .split(" ")
      .join("");

    const responseCSS = styles
      .replace(/=/g, "{")
      .replace(/,/g, ";")
      .replace(/[(]/g, ":")
      .replace(/[)]/g, "")
      .replace(/[[]/g, "")
      .replace(/]/g, "}");

    setStyle(responseCSS);
  };

  const Container = styled.div`
    ${(props) => props.ceasy && props.ceasy}
  `;

  return <Container ceasy={style}>{children}</Container>;
};

export default CeasyRender;
