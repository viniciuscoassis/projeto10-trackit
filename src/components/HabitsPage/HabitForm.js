import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const defaultWeek = [
  { id: 0, weekday: "D", selected: false },
  { id: 1, weekday: "S", selected: false },
  { id: 2, weekday: "T", selected: false },
  { id: 3, weekday: "Q", selected: false },
  { id: 4, weekday: "Q", selected: false },
  { id: 5, weekday: "S", selected: false },
  { id: 6, weekday: "S", selected: false },
];

export default function HabitForm({
  isLoading,
  setCreateHabits,
  createHabits,
  sendHabit,
  setNameCreatedHabit,
  nameCreatedHabit,
  none,
  setDays,
  days,
}) {
  return (
    <Wrapper none={none} onSubmit={sendHabit}>
      <ContainerContent>
        <input
          disabled={isLoading}
          type="text"
          name="name"
          placeholder="nome do hábito"
          onChange={(e) => setNameCreatedHabit(e.target.value)}
          value={nameCreatedHabit}
          required
        ></input>
        <Checkboxes>
          {defaultWeek.map((value) => (
            <Checkbox
              index={value.id}
              setDays={setDays}
              days={days}
              weekday={value}
              key={value.id}
              isSelected={false}
              isLoading={isLoading}
            >
              {value.weekday}
            </Checkbox>
          ))}
        </Checkboxes>

        <CancelSave>
          <div onClick={() => setCreateHabits(!createHabits)}> Cancelar</div>
          <button role="button" type="submit">
            {isLoading ? (
              <ThreeDots color="#ffffff" height={80} width={60} />
            ) : (
              "Salvar"
            )}
          </button>
        </CancelSave>
      </ContainerContent>
    </Wrapper>
  );
}
const Checkboxes = styled.ul`
  display: flex;
  margin-top: 5px;
`;

const Wrapper = styled.form`
  width: 90%;
  margin: 0 auto;
  background-color: white;
  display: ${(props) => props.none};
  flex-direction: column;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
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
