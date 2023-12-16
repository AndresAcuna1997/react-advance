import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";

interface Props {
  product: Product;
  onChange?: ( arg: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ( { product, onChange, value = 0, initialValues }: Props ) => {
  const [ counter, setCounter ] = useState<number>( value );

  const isControlled = useRef( !!onChange );

  useEffect( () => {
    setCounter( value );
  }, [ value ] );

  useEffect( () => {
    if ( initialValues?.count ) {
      setCounter( initialValues.count );
    }
  }, [ initialValues?.count ] );

  const increaseBy = ( value: number ): void => {

    if ( isControlled.current ) {
      return onChange!( { count: value, product } );
    }

    let newValue = Math.max( counter + value, 0 );

    if ( initialValues?.maxCount ) newValue = Math.min( newValue, initialValues.maxCount );

    setCounter( newValue );
    onChange && onChange( { count: newValue, product } );
  };

  const reset = () => {
    setCounter( initialValues?.count || value );
  };

  return { counter, increaseBy, reset, isMaxReached: !!initialValues?.maxCount && initialValues.maxCount === counter };
};