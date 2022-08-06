import { useEffect, useState } from "react";

import styled from "styled-components";
import { getHabits, postCreateHabits } from "../../services/trackit";
import HabitsListed from "./HabitsListed";
import HabitForm from "./HabitForm";

export default function HabitsPage() {
  const [createHabits, setCreateHabits] = useState(false);
  const [days, setDays] = useState([]);
  const [nameCreatedHabit, setNameCreatedHabit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shownHabits, setShownHabits] = useState(null);

  useEffect(() => console.log(days), []);

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
    setDays([]);
    setNameCreatedHabit("");
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

      <HabitForm
        none={createHabits ? "flex" : "none"}
        isLoading={isLoading}
        sendHabit={sendHabit}
        createHabits={createHabits}
        setCreateHabits={createHabits}
        setNameCreatedHabit={setNameCreatedHabit}
        nameCreatedHabit={nameCreatedHabit}
        setDays={setDays}
        days={days}
      />

      <Container>
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
