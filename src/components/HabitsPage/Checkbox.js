import { useState } from "react";
import styled from "styled-components";

export default function Checkbox() {
  const [isClicked, setIsClicked] = useState(false);

  return <Wrapper></Wrapper>;
}

const Wrapper = styled.li`
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #d4d4d4;
  margin-right: 2px;
  background-color: ${(props) => (props.isClicked ? "#CFCFCF" : "#white")};
  color: ${(props) => (props.isClicked ? "white" : "#d4d4d4")};
`;
