import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import eye from "../assets/img/eye.png";
import noeye from "../assets/img/noeye.png";
import { postRegistration } from "../services/trackit";

export default function LoginPage({ type }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [form, setForm] = useState({});

  let navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    postRegistration(form)
      .then(() => navigate("/"))
      .catch((erro) => alert(erro.response.data.message));
  }

  return (
    <Wrapper>
      <Logo>
        <img src={logo} />
      </Logo>
      <form>
        <input type="email" placeholder="email"></input>
        <input
          type={passwordShown ? "text" : "password"}
          placeholder="senha"
          name="password"
        ></input>
        <img
          src={passwordShown ? noeye : eye}
          onClick={() => setPasswordShown(!passwordShown)}
        />

        {type != "login" ? (
          <>
            {" "}
            <input
              type="text"
              placeholder="nome"
              name="name"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder="foto"
              name="image"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            ></input>
          </>
        ) : (
          ""
        )}
        <button>Entrar</button>
      </form>

      {type != "login" ? (
        <Link to="/">
          <h3>Já tem uma conta? Faça login!</h3>
        </Link>
      ) : (
        <Link to="/cadastro">
          <h3>Não tem uma conta? Cadastre-se!</h3>
        </Link>
      )}
    </Wrapper>
  );
}
const Logo = styled.div`
  margin-top: 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 40px;
  align-items: center;
`;

const Wrapper = styled.div`
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    margin: 0 35px;
    position: relative;
  }
  form img {
    height: 20px;
    width: 20px;
    position: absolute;
    right: 10px;
    top: 65px;
    filter: opacity(0.3);
  }
  form input {
    height: 45px;
    margin-bottom: 6px;
    border-radius: 5px;
    padding-left: 6px;
    border: 2px solid rgba(0, 0, 0, 0.1);

    font-size: 16px;
  }
  form input::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  form button {
    height: 45px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    color: white;
    background-color: #52b6ff;
  }

  h3 {
    margin-top: 40px;
    font-size: 14px;
    color: #52b6ff;
    text-decoration: underline;
  }
  h3 {
    cursor: pointer;
  }
`;
