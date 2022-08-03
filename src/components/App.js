import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles";
import LoginPage from "./Login";
import PrivatePage from "./PrivatePage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage type="login" />} />
          <Route path="/cadastro" element={<LoginPage type="sign-up" />} />
          <Route path="/hoje" element={<PrivatePage>hello</PrivatePage>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
