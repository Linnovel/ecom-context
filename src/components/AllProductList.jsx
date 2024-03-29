import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Card from "./Card";

const AllProductList = () => {
  const { products } = useContext(DataContext);
  // console.log(products);
  return (
    <>
      <h1>list of products</h1>
      <hr />
      {products.map((product) => (
        <Card
          title={product.title}
          key={product.id}
          price={product.price}
          image={product.images[0]}
          description={product.description}
        />
      ))}
    </>
  );
};

export default AllProductList;
