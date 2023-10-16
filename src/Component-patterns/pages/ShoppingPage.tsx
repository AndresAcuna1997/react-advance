import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"

import "../styles/custom-styles.css";

const products = [
  {
    id: "1",
    title: "Producto 1",
    img: "coffee-mug.png"
  },
  {
    id: "2",
    title: "Producto 2",

  }
];

export const ShoppingPage = () => {
  return (
    <div style={{ display: "block" }}>
      <h1>ShoppingPage</h1>
      <br />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          products.map((product, i) =>
            <ProductCard
              key={i}
              product={product}
              className="bg-dark text-white"
            >
              <ProductImage
                className="custom-image"
              />
              <ProductTitle
                className=" text-bold"
              />
              <ProductButtons
                className="custom-buttons"
              />
            </ProductCard>
          )
        }

        <ProductCard
          product={products[0]}
          className="bg-dark text-white"
        >
          <ProductImage
            className="custom-image"
          />
          <ProductTitle
            className=" text-bold"
          />
          <ProductButtons
            className="custom-buttons"
          />
        </ProductCard>
      </div>
    </div>
  )
}
