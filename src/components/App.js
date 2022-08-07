import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles";
import HabitsPage from "./HabitsPage/HabitsPage";
import LoginPage from "./Login";
import PrivatePage from "./PrivatePage";
import UserContext from "../assets/Context";
import { useState } from "react";

import HistoryPage from "./HistoryPage";
import TodaysHabit from "./TodayPage/TodaysHabit";

export default function App() {
  const [infoUser, setInfoUser] = useState({});
  const [porcentagem, setPorcentagem] = useState({
    totalQestion: 0,
    totalDone: 0,
  });

  return (
    <>
      <UserContext.Provider
        value={{ infoUser, setInfoUser, porcentagem, setPorcentagem }}
      >
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
                  <HistoryPage />{" "}
                </PrivatePage>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
