import React from "react";

const data = [
  {
    title: "Beast Mode Blend",
    price: "$39.99",
    image: "/image.png",
  },
  {
    title: "Shred Blend",
    price: "$49.99",
    image: "/image2.png",
  },
  {
    title: "Mushroom+ Blend",
    price: "$39.99",
    image: "/image1.png",
  },
];

const Products = () => {
  return (
    <div className="root-products">
      <div className="product-heading-main">
        <h2 className="product-heading1">our best selling</h2>
        <h2 className="product-heading2">Products</h2>
      </div>
      <div className="product-card-section">
        {data?.map((value, index) => {
          return (
            <div className="product-card" key={index}>
              <div className="card-image">
                <img src={value.image} alt="bounce" />
              </div>
              <div className="card-content">
                <p>{value.title}</p> | <p>{value.price}</p>
              </div>
              <div className="card-count-buttons">
                <button className="card-count-button1">60-Count</button>
                <button className="card-count-button2">90-Count</button>
              </div>
              <div>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
