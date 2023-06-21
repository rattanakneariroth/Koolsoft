import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import "./Cart.css";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import { update, remove } from "../redux/Slice/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDecrement = (item) => {
    cart.forEach((product, index) => {
      if (product.id === item.id) {
        console.log(product.count);
        if (product.count > 1)
          dispatch(update({ index: index, type: "subtract" }));
        // dispatch an action to update the item in the store
        else dispatch(remove(item.id));
      }
    });
  };
  const handleIncrement = (item) => {
    cart.forEach((product, index) => {
      if (product.id === item.id) {
        dispatch(update({ index: index, type: "add" })); // dispatch an action to update the item in the store
      }
    });
  };

  const getTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    return { totalPrice };
  };

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            {cart &&
              cart.map((item) => (
                <div className="cartContainer" key={item.id}>
                  <CartItem item={item} />
                  <div className="cartInput">
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <input
                      type="number"
                      id="input"
                      value={item.count}
                      readOnly
                    />
                    <button onClick={() => handleIncrement(item)}>+</button>
                  </div>

                  <p className="cartSubtotal">
                    ${(item.price * item.count).toFixed(3)}
                  </p>
                </div>
              ))}
            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>${getTotal().totalPrice.toFixed(3)}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button>Check Out</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="emptyCart">
            <RemoveShoppingCartIcon />

            <Typography>No Product in Your Cart</Typography>
            <Link to="/">View Products</Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
