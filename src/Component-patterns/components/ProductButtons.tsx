import { useContext, FC, CSSProperties, useCallback } from 'react';
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

interface Props {
  className?: string;
  style?: CSSProperties;

}

export const ProductButtons: FC<Props> = ( { className, style } ) => {

  const { counter, increaseBy, initialValues } = useContext( ProductContext );

  const { maxCount } = initialValues || {};

  const isMaxReached = useCallback( () => !!maxCount  && counter >= maxCount, [ counter, maxCount ] );

  return (
    <div
      style={ style }
      className={ `${ styles.buttonsContainer } ${ className }` }
    >
      <button onClick={ () => increaseBy( -1 ) } className={ styles.buttonMinus }>-</button>

      <div className={ styles.countLabel }>{ counter }</div>

      <button
        onClick={ () => increaseBy( 1 ) }
        disabled={ isMaxReached() }
        className={ `${ styles.buttonAdd } ${ isMaxReached() === true ? styles.disabled : "" }` }>
        +</button>
    </div>
  );
};