
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  increaseBy: ( value: number ) => void;
  initialValues?: InitialValues;
}

export interface ProductCardHandlers {
  count: number;
  isMaxReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: ( value: number ) => void;
  reset: () => void;
}