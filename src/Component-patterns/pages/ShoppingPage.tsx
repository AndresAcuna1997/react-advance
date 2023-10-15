import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"


const products = [
  {
    id: "1",
    title: "Producto 1",
    img: "coffee-mug.png"
  },
  {
    id: "2",
    title: "Producto 2",

  },
  {
    id: "3",
    title: "Producto 3",

  },
  {
    id: "4",
    title: "Producto 4",

  },
  {
    id: "5",
    title: "Producto 5",

  },
  {
    id: "6",
    title: "Producto 6",

  },
  {
    id: "7",
    title: "Producto 7",

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
            <ProductCard key={i} product={product}>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </ProductCard>
          )
        }
      </div>
    </div>
  )
}
