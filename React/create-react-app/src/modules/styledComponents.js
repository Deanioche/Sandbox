import styled from "styled-components";

export const Button = styled.button`
  background: ${(p) => { return p.index === 0 ? "pink" : p.index === 1 ? "lightblue" : "lightYellow" }};
  margin-right : ${p => { if (p.index < 2) return "5px;" }}
`;

