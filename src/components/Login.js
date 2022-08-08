import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import eye from "../assets/img/eye.png";
import noeye from "../assets/img/noeye.png";
import { postLogin, postRegistration } from "../services/trackit";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../assets/Context";

export default function LoginPage({ type }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [form, setForm] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const { setInfoUser } = useContext(UserContext);

  let navigate = useNavigate();

  function handleSignUp() {
    alert("Cadastro feito com sucesso");
    setForm({ email: form.email, password: form.password });
    setIsDisabled(false);
    navigate("/");
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitFormLogin(e) {
    e.preventDefault();
    let promisse;
    promisse = postLogin(form);
    setIsDisabled(true);
    promisse.then((res) => {
      setInfoUser(res.data);
      setIsDisabled(false);
      localStorage.setItem(
        "trackit",
        JSON.stringify({ token: res.data.token, timestamp: +new Date() })
      );
      navigate("/hoje", {
        state: { dados: res.data },
      });
    });
    // .catch((res) => {
    //   setIsDisabled(false);
    //   alert(res.response.data.message);
    // });
  }

  function submitForm(e) {
    e.preventDefault();

    let promisse;
    promisse = postRegistration(form);
    setIsDisabled(true);
    promisse
      .then((res) => handleSignUp(res))
      .catch(() => {
        setIsDisabled(false);

        alert("seu cadastro falhou, tente novamente");
      });
  }

  return (
    <Wrapper>
      <Logo>
        <img src={logo} />
      </Logo>

      <form onSubmit={type == "login" ? submitFormLogin : submitForm}>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleForm}
          disabled={isDisabled}
        ></input>
        <input
          type={passwordShown ? "text" : "password"}
          placeholder="senha"
          name="password"
          onChange={handleForm}
          disabled={isDisabled}
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
              onChange={handleForm}
              disabled={isDisabled}
            ></input>
            <input
              type="text"
              placeholder="foto"
              name="image"
              onChange={handleForm}
              disabled={isDisabled}
            ></input>
          </>
        ) : (
          ""
        )}
        <button>
          {type == "login" ? (
            isDisabled ? (
              <ThreeDots color="#ffffff" height={80} width={80} />
            ) : (
              "Entrar"
            )
          ) : isDisabled ? (
            <ThreeDots color="#ffffff" height={80} width={80} />
          ) : (
            "Cadastrar"
          )}
        </button>
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
    font-family: "Lexend Deca", sans-serif;

    font-size: 16px;
  }
  form input::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  form button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    color: white;
    background-color: #52b6ff;
    font-family: "Lexend Deca", sans-serif;
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
