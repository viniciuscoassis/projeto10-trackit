import styled from "styled-components";
import logo from "../assets/img/TrackIt.png";

export default function Headers({ profilePic }) {
  return (
    <HeadersS>
      {" "}
      <img src={logo} />
      <ProfileLogo src={profilePic} />
    </HeadersS>
  );
}
const ProfileLogo = styled.img`
  height: 51px;
  width: 51px;
  border-radius: 50%;
`;

const HeadersS = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;

  background-color: #126ba5;
`;
