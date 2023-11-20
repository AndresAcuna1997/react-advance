import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";


const product1 = {
  id: "1",
  title: "Producto 1",
  img: "coffee-mug.png"
}
const product2 = {
  id: "2",
  title: "Producto 2",
  img: "coffee-mug2.png"
}

const products = [
  product1, product2
];

export const ShoppingPage = () => {


  const { shoppingCart, onProductCountChange } = useShoppingCart()

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
              onChange={(e) => onProductCountChange(e)}
              value={shoppingCart[`${product.id}`]?.count || 0}
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
      </div>

      <div className="shopping-cart">
        {
          Object.values(shoppingCart).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              style={{ width: '100px' }}
              onChange={(e) => onProductCountChange(e)}
              value={product.count}
            >
              <ProductImage
                className="custom-image"
              />
              <ProductButtons
                className="custom-buttons"
              />
            </ProductCard>))
        }
      </div>
    </div>
  )
}
