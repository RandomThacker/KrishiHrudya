import React, { useState } from "react";
import styled from "styled-components";

const Card = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.image} alt={product.name} className="productImage" />
      <div className={`overlay ${isHovered ? "visible" : ""}`}>
        <div className="productInfo">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  width: 200px; /* Adjust the width as needed */
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  .productImage {
    width: 100%;
    height: auto;
    display: block;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .visible {
    opacity: 1;
  }

  .productInfo {
    text-align: center;
    padding: 10px; /* Add padding to make text fit within the card */

    h3 {
      font-size: 1rem; /* Adjust the font size as needed */
      margin-bottom: 5px;
    }

    p {
      font-size: 0.8rem; /* Adjust the font size as needed */
      margin: 5px 0;
    }

    button {
      background-color: #4caf50;
      color: white;
      padding: 5px 10px;
      font-size: 0.8rem; /* Adjust the font size as needed */
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export default Card;
