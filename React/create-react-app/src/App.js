// import ReactDOM from "react-dom";
// import axios from 'axios';
import React, { useState } from "react";
import styled from "styled-components";
import { useInput } from "./useInput";
import { useTabs } from "./useTab"

const Button = styled.button`
  background: ${(p) => { return p.index === 0 ? "pink" : p.index === 1 ? "lightblue" : "lightYellow" }};
  margin-right : ${p => { if (p.index < 2) return "5px;" }}
`;

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
  ,
  {
    tab: "Section 3",
    content: "I'm the content of the Section 3"
  }
];

const App = () => {
  const inputCondition = value => value.length <= 10 && !value.includes("@");
  // input 입력 10자 이내, @를 포함하지 않음
  const myName = useInput("surimi", inputCondition);

  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      <h1>Hello React Hook</h1>

      <p>useInput</p>
      <input {...myName} />

      <p>useTabs</p>
      {content.map((section, index) => (
        <Button index={index} onClick={() => changeItem(index)}>{section.tab}</Button>
      ))}
      <p>{currentItem.content}</p>

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
