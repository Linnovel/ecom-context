// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const url = "https://dummyjson.com/products";

// const FetchData = () => {
//   const [products, setProducts] = useState([]);

//   async function fetchApi() {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setProducts(data.products);
//     } catch (error) {
//       console.log("hubo un error", error);
//     }
//   }

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   return (
//     <>
//       {products.map((product) => (
//         <li key={product.id}>{product.title}</li>
//       ))}

//       {/* {products.map((product) => (
//         <Card
//           title={product.title}
//           key={product.id}
//           image={product.images[0]}
//         />
//       ))} */}
//     </>
//   );
// };

// export default FetchData;
