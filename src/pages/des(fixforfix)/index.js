// Codigo feito em javascript com reactjs (Samuel, Vanessa, Leonardo)

import React, { useState } from "react";

import { Container } from "./styles";

import fixfordesfix from 'src/assets/imgs/fixfordesfix.png'

export default function Desfixforfix() {
  const [result, setResult] = useState("Sua resposta...");
  const [expression, setExpression] = useState("");

  const Preferences = c => (c === "*" ? 3 : c === "/" ? 2 : 1);

  const CompareBigger = (exp1, exp2) => Preferences(exp1) < Preferences(exp2);

  const handleSubmite = () => {

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

    pilha.map(ele => result += ele);
    setResult(result);
  };

  return (
    <Container>
      <div>
        <h1>fixfordesfix</h1>

        <div>
          <input
            type="text"
            value={expression}
            onChange={e => setExpression(e.target.value)}
            onSubmit={handleSubmite}
            placeholder="Digite sua exoressão.. "
          />

          <p>{result}</p>
        </div>

        <button onClick={handleSubmite}>Enviar</button>
      </div>
      <img src={fixfordesfix} alt="" />
    </Container>
  );
}