import { FC, createContext } from 'react';

import { ProductContextProps, Props } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export const ProductCard: FC<Props> = ({ children, product }) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}
