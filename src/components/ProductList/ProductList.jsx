
import React, {useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
// import {useTelegram} from "../../hooks/useTelegram";
// import {useCallback, useEffect} from "react";
import styles from "./ProductList.module.scss"
import axios from "axios";



// const getTotalPrice = (items = []) => {
//     return items.reduce((acc, item) => {
//         return acc += item.price
//     }, 0)
// }

const ProductList = () => {
    // const [addedItems, setAddedItems] = useState([]);
    const [products, setProduct] = useState([])
    // const {tg} = useTelegram();


    React.useEffect(()=>{
        const fetchProducts = async ()=>{
            const {data}  = await axios.get('http://localhost:3100/products')
            setProduct(data)
        }
            fetchProducts()
        }
        ,[])

    // const onSendData = useCallback(() => {
    //     const data = {
    //         products: addedItems,
    //         totalPrice: getTotalPrice(addedItems),
    //         queryId,
    //     }
    //     fetch('http://85.119.146.179:8000/web-data', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     })
    // }, [addedItems])

    // useEffect(() => {
    //     tg.onEvent('mainButtonClicked', onSendData)
    //     return () => {
    //         tg.offEvent('mainButtonClicked', onSendData)
    //     }
    // }, [onSendData])

    // const onAdd = (product) => {
    //     const alreadyAdded = addedItems.find(item => item.id === product.id);
    //     let newItems = [];
    //
    //     if(alreadyAdded) {
    //         newItems = addedItems.filter(item => item.id !== product.id);
    //     } else {
    //         newItems = [...addedItems, product];
    //     }
    //
    //     setAddedItems(newItems)
    //
    //     if(newItems.length === 0) {
    //         tg.MainButton.hide();
    //     } else {
    //         tg.MainButton.show();
    //         tg.MainButton.setParams({
    //             text: `Купить ${getTotalPrice(newItems)}`
    //         })
    //     }
    // }
    return (
        <div className={styles.list}>
            {products.map(item => (
                <ProductItem
                    key={item.id}
                    product={item}
                    // onAdd={onAdd}
                />
            ))}
        </div>
    );
};

export default ProductList;