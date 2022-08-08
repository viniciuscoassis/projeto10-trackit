import { useEffect, useState } from "react";
import { ContractOutline } from "react-ionicons";
import styled from "styled-components";

export default function Checkbox({
  children,
  setDays,
  days,
  index,
  isSelected,
  isLoading,
  type,
}) {
  const [isClicked, setIsClicked] = useState(isSelected ? isSelected : false);

  return (
    <Wrapper
      isClicked={isClicked}
      onClick={
        isLoading
          ? () => console.log("Função desabilitada")
          : type == "listed"
          ? () => console.log("Função desabilitada")
          : () => {
              setIsClicked(!isClicked);
              setDays([...days, index]);
            }
      }
    >
      {children}
    </Wrapper>
  );
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
