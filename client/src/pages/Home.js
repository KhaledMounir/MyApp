import styled, { keyframes } from "styled-components";
import ContactUs from "../components/ContactUs";
import NavBar from "../components/NavBar";
import Products from "../components/Products";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-image: url("https://www.pixel4k.com/wp-content/uploads/2020/02/joker-smoker-art_1580587886.jpg");
  background-size: cover;
`;

const MidContainer = styled.div`
  width: 35%;

  margin: 200px 70px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 100px;
  color: #ffbb00;
`;
const Desc = styled.p`
  color: #fff;
  margin: 40px 0px;
  font-size: 20px;
  letter-spacing: 3px;
`;

const animate = keyframes`
 0%{
  transform: translateY(0)
 }
 50%{
  transform: translateY(-5px)
 }
 100%{
  transform: translateY(0)
 }
`;
const Button = styled.button`
  width: 150px;
  background-color: #ffbb00;
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.6s;
  animation: ${animate} 3s linear infinite;
  :hover {
    box-shadow: 0px 0px 5px #dd0;
  }
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <NavBar />
        <MidContainer>
          <Title>Light WebSite</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            corporis. Iure deleniti quae suscipit ipsum reprehenderit explicabo
            doloremque facere nihil deserunt laboriosam, natus exercitationem.
            Assumenda laudantium odit maxime. Cum, consequuntur!
          </Desc>
          <Button>SHOW NOW</Button>
        </MidContainer>
      </Wrapper>
      <Products />
      <ContactUs />
    </Container>
  );
};

export default Home;
