import { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../assets/Context";
import Footer from "./Footer/Footer";
import Headers from "./Headers";

export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("trackit"));
  let navigate = useNavigate();

  const { infoUser, setInfoUser } = useContext(UserContext);

  if (auth) {
    const then = auth.timestamp;
    const now = +new Date();

    if (now - then < 1000 * 60 * 10) {
      return (
        <Wrapper>
          <Headers profilePic={infoUser.image} />
          <ContainerContent>{children}</ContainerContent>
          <Footer></Footer>
        </Wrapper>
      );
    } else localStorage.clear("trackit");
  } else
    setTimeout(() => {
      navigate("/");
    }, 2000);
  return (
    <ErrorMessage>
      <h1>Você não tem acesso a esta página</h1>
      <h2>Faça seu login para continuar</h2>
      <h3>REDIRECIONANDO EM 3 SEGUNDOS</h3>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </ErrorMessage>
  );
}

const ContainerContent = styled.div`
  padding-top: 95px;
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  padding-top: 50px;
`;

const Wrapper = styled.section`
  height: 100vmax;
  background-color: #f2f2f2;
`;
