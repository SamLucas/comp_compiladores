import React, {useState} from 'react';

import { Container } from './styles';

export default function App() {
  
  const [result, setResult] = useState();
  const [expression, setExpression] = useState('');
  
  const point = c => {
    let pc = 0;
    
    if(c === '*' || c === '/')pc = 2;
    else if(c === '+' || c === '-') pc = 1;
    else pc = 4;
    
    return pc;
  }
  
  const handleSubmite = e => {
    
    e.preventDefault();
    
    var result = '';
    var pilha = [];
    
    for(let k=0;k<expression.length;k++){
      if(!isNaN(expression[k])) {
        result += expression[k];
      } else {

        if(pilha.length() !== 0) pilha.push(expression[k]);
        else if(point(pilha.top()) >=  point(expression[k])){
          
          let newCaracter = pilha.top();
          pilha.pop();

          result += newCaracter;
          pilha.push(expression[k]);
        } else result += expression[k];
      }
    }

    let newCaracter = pilha.top();
    pilha.pop();
    result += newCaracter;
    setResult(result);

  }
  
  return (
    <Container>
    <form onSubmit={handleSubmite}>
    <input 
    type="text" 
    value={expression} 
    onChange={ e => setExpression(e.target.value)} 
    placeholder="Digite " />
    <input type="submit" value="Enviar" />
    </form>
    
    <p>{result}</p>
    
    </Container>
    );
  }
  