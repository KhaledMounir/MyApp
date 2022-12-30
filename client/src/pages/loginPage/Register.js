import styled from "styled-components";
import Background from "../../components/Background";
import RegisterFrom from "../../components/RegisterForm";

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Register = () => {
  return (
    <div>
      <Container>
        <Background />
        <RegisterFrom />
      </Container>
    </div>
  );
};

export default Register;
