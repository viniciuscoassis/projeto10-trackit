import styled from "styled-components";

export default function HabitsPage() {
  return (
    <>
      <Title>
        <h1>Meus Hábitos</h1>
        <div>+</div>
      </Title>
      <Container>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Container>
    </>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  align-items: center;
  margin-bottom: 35px;
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
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  line-height: 20px;
  color: #666666;
`;
