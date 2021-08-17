// import ReactDOM from "react-dom";
// import axios from 'axios';
import React, { useState } from "react";
import styled from "styled-components";

const useInput = (initVal) => {
  const [val, setVal] = useState(initVal);
  const onChange = (e) => {
    console.log(e.target);
  }; // 값이 변경될 때 마다 event의 target 출력
  // target == <input value="surimi"></input>

  return { val, onChange };
};

const Button = styled.button`
  background: ${(p) => (p.primary ? "white" : "grey")};
  font-weight: ${(p) => {
    console.log(p.b);
    return p.b * 10;
  }};
`;

const App = () => {
  const myName = useInput("surimi");

  const [item, setItem] = useState(1);
  // useState는 Array를 리턴
  //item과 setItem의 이름은 변경 o

  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button primary b={item} onClick={incrementItem}>
        {item}
      </Button>
      <input {...myName} />
    </div>
  );
};

// {...myName} spread operator(스프레드 연산자)
// 'value={myName.val} onChange={myName.onChange}'와 같음

// spread operator(스프레드 연산자)란?
// https://www.techiediaries.com/react-spread-operator-props-setstate/

// > input의 값을 변경하려 하면
/*
Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
이런 에러가 뜬다
*/

export default App;
// ReactDOM.render(<App />, rootElement);
