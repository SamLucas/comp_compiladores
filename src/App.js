import React, { useState } from "react";

import { Container } from "./styles";

export default function App() {
  const [result, setResult] = useState();
  const [expression, setExpression] = useState("1*3/3-6+7*7/3");

  const Preferences = c => (c === "*" ? 3 : c === "/" ? 2 : 1);

  const CompareBigger = (exp1, exp2) => Preferences(exp1) < Preferences(exp2);

  const handleSubmite = e => {
    e.preventDefault();

    var result = "";
    var pilha = [];

    for (let k = 0; k < expression.length; k++) {
      if (!isNaN(expression[k])) result += expression[k];
      else {
        if (pilha.length === 0) pilha.unshift(expression[k]);
        else if (CompareBigger(pilha[0], expression[k])) {
          if (pilha.length > 0) pilha.unshift(expression[k]);
          else result += expression[k];
        } else {
          result += pilha.shift();
          pilha.unshift(expression[k]);
        }
      }
    }

    result += pilha.shift();
    setResult(result);
  };

  return (
    <Container>
      <form onSubmit={handleSubmite}>
        <input
          type="text"
          value={expression}
          onChange={e => setExpression(e.target.value)}
          placeholder="Digite "
        />
        <input type="submit" value="Enviar" />
      </form>

      <p>{result}</p>
    </Container>
  );
}
