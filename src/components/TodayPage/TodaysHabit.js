import dayjs from "dayjs";

import styled from "styled-components";
import { getTodaysHabit } from "../../services/trackit";
import { useContext, useEffect, useState } from "react";
import HabitCard from "./HabitCard";
import UserContext from "../../assets/Context";

export default function TodaysHabit() {
  const [todaysHabit, setTodaysHabit] = useState([]);
  const { porcentagem, setPorcentagem } = useContext(UserContext);

  var updateLocale = require("dayjs/plugin/updateLocale");
  dayjs.extend(updateLocale);
  dayjs.updateLocale("en", {
    weekdaysShort: [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sabado",
      "Domingo",
    ],
  });

  useEffect(() => {
    let a = todaysHabit.filter((value) => value.done);
    setPorcentagem({ totalQestion: todaysHabit.length, totalDone: a.length });
  }, [todaysHabit]);

  useEffect(() => {
    getTodaysHabit().then((res) => setTodaysHabit(res.data));
  }, [HabitCard]);

  let rightPercentage =
    (porcentagem.totalDone / porcentagem.totalQestion) * 100;

  let today = dayjs().format("DD");
  let weekday = dayjs().format("ddd");
  let month = dayjs().format("MM");

  return (
    <Wrapper>
      <Title rightPercentage={rightPercentage}>
        {" "}
        <h1>{`${weekday}, ${today}/${month}`} </h1>
        <h2>
          {" "}
          {rightPercentage
            ? `${rightPercentage.toFixed(0)}% dos hábitos concluídos`
            : "Nenhum hábito concluído ainda"}
        </h2>
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
    color: ${(props) => (props.rightPercentage > 0 ? "#8FC549" : "#bababa")};
    margin-top: 6px;
  }
`;

const Wrapper = styled.div`
  padding: 0 20px;
`;
