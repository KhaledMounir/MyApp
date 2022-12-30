import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/UserSlice";

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  overflow: hidden;
`;

const logoAnimation = keyframes`
  0%{
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(0px 0px 2px red);
  }
  50%{
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(0px 0px 2px #ffd100);
  }
  100%{
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(0px 0px 2px red);
  }
`;

const Logo = styled.img`
  width: 100px;
  animation: ${logoAnimation} 5s linear infinite;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PagesContainer = styled.div`
  display: flex;
  margin-right: 100px;
`;
const Pages = styled.h3`
  margin: 15px;
  cursor: pointer;
  transition: 0.5s;
  color: #bbb;
  :hover {
    color: #bb0;
  }
`;

const LogOut = styled.button`
  height: 40px;
  border: 1px solid #bb0;
  border-radius: 10px;
  background: none;
  padding: 10px;
  transition: 0.7s;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #bb0;
    color: black;
  }
`;

const NavBar = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handlClik = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Container>
        <Logo src="https://i.postimg.cc/44wk99bW/logo.png" />
        <RightContainer>
          <PagesContainer>
            <Pages onClick={() => navigate("/home")}>Home</Pages>
            <Pages onClick={() => navigate("/about")}>About</Pages>
            <Pages onClick={() => navigate("/contactUs")}>Contact Us</Pages>
          </PagesContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 style={{ color: "white", margin: "10px" }}>{user.userName}</h2>
            <LogOut onClick={() => handlClik()}>LOGOUT</LogOut>
          </div>
        </RightContainer>
      </Container>
    </div>
  );
};

export default NavBar;
