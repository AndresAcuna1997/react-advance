import { CSSProperties, FC, ReactElement, createContext } from 'react';

import { Product, ProductContextProps } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

export const ProductCard: FC<Props> = ({ children, product, className, style }) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}
            >
                {children}
            </div>
        </Provider>
    )
}
