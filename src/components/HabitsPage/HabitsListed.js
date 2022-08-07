import styled from "styled-components";
import Checkbox from "./Checkbox";
import bin from "../../assets/img/bin.png";
import { deleteHabit } from "../../services/trackit";
import { useEffect } from "react";

export default function HabitsListed({ habit }) {
  const defaultWeek = [
    { id: 0, weekday: "D", selected: false },
    { id: 1, weekday: "S", selected: false },
    { id: 2, weekday: "T", selected: false },
    { id: 3, weekday: "Q", selected: false },
    { id: 4, weekday: "Q", selected: false },
    { id: 5, weekday: "S", selected: false },
    { id: 6, weekday: "S", selected: false },
  ];

  let thisWeek = defaultWeek.map((value) => {
    for (let i = 0; i < habit.days.length; i++) {
      if (habit.days[i] == value.id) return { ...value, selected: true };
    }
    return { ...value };
  });

  return (
    <Wrapper>
      <div>{habit.name}</div>
      <Checkboxes>
        {thisWeek.map((value) => (
          <Checkbox
            onClick={() => console.log("bloqueado")}
            key={value.id}
            isSelected={value.selected}
          >
            {value.weekday}
          </Checkbox>
        ))}
      </Checkboxes>
      <img
        onClick={() => {
          {
            let a = window.confirm("Quer mesmo deletar este hábito?")
              ? deleteHabit(habit.id)
                  .then(() => alert("Hábito excluido com sucesso"))
                  .catch((res) => console.log(res))
              : "";
          }
        }}
        src={bin}
      />
    </Wrapper>
  );
}

const Checkboxes = styled.ul`
  display: flex;
  margin-top: 5px;
  height: 100%;
`;

const Wrapper = styled.div`
  height: 91px;
  background-color: white;
  width: 100%;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 10px;
  position: relative;
  img {
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;
