import styled from "styled-components";
import { Checkbox } from "react-ionicons";
import { useContext, useState } from "react";
import { postHabitDone, postHabitUndone } from "../../services/trackit";
import UserContext from "../../assets/Context";

export default function HabitCard({ value }) {
  const [isDone, setIsDone] = useState(value.done);
  const [currentSequence, setCurrentSequence] = useState(value.currentSequence);
  const [record, setRecord] = useState(value.highestSequence);

  const { porcentagem, setPorcentagem } = useContext(UserContext);

  function toggleDone(id) {
    setIsDone(!isDone);

    isDone ? postHabitUndone(id) : postHabitDone(id);
    isDone
      ? setCurrentSequence(currentSequence - 1)
      : setCurrentSequence(currentSequence + 1);
    isDone ? setRecord(record - 1) : setRecord(record + 1);
    isDone
      ? setPorcentagem({ ...porcentagem, totalDone: porcentagem.totalDone - 1 })
      : setPorcentagem({
          ...porcentagem,
          totalDone: porcentagem.totalDone + 1,
        });
  }

  return (
    <Wrapper>
      {" "}
      <div>
        <h1>{value.name}</h1>
        <h2>
          {`Sequência atual:`}{" "}
          <Seq isDone={isDone}>{`${currentSequence} dias`}</Seq>
        </h2>
        <h2>
          {`Seu recorde: `}
          <Rec
            record={record == currentSequence && record != 0 ? true : false}
          >{`${record} dias`}</Rec>
        </h2>
      </div>
      <div>
        <Checkbox
          color={isDone ? "#8FC549" : "#ebebeb"}
          title="uncheck"
          height="100px"
          width="100px"
          onClick={() => toggleDone(value.id)}
        />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 13px;
  }
  div h1 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 10px;
  }
  div h2 {
    font-size: 13px;
    margin-bottom: 5px;
  }
`;

const Seq = styled.span`
  color: ${(props) => (props.isDone ? "#8FC549" : "#666666")};
`;
const Rec = styled.span`
  color: ${(props) => (props.record ? "#8FC549" : "#666666")};
`;
