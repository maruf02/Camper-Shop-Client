// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
// import { removeProduct, addProduct } from "../../redux/productSlice";
// import { useNavigate } from "react-router-dom";
// import { setCheckoutData } from "../../redux/features/checkoutSlice";

// const CartViewPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const savedProducts = useSelector(
//     (state: RootState) => state.product.savedProducts
//   );
//   const [cartItems, setCartItems] = useState(savedProducts);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [isPlaceOrderDisabled, setIsPlaceOrderDisabled] = useState(false);

//   useEffect(() => {
//     calculateTotalPrice();
//     checkIfExceedsStock();
//   }, [cartItems]);

//   const handleQtyChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     productId: string
//   ) => {
//     const newQty = Number(e.target.value);
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === productId ? { ...item, requiredQty: newQty } : item
//       )
//     );
//   };

//   const handleRemoveProduct = (productId: string) => {
//     dispatch(removeProduct(productId));
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item._id !== productId)
//     );
//   };

//   const calculateTotalPrice = () => {
//     const total = cartItems.reduce(
//       (sum, item) => sum + item.price * item.requiredQty,
//       0
//     );
//     setTotalPrice(total);
//   };

//   const checkIfExceedsStock = () => {
//     const exceedsStock = cartItems.some(
//       (item) => item.requiredQty > item.quantity
//     );
//     setIsPlaceOrderDisabled(exceedsStock);
//   };

//   // for check out page
//   const handlePlaceOrder = () => {
//     if (!isPlaceOrderDisabled) {
//       // Navigate to checkout page and pass data
//       navigate("/checkout", {
//         state: {
//           totalItems: cartItems.length,
//           items: cartItems,
//           totalPrice,
//         },
//       });
//     }
//   };

//   return (
//     <div>
//       <h2>CartViewPage</h2>
//       <div>
//         <h2 className="text-2xl">Saved Products:</h2>
//         {cartItems.map((product) => (
//           <div
//             key={product._id}
//             className="flex flex-row mx-auto w-fit px-5 py-2 h-32 gap-5 border border-2 border-red-600"
//           >
//             <div className="w-36 h-full p-2">
//               <img
//                 src={product.images[0]} // Assuming the first image is the primary one
//                 alt={product.name}
//                 className="w-full h-full rounded-lg"
//               />
//             </div>
//             <div className="px-5">
//               <h1>Name: {product.name}</h1>
//               <h1>Product price: ${product.price}</h1>
//               <h1>Category: {product.category}</h1>
//               <h1>Ratings: {product.ratings}</h1>
//               <h1>Available Stock: {product.quantity}</h1>
//             </div>
//             <div className="align-middle">
//               <h1 className="flex flex-row align-middle">
//                 <span className="pr-2">Required Qty:</span>
//                 <input
//                   type="number"
//                   name="requiredQty"
//                   value={product.requiredQty}
//                   onChange={(e) => handleQtyChange(e, product._id)}
//                   min="0"
//                   placeholder="QTY"
//                   className="input input-bordered input-primary input-sm w-16 max-w-xs text-black text-lg font-semibold bg-inherit"
//                 />
//                 {product.requiredQty > product.quantity && (
//                   <span className="pl-2 text-red-700 font-normal">
//                     Exceeds stock
//                   </span>
//                 )}
//               </h1>
//               <h1>
//                 Purchase total price: $
//                 {(product.price * product.requiredQty).toFixed(2)}
//               </h1>
//               <button
//                 onClick={() => handleRemoveProduct(product._id)}
//                 className="btn btn-sm btn-warning"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//         <div className="flex flex-col mx-auto w-full px-5 py-2 h-32 gap-5 border border-2 border-red-600 justify-center">
//           <h1>Total price: ${totalPrice.toFixed(2)}</h1>
//           <button
//             onClick={handlePlaceOrder}
//             className="btn btn-primary"
//             disabled={isPlaceOrderDisabled}
//           >
//             Place Order
//           </button>
//           {isPlaceOrderDisabled && (
//             <span className="text-red-700 font-normal">
//               Adjust quantities to place the order
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartViewPage;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeProduct } from "../../redux/productSlice";
import { useNavigate } from "react-router-dom";
import { setOrderData } from "../../redux/placeOrderSlice";

const CartViewPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const savedProducts = useSelector(
    (state: RootState) => state.product.savedProducts
  );
  const [cartItems, setCartItems] = useState(savedProducts);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPlaceOrderDisabled, setIsPlaceOrderDisabled] = useState(false);

  useEffect(() => {
    calculateTotalPrice();
    checkIfExceedsStock();
  }, [cartItems]);

  const handleQtyChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    productId: string
  ) => {
    const newQty = Number(e.target.value);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId ? { ...item, requiredQty: newQty } : item
      )
    );
  };

  const handleRemoveProduct = (productId: string) => {
    dispatch(removeProduct(productId));
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.requiredQty,
      0
    );
    setTotalPrice(total);
  };

  const checkIfExceedsStock = () => {
    const exceedsStock = cartItems.some(
      (item) => item.requiredQty > item.quantity
    );
    setIsPlaceOrderDisabled(exceedsStock);
  };

  const handlePlaceOrder = () => {
    if (!isPlaceOrderDisabled) {
      const orderData = {
        totalItems: cartItems.length,
        items: cartItems.map(({ _id, name, requiredQty, price }) => ({
          _id,
          name,
          requiredQty,
          price,
        })),
        totalPrice,
      };

      dispatch(setOrderData(orderData));

      // Navigate to checkout page
      navigate("/checkout");
    }
  };

  return (
    <div>
      <h2>CartViewPage</h2>
      <div>
        <h2 className="text-2xl">Saved Products:</h2>
        {cartItems.map((product) => (
          <div
            key={product._id}
            className="flex flex-row mx-auto w-fit px-5 py-2 h-32 gap-5 border border-2 border-red-600"
          >
            <div className="w-36 h-full p-2">
              <img
                src={product.images[0]} // Assuming the first image is the primary one
                alt={product.name}
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="px-5">
              <h1>Name: {product.name}</h1>
              <h1>Product price: ${product.price}</h1>
              <h1>Category: {product.category}</h1>
              <h1>Ratings: {product.ratings}</h1>
              <h1>Available Stock: {product.quantity}</h1>
            </div>
            <div className="align-middle">
              <h1 className="flex flex-row align-middle">
                <span className="pr-2">Required Qty:</span>
                <input
                  type="number"
                  name="requiredQty"
                  value={product.requiredQty}
                  onChange={(e) => handleQtyChange(e, product._id)}
                  min="0"
                  placeholder="QTY"
                  className="input input-bordered input-primary input-sm w-16 max-w-xs text-black text-lg font-semibold bg-inherit"
                />
                {product.requiredQty > product.quantity && (
                  <span className="pl-2 text-red-700 font-normal">
                    Exceeds stock
                  </span>
                )}
              </h1>
              <h1>
                Purchase total price: $
                {(product.price * product.requiredQty).toFixed(2)}
              </h1>
              <button
                onClick={() => handleRemoveProduct(product._id)}
                className="btn btn-sm btn-warning"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex flex-col mx-auto w-full px-5 py-2 h-32 gap-5 border border-2 border-red-600 justify-center">
          <h1>Total price: ${totalPrice.toFixed(2)}</h1>
          <button
            onClick={handlePlaceOrder}
            className="btn btn-primary"
            disabled={isPlaceOrderDisabled}
          >
            Place Order
          </button>
          {isPlaceOrderDisabled && (
            <span className="text-red-700 font-normal">
              Adjust quantities to place the order
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartViewPage;
