import { CSSProperties, FC, createContext } from 'react';

import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext( {} as ProductContextProps );

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[] ;
  children?: ( args: ProductCardHandlers ) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard: FC<Props> = ( { children, product, className, style, onChange, value, initialValues } ) => {

  const { counter, increaseBy, isMaxReached, reset } = useProduct( { product, onChange, value, initialValues } );

  return (
    <Provider value={ { counter, product, initialValues, increaseBy } }>
      <div
        style={ style }
        className={ `${ styles.productCard } ${ className }` }
      >
        {
          children!( {
            count: counter,
            isMaxReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          } )
        }
      </div>
    </Provider>
  );
};
