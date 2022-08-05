import styled from "styled-components";
import Checkbox from "./Checkbox";
import bin from "../../assets/img/bin.png";
import { deleteHabit } from "../../services/trackit";

export default function HabitsListed({ habit }) {
  const week = [
    { id: 0, weekday: "D", selected: false },
    { id: 1, weekday: "S", selected: false },
    { id: 2, weekday: "T", selected: false },
    { id: 3, weekday: "Q", selected: false },
    { id: 4, weekday: "Q", selected: false },
    { id: 5, weekday: "S", selected: false },
    { id: 6, weekday: "S", selected: false },
  ];

  function clickDeleteHabit() {
    let promisse;
    {
      window.confirm("Quer mesmo deletar este hábito?")
        ? (promisse = deleteHabit(habit.id))
        : console.log("negou");
    }
    promisse
      .then((res) => alert("Hábito excluido com sucesso"))
      .catch((res) => console.log(res));
  }

  return (
    <Wrapper>
      <div>{habit.name}</div>
      <Checkboxes>
        {week.map((weekday) => (
          <Checkbox key={weekday.id}> </Checkbox>
        ))}
      </Checkboxes>
      <img onClick={() => clickDeleteHabit()} src={bin} />
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
