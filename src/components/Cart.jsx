import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITEM_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = (item) => {
    //dispatch an action
    dispatch(clearCart());
  };

  console.log(cartItems);

  return (
    <div className="cart-container w-6/12 mx-auto mb-69">
      <h1 className="text-2xl my-12 font-bold text-center">Your Cart</h1>
      <p className="text-center my-10">
        <button
          className="clear-btn mx-2 py-1 px-2 border rounded-xl bg-amber-300 hover:bg-amber-600 active:bg-amber-300"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <button className="clear-btn mx-2 py-1 px-2 border rounded-xl bg-amber-300 hover:bg-green-500 active:bg-amber-300">
          Checkout
        </button>
      </p>
      {cartItems.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-b flex justify-between h-auto my-4"
        >
          <div className="item-description text-left m-3 w-8/12  items-baseline">
            <h2 className="item-name font-bold ">{item?.card?.info?.name}</h2>
            <p className="text-xs my-4"> {item?.card?.info?.description} </p>
            <span className="price text-xl mr-4">
              {" "}
              ₹
              {item?.card?.info?.defaultPrice / 100 ||
                item?.card?.info?.price / 100}{" "}
            </span>
            <span className="ratings text-amber-400 text-xl mx-3">
              {" "}
              {item?.card?.info?.ratings?.aggregatedRating?.rating} ★{" "}
            </span>
          </div>

          <div className="item-img w-4/12 m-2 ">
            <img
              src={ITEM_URL + item?.card?.info?.imageId}
              alt="item-image"
              className="h-35 mx-auto rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
