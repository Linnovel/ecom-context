const Card = ({ title, image, price, description }) => {
  return (
    <>
      <h4>{title}</h4>
      <img src={image} alt="product-img" />
      <p>{price}</p>
      <p>{description}</p>
    </>
  );
};

export default Card;
