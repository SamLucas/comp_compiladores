import React, { useState } from "react";

import { Container } from "./styles";

import { Colors, Text } from "./utils";

export default function Regex() {
  const [text, setText] = useState(Text);
  const [textRegex, setTextRegex] = useState("Resultado do regex...");

  const getHighlightedText = keys => {
    const regex = `[${keys}^]`;
    const new_text = Text.split(" ").map((part, i) => (
      <span
        key={i}
        style={
          part.match(regex) ? { fontWeight: "bold", color: Colors.fourth } : {}
        }
      >
        {part} {""}
      </span>
    ));

    setText(new_text);
    setTextRegex(regex);
  };

  return (
    <Container>
      <h1 className="title">Hegex</h1>
      <div className="text">
        <input
          type="text"
          name="serach"
          align
          placeholder="Buscar por letras em palavras..."
          onChange={e => getHighlightedText(e.target.value)}
        />
        <h1>{textRegex && textRegex}</h1>
        <p>{text}</p>
      </div>
    </Container>
  );
}
