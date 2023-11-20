import { CSSProperties, FC, ReactElement, createContext } from 'react';

import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const ProductCard: FC<Props> = ({ children, product, className, style, onChange, value }) => {

    const { counter, increaseBy } = useProduct({ product, onChange, value })

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
