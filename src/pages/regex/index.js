import React from 'react';

import { Container } from './styles';

export default function regex() {
  return (
    <Container>
      <h1>Hegex</h1>

      <div>
        <input type="text" name="serach" id=""/>
        <table>
          <thead>
            <tr>
              <td>Nome</td>
              <tg>Grupo</tg>
              <td>Classificação</td>
              <td>Nomes Alternativos</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Samuel</td>
              <td>Samuel</td>
              <td>Samuel</td>
              <td>Samuel</td>
            </tr>

          </tbody>
        </table>
      </div>

    </Container>
  );
}
