import styled from "styled-components";

export default function HistoryPage() {
  return (
    <Wrapper>
      <h1>Histórico</h1>
      <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 700px;
  h1 {
    display: flex;
    align-items: flex-start;
    margin-left: 20px;
    font-size: 21px;
    color: #126ba5;
  }
  p {
    margin-top: 20px;
    width: 90%;
    color: #666666;
    margin: 20px auto;
  }
`;
