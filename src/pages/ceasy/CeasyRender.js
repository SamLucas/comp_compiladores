import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Ceasy() {
  const readFile = async (file) => await fetch(file).then((r) => r.text());

  const core = async (ceasy = "") => {
    const styles = ceasy.split("\n").join("").split(" ").join("");

    const responseCSS = styles
      .replace(/=/g, "{\n\t")
      .replace(/[)]]/g, ";\n}\n\n")
      .replace(/[a-z],/g, " ")
      .replace(/[),]]/g, ";\n}\n\n")

      .replace(/,/g, ";\n\t")
      .replace(/[(]/g, ": ")
      .replace(/[)]/g, "")
      .replace(/[[]/g, "")
      .replace(/]/g, "}\n\n");
    return responseCSS;
  };

  const Render = ({ ceasy, children }) => {
    const [style, setStyle] = useState("");

    useEffect(() => Compilate(ceasy), [Compilate, ceasy]);

    const Compilate = async (ceasy) => {
      const stringFile = await readFile(ceasy);
      const response = await core(stringFile);
      setStyle(response);
    };

    const Container = styled.div`
      ${(props) => props.ceasy && props.ceasy}
    `;

    return <Container ceasy={style}>{children}</Container>;
  };

  const indentificationTokens = (codeString) => {
    var palavrasReservadas = ["=", "[", "(", ",", "),", "]"];
    var palavrasCorrespondentes = ["space", "{", ":", "space", ";", "}"];
    var wordsFind = [];

    let caracterByLineAux = {};

    var linesCode = codeString.split("\n");

    palavrasReservadas.map((palavra) => {
      if (codeString.split(palavra).length > 1) {
        wordsFind.push(palavra);
      }
    });

    linesCode.map((line, index) => {
      wordsFind.map((word, indexWord) => {
        if (line.split(word).length > 1) {
          if (caracterByLineAux[word]?.lines?.length > 0) {
            var { lines } = caracterByLineAux[word];
            if (lines) {
              lines.push(index + 1);
              caracterByLineAux[word].lines = lines;
            }
          } else {
            caracterByLineAux[word] = {
              lines: [index + 1],
              token: palavrasCorrespondentes[indexWord],
              word,
            };
          }
        }
      });
    });

    var resposta = [];
    for (var [key, value] of Object.entries(caracterByLineAux))
      resposta.push(value);

    return resposta;
  };

  return {
    core,
    Render,
    readFile,
    indentificationTokens,
  };
}
