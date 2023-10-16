import { useContext, FC, CSSProperties } from 'react';
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

interface Props {
    className?: string;
    style?: CSSProperties;

}

export const ProductButtons: FC<Props> = ({ className, style }) => {

    const { counter, increaseBy } = useContext(ProductContext)

    return (
        <div
            style={style}
            className={`${styles.buttonsContainer} ${className}`}
        >
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>

            <div className={styles.countLabel}>{counter}</div>

            <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
        </div>
    )
}