import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

import styled from "styled-components";
import { getHabits, postCreateHabits } from "../../services/trackit";
import Checkbox from "./Checkbox";
import HabitsListed from "./HabitsListed";

export default function HabitsPage() {
  const [createHabits, setCreateHabits] = useState(false);
  const [days, setDays] = useState([]);
  const [nameCreatedHabit, setNameCreatedHabit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shownHabits, setShownHabits] = useState(null);

  const week = [
    { id: 0, weekday: "D", selected: false },
    { id: 1, weekday: "S", selected: false },
    { id: 2, weekday: "T", selected: false },
    { id: 3, weekday: "Q", selected: false },
    { id: 4, weekday: "Q", selected: false },
    { id: 5, weekday: "S", selected: false },
    { id: 6, weekday: "S", selected: false },
  ];

  useEffect(() => {
    getHabits().then((value) => setShownHabits(value.data));
  }, [shownHabits]);

  function sendHabit(e) {
    e.preventDefault();
    let body = { name: nameCreatedHabit, days };

    let promisse = postCreateHabits(body);
    setIsLoading(true);

    promisse
      .then((value) => {
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));

    body = null;
    setTimeout(() => {
      setCreateHabits(false);
    }, 1000);
  }

  return (
    <Wrapper>
      <Title>
        <h1>Meus Hábitos</h1>
        <div onClick={() => setCreateHabits(!createHabits)}>+</div>
      </Title>
      <Container>
        {createHabits ? (
          <HabitForm onSubmit={sendHabit}>
            <ContainerContent>
              <input
                disabled={isLoading}
                type="text"
                name="name"
                placeholder="nome do hábito"
                onChange={(e) => setNameCreatedHabit(e.target.value)}
                value={nameCreatedHabit}
              ></input>
              <Checkboxes>
                {week.map((weekday) => (
                  <Checkbox key={weekday.id}> </Checkbox>
                ))}
              </Checkboxes>

              <CancelSave>
                <div onClick={() => setCreateHabits(!createHabits)}>
                  {" "}
                  Cancelar
                </div>
                <button role="button" type="submit">
                  {isLoading ? (
                    <ThreeDots color="#ffffff" height={80} width={60} />
                  ) : (
                    "Salvar"
                  )}
                </button>
              </CancelSave>
            </ContainerContent>
          </HabitForm>
        ) : (
          ""
        )}
        {shownHabits ? (
          shownHabits.map((value) => (
            <HabitsListed key={value.id} habit={value} />
          ))
        ) : (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Checkboxes = styled.ul`
  display: flex;
  margin-top: 5px;
`;

const CancelSave = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  div {
    cursor: pointer;
    margin-left: 10px;
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
  button {
    cursor: pointer;
    margin-left: 10px;
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #52b6ff;
    color: white;
    font-family: "Lexend Deca", sans-serif;
    font-size: 16px;
    border: none;
  }
`;

const ContainerContent = styled.div`
  padding: 15px;
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lexend Deca", sans-serif;
    width: 100%;
    font-size: 18px;
    padding: 5px 5px;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
  }
  input::placeholder {
    color: #d4d4d4;
  }
`;

const HabitForm = styled.form`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    color: #126ba5;
    font-size: 23px;
  }
  div {
    background-color: #52b6ff;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    color: white;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  line-height: 20px;
  color: #666666;
`;
