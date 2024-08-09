// import React from "react";
// import { useLocation } from "react-router-dom";

// const CheckOutPage = () => {
//   const location = useLocation();
//   const state = location.state as {
//     totalItems?: number;
//     items?: Array<{ name: string; _id: string; requiredQty: number }>;
//     totalPrice?: number;
//   };

//   const totalItems = state.totalItems ?? 0;
//   const items = state.items ?? [];
//   const totalPrice = state.totalPrice ?? 0;

//   const handleCheckOut = (event: React.FormEvent) => {
//     event.preventDefault();
//     event.preventDefault();

//     // Extract all _id values from items
//     const itemIds = items.map((item) => item._id);

//     console.log("Item IDs:", itemIds);
//     console.log("Checkout Details", items, totalItems, totalPrice);
//   };

//   return (
//     <div className="py-5 flex flex-col gap-2">
//       <h2>CheckOutPage</h2>
//       <h2>Total Items: {totalItems}</h2>
//       <h2>Items:</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item._id}>
//             {item.name}:{item.requiredQty}
//           </li>
//         ))}
//       </ul>
//       <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
//       <form onSubmit={handleCheckOut}>
//         <label htmlFor="name">Name</label>
//         <input type="text" name="name" id="name" required />
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" id="email" required />
//         <label htmlFor="phone">Phone</label>
//         <input type="number" name="phone" id="phone" required />
//         <label htmlFor="address">Address</label>
//         <input type="text" name="address" id="address" required />
//         <label htmlFor="payment">Payment Method</label>
//         <input
//           type="radio"
//           name="payment"
//           value="credit"
//           id="credit"
//           className="radio radio-primary"
//         />
//         <label htmlFor="credit">Credit Card</label>
//         <input
//           type="radio"
//           name="payment"
//           value="paypal"
//           id="paypal"
//           className="radio radio-primary"
//         />
//         <label htmlFor="paypal">PayPal</label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CheckOutPage;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { useLocation, useNavigate } from "react-router-dom";
import { clearOrderData } from "../../redux/placeOrderSlice";

const CheckOutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Retrieve data from the Redux store
  const orderData = useSelector(
    (state: RootState) => state.placeOrder.orderData
  );

  // Fallback if data is not available
  const totalItems = orderData?.totalItems ?? 0;
  const items = orderData?.items ?? [];
  const totalPrice = orderData?.totalPrice ?? 0;

  const handleCheckOut = (event: React.FormEvent) => {
    event.preventDefault();

    // Extract all _id values from items
    const itemIds = items.map((item) => item._id);

    console.log("Item IDs:", itemIds);
    console.log("Checkout Details", items, totalItems, totalPrice);

    // Clear order data after checkout
    dispatch(clearOrderData());

    // Optionally navigate to a confirmation or another page
    navigate("/confirmation");
  };

  return (
    <div className="py-5 flex flex-col gap-2">
      <h2>CheckOutPage</h2>
      <h2>Total Items: {totalItems}</h2>
      <h2>Items:</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}: {item.requiredQty}
          </li>
        ))}
      </ul>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      <form onSubmit={handleCheckOut}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="phone">Phone</label>
        <input type="number" name="phone" id="phone" required />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" required />
        <label htmlFor="payment">Payment Method</label>
        <input
          type="radio"
          name="payment"
          value="credit"
          id="credit"
          className="radio radio-primary"
        />
        <label htmlFor="credit">Credit Card</label>
        <input
          type="radio"
          name="payment"
          value="paypal"
          id="paypal"
          className="radio radio-primary"
        />
        <label htmlFor="paypal">PayPal</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckOutPage;
