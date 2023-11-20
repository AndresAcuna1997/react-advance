import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface Props {
    product: Product;
    onChange?: (arg: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ product, onChange, value = 0 }: Props) => {
    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onChange)

    useEffect(() => {
        setCounter(value)
    }, [value])


    const increaseBy = (value: number): void => {

        if (isControlled.current) {
            return onChange!({ count: value, product })
        }

        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        onChange && onChange({ count: newValue, product })
    }


    return { counter, increaseBy }
}