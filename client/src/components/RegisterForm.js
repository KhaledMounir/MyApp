import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  width: 400px;
  min-height: 150px;
  background-color: #222;
  z-index: 40000;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  box-shadow: 0px 0px 15px black;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;
const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  color: #ffd700;
`;
const Logo = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(1px 1px 1px #dd0);
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
`;
const InputTitle = styled.i`
  position: absolute;
  padding: 15px 10px;
  color: #aaa;
  transition: 0.5s;
  pointer-events: none;
`;

const Input = styled.input`
  position: relative;
  width: 95%;
  background-color: #333;
  border: none;
  outline: none;
  padding: 25px 10px 7.5px;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  font-size: 1em;
  transition: 0.5s;

  :hover ~ ${InputTitle}, :valid ~ ${InputTitle} {
    color: #dd0;
    transform: translateY(-7.5px);
    font-size: 0.8em;
  }
`;

const LinksContainer = styled.div`
  width: 99%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 15px 0px;
`;
const Link = styled.h6`
  font-size: 18px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  cursor: pointer;
  margin-left: 10px;
`;

const Span = styled.i`
  color: white;
  font-size: 15px;
  font-weight: 500;
  pointer-events: none;
`;

const Button = styled.div`
  width: 100%;
  height: 40px;
  margin: 15px;
  line-height: 35px;
  text-align: center;
  background-color: #dd0;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 700;
  color: black;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 5px #dd0;
  }
`;

const LoginFom = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = { firstName, lastName, userName, email, password };

  const navigate = useNavigate();

  const handlClick = async () => {
    try {
      await axios
        .post("http://localhost:5000/api/user/register", user)
        .then((res) => console.log(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <HeaderContainer>
        <Title>Register</Title>
        <Logo src="https://i.postimg.cc/44wk99bW/logo.png" />
      </HeaderContainer>

      <InputContainer>
        <Input onChange={(e) => setFirstName(e.target.value)} required />
        <InputTitle>FirstName</InputTitle>
      </InputContainer>

      <InputContainer>
        <Input onChange={(e) => setLastName(e.target.value)} required />
        <InputTitle>LastName</InputTitle>
      </InputContainer>

      <InputContainer>
        <Input onChange={(e) => setUserName(e.target.value)} required />
        <InputTitle>UserName</InputTitle>
      </InputContainer>

      <InputContainer>
        <Input onChange={(e) => setEmail(e.target.value)} required />
        <InputTitle>Email</InputTitle>
      </InputContainer>

      <InputContainer>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <InputTitle>PassWord</InputTitle>
      </InputContainer>

      <LinksContainer>
        <Span color="white">Already has an account?</Span>
        <Link color="#dd0" weight="700" onClick={() => navigate("/")}>
          SignUp
        </Link>
      </LinksContainer>

      <Button onClick={() => handlClick()}>Register</Button>
    </Container>
  );
};

export default LoginFom;
