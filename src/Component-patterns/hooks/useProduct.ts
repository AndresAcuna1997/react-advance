import { useState } from "react"

export const useProduct = () => {
    const [counter, setCounter] = useState(0)

    const increaseBy = (value: number): void => {
        setCounter((prev) => Math.max(prev + value))
    }

    return { counter, increaseBy }
}