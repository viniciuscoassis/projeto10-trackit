import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles";
import HabitsPage from "./HabitsPage";
import LoginPage from "./Login";
import PrivatePage from "./PrivatePage";
import UserContext from "../assets/Context";
import { useState } from "react";
import TodaysHabit from "./TodaysHabit";
import HabitsHistory from "./HabitsHistory";

export default function App() {
  const [infoUser, setInfoUser] = useState({});

  return (
    <>
      <UserContext.Provider value={{ infoUser, setInfoUser }}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage type="login" />} />
            <Route path="/cadastro" element={<LoginPage type="sign-up" />} />
            <Route
              path="/hoje"
              element={
                <PrivatePage>
                  {" "}
                  <TodaysHabit />{" "}
                </PrivatePage>
              }
            />
            <Route
              path="/habitos"
              element={
                <PrivatePage>
                  {" "}
                  <HabitsPage />{" "}
                </PrivatePage>
              }
            />
            <Route
              path="/historico"
              element={
                <PrivatePage>
                  {" "}
                  <HabitsHistory />{" "}
                </PrivatePage>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
