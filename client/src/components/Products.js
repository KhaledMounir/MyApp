import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { useState } from "react";

const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #000;
  height: 100vh;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  try {
    axios
      .get("http://localhost:5000/api/products/")
      .then((res) => setProducts(res.data));
  } catch (err) {
    console.log(err);
  }

  // console.log(products);
  return (
    <Container>
      {products.map((product) => (
        <Product
          key={product._id}
          img={product.img}
          title={product.title}
          desc={product.desc}
          price={product.price}
        />
      ))}
    </Container>
  );
};

export default Products;
