import React from 'react';
import Button from "../Button/Button";
import styles from './ProductItem.module.scss';

const ProductItem = ({product, className, onAdd}) => {
    const {images} = product;
    // const onAddHandler = () => {
    //     onAdd(product);
    // }

    return (
        <div className={styles.product + className}>
            <div className={styles.img}>
                <img src={`http://localhost:3100/imageItems/${images[0]}`} alt=""/>

                {/*{images.map((image,index) =>(*/}
                {/*    <img*/}
                {/*        key={index}*/}
                {/*        src={`http://localhost:3100/imageItems/${image}`} alt="PhoneItem"/>*/}
                {/*    )*/}
                {/*)}*/}
            </div>
            <div>{product.name}</div>
            <div className={styles.description}>{product.quantity}</div>
            <div>
                <span>Стоимость: <b>{product.price} руб.</b></span>
            </div>
            <Button className={styles.addBtn}
                    // onClick={onAddHandler}
            >
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;