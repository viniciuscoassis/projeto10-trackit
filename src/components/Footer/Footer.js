import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  const percentage = 80;
  return (
    <Wrapper>
      <Container>
        <Link to="/habitos">
          <div>Hábitos</div>
        </Link>
        <Link to="/hoje">
          <Hoje>
            <h3>Hoje</h3>
          </Hoje>
        </Link>
        <Link to="/historico">
          <div>Histórico </div>
        </Link>
      </Container>
    </Wrapper>
  );
}
const Blabla = styled.div`
  width: 200px;
  height: 200px;
`;

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
  background-color: #52b6ff;
  border-radius: 50%;
  h3 {
    position: absolute;
    bottom: 40%;
    left: 28%;
    color: white;
  }
`;
