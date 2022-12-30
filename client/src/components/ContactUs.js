import styled from "styled-components";
import Background from "./Background";

const Container = styled.div`
  width: 99.1vw;
  overflow: hidden;
  background-color: #000;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
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

const Message = styled.textarea`
  position: relative;
  width: 95%;
  height: 300px;
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
const ContactUs = () => {
  return (
    <Container>
      <Wrapper>
        <Background />
        <FormContainer>
          <HeaderContainer>
            <Title>CONTACT US</Title>
            <Logo src="https://i.postimg.cc/44wk99bW/logo.png" />
          </HeaderContainer>

          <InputContainer>
            <Input required />
            <InputTitle>Email</InputTitle>
          </InputContainer>

          <InputContainer>
            <Message required />
            <InputTitle>Message</InputTitle>
          </InputContainer>

          <Button>SEND</Button>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default ContactUs;
