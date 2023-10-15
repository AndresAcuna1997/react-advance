import { ReactElement } from "react";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
}

export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void;
}