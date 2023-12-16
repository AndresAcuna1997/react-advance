import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";


const product1 = {
  id: "1",
  title: "Producto 1",
  img: "coffee-mug.png"
};

// const product2 = {
//   id: "2",
//   title: "Producto 2",
//   img: "coffee-mug2.png"
// };

/*   const products = [
    product1, product2
  ]; */

export const ShoppingPage = () => {



  return (
    <div style={ { display: "block" } }>
      <h1>ShoppingPage</h1>
      <br />

      <ProductCard
        product={ product1 }
        className="bg-dark text-white"
        initialValues={ {
          count: 4,
          maxCount: 10,
        } }
      >
        {
          ( {
            count,
            isMaxReached,
            maxCount,
            increaseBy,
            reset
          } ) =>
          (
            <>
              <ProductImage
                className="custom-image"
              />
              <ProductTitle
                className=" text-bold"
              />
              <ProductButtons
                className="custom-buttons"
              />

              <button onClick={ reset }>Reset</button>

              <button onClick={ () => increaseBy( -2 ) }>-2</button>
              <span>{ count }-{ maxCount }</span>
              {
                !isMaxReached && <button onClick={ () => increaseBy( 2 ) }>+2</button>
              }
            </>
          )
        }

      </ProductCard>

    </div>
  );
};
