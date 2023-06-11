import React from 'react';
import Button from "../Button/Button";
import styles from './ProductItem.module.scss';

const ProductItem = ({product, className, onAdd}) => {

    // const onAddHandler = () => {
    //     onAdd(product);
    // }

    return (
        <div className={styles.product + className}>
            <div className={styles.img}/>
            <div>{product.name}</div>
            <div className={styles.description}>{product.quantity}</div>
            <div>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            {/*<Button className={styles.addBtn} onClick={onAddHandler}>*/}
            {/*    Добавить в корзину*/}
            {/*</Button>*/}
        </div>
    );
};

export default ProductItem;