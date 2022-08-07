import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../assets/Context";

export default function Footer() {
  const { porcentagem, setPorcentagem } = useContext(UserContext);

  let rightPercentage =
    (porcentagem.totalDone / porcentagem.totalQestion) * 100;

  return (
    <Wrapper>
      <Container>
        <Link to="/habitos">
          <div>Hábitos</div>
        </Link>

        <Link to="/hoje">
          <Hoje>
            <CircularProgressbar
              value={isNaN(rightPercentage) ? 0 : rightPercentage}
              text={`Hoje`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
            ;{" "}
          </Hoje>
        </Link>
        <Link to="/historico">
          <div>Histórico </div>
        </Link>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  color: #52b6ff;
  position: relative;
`;

const Hoje = styled.div`
  position: absolute;
  height: 91px;
  width: 91px;
  bottom: 15%;
  left: 34%;
`;
