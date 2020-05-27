import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";

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

  const indentificationTokens = (codeString) => {
    var palavrasReservadas = ["=", "[", "(", ",", "),", "]"];
    var palavrasCorrespondentes = ["space", "{", ":", "space", ";", "}"];
    var wordsFind = [];

    let caracterByLineAux = {};

    var linesCode = codeString.split("\n");

    palavrasReservadas.forEach((palavra) => {
      if (codeString.split(palavra).length > 1) {
        wordsFind.push(palavra);
      }
    });

    linesCode.forEach((line, index) => {
      wordsFind.forEach((word, indexWord) => {
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
    for (var [, value] of Object.entries(caracterByLineAux))
      resposta.push(value);

    return resposta;
  };

  const indentificationsErrors = (codeString) => {
    var arrayWord = _.words(codeString, /[^ \n]+/g);

    let arrayFColchete = [];
    let arrayAColchete = [];

    arrayWord.forEach((element, index) => {
      element.trim()[element.length - 1] === "]" && arrayFColchete.push(index);
    });

    arrayWord.forEach((element, index) => {
      element.trim()[0] === "[" && arrayAColchete.push(index);
    });

    var captureErrors = [];
    arrayAColchete.forEach((element) => {
      if (arrayWord[element].trim() !== "[") {
        captureErrors.push({
          index: element,
          word: arrayWord[element].trim("\n"),
        });
      }
      arrayWord[element - 1] !== "=" &&
        captureErrors.push({
          index: element,
          word: arrayWord[element - 1],
        });
    });

    arrayFColchete.forEach((element) => {
      if (arrayWord[element].trim() !== "]") {
        captureErrors.push({
          index: element,
          word: arrayWord[element].trim("\n"),
        });
      }

      const ultimo_elemento =
        arrayWord[element - 1][arrayWord[element - 1].length - 1];

      if (ultimo_elemento !== "," && ultimo_elemento !== ")") {
        captureErrors.push({
          index: element,
          word: ultimo_elemento,
        });
      }
    });

    if (arrayAColchete.length !== arrayFColchete.length) {
      captureErrors.push({
        index:
          arrayAColchete.length > arrayFColchete.length
            ? arrayAColchete.length[arrayAColchete.length - 1]
            : arrayFColchete.length[arrayFColchete.length - 1],
        word: arrayAColchete.length > arrayFColchete.length ? "[" : "]",
      });
    }

    return captureErrors;
  };

  const getErrors = (codeString) => {
    const infoErrors = indentificationsErrors(codeString);
    const lines = codeString.split("\n");

    const ErrorsInformation = [];
    lines.forEach((element, index) => {
      infoErrors.forEach((elementError) => {
        if (element.indexOf(elementError.word) >= 0) {
          ErrorsInformation.push({
            line: index + 1,
            errorToken: elementError.word,
          });
        }
      });
    });

    return ErrorsInformation;
  };

  const Render = ({ ceasy, children }) => {
    const [style, setStyle] = useState("");

    useEffect(() => Compilate(ceasy), [ceasy]);

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

  return {
    core,
    Render,
    readFile,
    getErrors,
    indentificationTokens,
  };
}
