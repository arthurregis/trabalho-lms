import { useState } from "react";

import "./Products.css"

import ProductBox from "../product/ProductBox";

const Products = () => {

  const [productsList, setProductsList] = useState([
    {
      id: 1,
      img: "/src/assets/conjunto-basico.webp",
      name: "Conjunto Basico",
      price: "87,99",
      size: "M",
    },

    {
      id: 2,
      img: "/src/assets/conjunto-branco-rosa.jpg",
      name: "Conjunto blusa e short",
      price: "58,85",
      size: "P",
    },

    {
      id: 3,
      img: "/src/assets/conjunto-florado.webp",
      name: "Conjunto Florido",
      price: "78,51",
      size: "G",
    },

    {
      id: 4,
      img: "/src/assets/conjunto-preto.jpg",
      name: "Conjunto preto",
      price: "54,78",
      size: "GG",
    },

    {
      id: 5,
      img: "/src/assets/conjunto-verde.webp",
      name: "Conjunto verde",
      price: "62,25",
      size: "M",
    },

    {
      id: 6,
      img: "/src/assets/conjunto-vermelho-listrado.jpg",
      name: "vermelho listrado",
      price: "67,55",
      size: "G",
    },

    {
      id: 7,
      img: "/src/assets/conjunto-vestido.avif",
      name: "Vestido praia",
      price: "98,78",
      size: "GG",
    },

    {
      id: 8,
      img: "/src/assets/conjunto-onça.jpg",
      name: "Blusa de onça",
      price: "91,55",
      size: "M",
    }
  ]);

  return (
    <div className="products">
      {productsList.map((product, index) => (
        <ProductBox key={index} product={product} />
      ))}
    </div>
  )
}

export default Products;