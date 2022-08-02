import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles";
import LoginPage from "./Login";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage type="login" />} />
          <Route path="/cadastro" element={<LoginPage type="sign-up" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
