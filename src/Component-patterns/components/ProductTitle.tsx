import { CSSProperties, FC, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

interface Props {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductTitle: FC<Props> = ({ title, className, style }) => {

    const { product } = useContext(ProductContext)

    return (
        <span
            style={style}
            className={`${styles.productDescription} ${className}`}
        >
            {title ? title : product.title}
        </span>
    )
}