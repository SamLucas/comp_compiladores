import React, { useState, useEffect } from "react";
import "./teste.scss";

import Ceasy from "./CeasyRender";
import cseasyFile from "./styles_example.ceasy";

import { debounceEvent } from "./scripts";

export default function CeasyContent() {
  const [coreCeasy, setCoreCeasy] = useState("");
  const [codeCeasy, setCodeCeasy] = useState("");
  const [tokens, setTokens] = useState([]);
  const [codeCompilateCeasy, setCodeCompilateCeasy] = useState("");

  const [indexTab, setIndexTable] = useState(0);

  useEffect(() => {
    const loadScript = async () => {
      const cseasy = Ceasy();
      const stringFile = await cseasy.readFile(cseasyFile);
      setCoreCeasy(cseasy);
      setCodeCeasy(stringFile);
      // console.log(stringFile);
    };
    loadScript();
  }, []);

  useEffect(() => {
    const loadCore = async (codeCeasy) => {
      const cseasy = Ceasy();
      const response = await cseasy.core(codeCeasy);
      const indetificationsTokens = await cseasy.indentificationTokens(
        codeCeasy
      );

      setTokens(indetificationsTokens);
      setCodeCompilateCeasy(response);
    };

    loadCore(codeCeasy);
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
            spellcheck="false"
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
          </ul>

          {indexTab === 0 ? (
            <textarea
              cols="30"
              rows="10"
              className="result"
              value={codeCompilateCeasy}
              required
              readonly
              spellcheck="false"
            />
          ) : (
            <table>
              <thead className="headtable">
                <tr>
                  <td>Código</td>
                  <td>Token</td>
                  <td>Linhas</td>
                </tr>
              </thead>
              <tbody>
                {console.log(tokens)}
                {tokens.map((ele) => (
                  <tr>
                    <td>{ele.word}</td>
                    <td>{ele.token}</td>
                    <td>{ele.lines?.join(", ")}</td>
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
