import dayjs from "dayjs";
import styled from "styled-components";

import { getTodaysHabit } from "../../services/trackit";
import { useContext, useEffect, useState } from "react";
import HabitCard from "./HabitCard";
import UserContext from "../../assets/Context";

export default function TodaysHabit() {
  const [todaysHabit, setTodaysHabit] = useState([]);
  const { porcentagem, setPorcentagem } = useContext(UserContext);

  useEffect(() => {
    let a = todaysHabit.filter((value) => value.done);
    setPorcentagem({ totalQestion: todaysHabit.length, totalDone: a.length });
  }, [todaysHabit]);

  console.log(porcentagem);

  useEffect(() => {
    getTodaysHabit().then((res) => setTodaysHabit(res.data));
  }, [HabitCard]);

  return (
    <Wrapper>
      <Title>
        {" "}
        <h1>Segunda, 17/05 </h1>
        <h2>Nenhum hábito concluído ainda</h2>
      </Title>
      {todaysHabit
        ? todaysHabit.map((value) => <HabitCard key={value.id} value={value} />)
        : ""}
    </Wrapper>
  );
}

const Title = styled.div`
  margin-bottom: 15px;
  h1 {
    font-size: 23px;
    color: #126ba5;
  }
  h2 {
    color: #bababa;
    margin-top: 6px;
  }
`;

const Wrapper = styled.div`
  padding: 0 20px;
`;
