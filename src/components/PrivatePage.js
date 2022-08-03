import { ThreeDots } from "react-loader-spinner";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Headers from "./Headers";

export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("trackit"));
  let navigate = useNavigate();
  const location = useLocation();

  if (auth) {
    const then = auth.timestamp;
    const now = +new Date();

    if (now - then < 1000 * 60 * 10) {
      return (
        <Wrapper>
          <Headers profilePic={location.state.dados.image} />
        </Wrapper>
      );
    } else localStorage.clear("trackit");
  } else
    setTimeout(() => {
      navigate("/");
    }, 3000);
  return (
    <ErrorMessage>
      <h1>Você não tem acesso a esta página</h1>
      <h2>Faça seu login para continuar</h2>
      <h3>REDIRECIONANDO EM 3 SEGUNDOS</h3>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </ErrorMessage>
  );
}

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  margin-top: 50px;
`;

const Wrapper = styled.section`
  background-color: red;
`;
