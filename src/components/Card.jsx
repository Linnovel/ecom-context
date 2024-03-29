import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Card = () => {
  const { products } = useContext(DataContext);
  // console.log(products);
  return (
    <>
      <h1>list of products</h1>
      <hr />
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </>
  );
};

export default Card;
