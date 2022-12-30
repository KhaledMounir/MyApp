import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(#000, #ffd700, #000);
    animation: animate 5s linear infinite;
  }
  @keyframes animate {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const Span = styled.span`
  position: relative;
  display: block;
  width: calc(6.25vw - 2px);
  height: calc(6.25vw - 2px);
  background-color: #181818;
  z-index: 2;
  transition: 1.5s;

  @media (max-width: 900px) {
    width: calc(10vw - 2px);
    height: calc(10vw - 2px);
  }
  @media (max-width: 600px) {
    width: calc(20vw - 2px);
    height: calc(20vw - 2px);
  }
  :hover {
    background: #ffd700;
    transition: 0s;
  }
`;

const Background = () => {
  return (
    <div>
      <Container>
        {[...Array(700)].map((x, i) => (
          <Span key={i} />
        ))}
      </Container>
    </div>
  );
};

export default Background;
