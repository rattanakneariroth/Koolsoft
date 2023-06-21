import React from 'react';
import "./Product.css";
import { add, update } from "../redux/Slice/cartSlice";
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';



const Product = ({item}) => {
    const { cart } = useSelector((state) => state);
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();


    const addToCart = () => {
        let check = cart.filter(product => product.id === item.id)
        if(check && check.length === 0) {
            dispatch(add(item));
        } else {
            cart.forEach((product, index) => {
                if(product.id === item.id) {
                    dispatch(update({index: index, type: 'add'})) // dispatch an action to update the item in the store
                }
            })
        }
    
        enqueueSnackbar(`Item added to your cart successfully`, {
            variant: "success", // color: Green
            autoHideDuration: 3000,
        });
    };
    
    
  return (
    <>
        <div className="productCard">
            <img src={item.image} alt={item.title} />
            <h1 className='test1'>{item.title}
                <div className='test'>
                    {item.title}
                </div>
            </h1>
            
            <div className='product-info'>
                
                    
                    <button className="button button1" onClick={addToCart}>Add to item</button> 


                <h3>${item.price}</h3>

            </div>              
        </div>
        </>

   )
}

export default Product