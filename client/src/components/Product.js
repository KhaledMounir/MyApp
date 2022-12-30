import styled from "styled-components";

const Container = styled.div`
  position: relative;
  flex: 1;
  margin: 0px 20px 20px 0px;
  width: 400px;
  height: 450px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -3px 5px lightgray;

  cursor: pointer;
`;

const ProductContainer = styled.div`
  width: 400px;
  border-radius: 50px;
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  background-size: cover;
  transform: translateY(-25px);
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(55, 55, 55, 0.4);
  border-radius: 10px;
`;

const Title = styled.h2`
  width: 100%;
  padding-top: 10px;
  text-align: center;
  font-size: 35px;
  color: #ffd100;
`;
const Desc = styled.p`
  position: absolute;
  bottom: 50px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
  color: white;
`;
const Price = styled.h2`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 10px;

  font-size: 30px;
  color: #ffd100;
`;

const Product = (props) => {
  return (
    <Container>
      <ProductContainer>
        <ImageContainer>
          <Image src={props.img} />
        </ImageContainer>

        <InfoContainer>
          <Title>{props.title}</Title>
          <Desc>{props.desc}</Desc>
          <Price> {props.price} €</Price>
        </InfoContainer>
      </ProductContainer>
    </Container>
  );
};

export default Product;
