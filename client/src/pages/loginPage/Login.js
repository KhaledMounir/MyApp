import styled from "styled-components";
import Background from "../../components/Background";
import LoginFom from "../../components/LoginFom";

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Login = () => {
  return (
    <div>
      <Container>
        <Background />
        <LoginFom />
      </Container>
    </div>
  );
};

export default Login;
