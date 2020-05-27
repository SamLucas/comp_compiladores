import React, { useState, useEffect } from "react";
import "./teste.scss";

import Ceasy from "./CeasyRender";
import cseasyFile from "./styles_example.ceasy";

export default function CeasyContent() {
  const [coreCeasy, setCoreCeasy] = useState("");
  const [codeCeasy, setCodeCeasy] = useState("");
  const [tokens, setTokens] = useState([]);
  const [errorInformation, setErrorInformation] = useState([]);
  const [codeCompilateCeasy, setCodeCompilateCeasy] = useState("");

  const [indexTab, setIndexTable] = useState(0);

  useEffect(() => {
    const loadScript = async () => {
      const cseasy = Ceasy();
      const stringFile = await cseasy.readFile(cseasyFile);
      setCoreCeasy(cseasy);
      setCodeCeasy(stringFile);
    };
    loadScript();
  }, []);

  const debounceEvent = (fn, params, wait = 1000, time) => {
    clearTimeout(
      time,
      (time = setTimeout(() => {
        fn(params);
      }, wait))
    );
  };

  useEffect(() => {
    const loadCore = async (codeCeasy) => {
      const cseasy = Ceasy();
      const response = await cseasy.core(codeCeasy);
      const indetificationsTokens = await cseasy.indentificationTokens(
        codeCeasy
      );

      const errorsInformations = cseasy.getErrors(codeCeasy);

      setTokens(indetificationsTokens);
      setCodeCompilateCeasy(response);
      setErrorInformation(errorsInformations);
      errorsInformations.length > 0 && setIndexTable(2);
    };

    debounceEvent(loadCore, codeCeasy, 2000);
  }, [codeCeasy, coreCeasy]);

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1>Ceasy</h1>
          <p>Bem vindo a nova linguagem de programação ceasy!!</p>
        </div>
      </div>
      <div className="section">
        <div className="code">
          <ul className="Tab">
            <li className={"active"}>Ceasy</li>
          </ul>
          <textarea
            cols="30"
            rows="10"
            value={codeCeasy}
            spellCheck="false"
            onChange={(e) => {
              setCodeCeasy(e.target.value);
              debounceEvent(() => {
                console.log("debauce ativo");
              }, 500);
            }}
          />
        </div>
        <div className="code_result">
          <ul className="Tab">
            <li
              className={indexTab === 0 ? "active" : ""}
              onClick={() => setIndexTable(0)}
            >
              CSS
            </li>
            <li
              className={indexTab === 1 ? "active" : ""}
              onClick={() => setIndexTable(1)}
            >
              Table
            </li>
            <li
              className={indexTab === 2 ? "active" : ""}
              onClick={() => setIndexTable(2)}
            >
              Debug{" "}
              {errorInformation.length > 0 && (
                <span className="badge">{errorInformation.length}</span>
              )}
            </li>
          </ul>

          {indexTab === 0 ? (
            <textarea
              cols="30"
              rows="10"
              className="result"
              value={codeCompilateCeasy}
              required
              readOnly
              spellCheck="false"
            />
          ) : indexTab === 1 ? (
            <table>
              <thead className="headtable">
                <tr>
                  <td>Código</td>
                  <td>Token</td>
                  <td>Linhas</td>
                </tr>
              </thead>
              <tbody>
                {tokens.map((ele) => (
                  <tr key={JSON.stringify(ele)}>
                    <td>{ele.word}</td>
                    <td>{ele.token}</td>
                    <td>{ele.lines?.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table>
              <thead className="headtable">
                <tr>
                  <td>Linha</td>
                  <td>Token</td>
                  <td>Informação</td>
                </tr>
              </thead>
              <tbody>
                {errorInformation.map((ele) => (
                  <tr key={JSON.stringify(ele)}>
                    <td>{ele.line}</td>
                    <td>{ele.errorToken}</td>
                    <td>
                      {ele.errorToken.indexOf("]") >= 0
                        ? "Erro ao fechar."
                        : ele.errorToken.indexOf("[") >= 0
                        ? "Erro ao abrir."
                        : "Erro inesperado."}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
