import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { clearProductIds } from "./productSlice";

const SavedProductIdsList = () => {
  const dispatch = useDispatch();
  const savedProductIds = useSelector(
    (state: RootState) => state.product.savedProductIds
  );

  return (
    <div>
      <h2 className="text-2xl">Saved Product IDs:{savedProductIds.length}</h2>
      {savedProductIds.map((id, index) => (
        <div key={index}>
          <p>Product ID: {id}</p>
        </div>
      ))}
      <button onClick={() => dispatch(clearProductIds())}>Clear All</button>
    </div>
  );
};

export default SavedProductIdsList;
