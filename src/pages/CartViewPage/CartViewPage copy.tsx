import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetAllProductsQuery } from "../../redux/api/api";
import ProductsSingleView from "../ProductsSingleView/ProductsSingleView";
import { clearProductIds } from "../../redux/productSlice";

const CartViewPage = () => {
  const dispatch = useDispatch();
  const savedProductIds = useSelector(
    (state: RootState) => state.product.savedProducts
  );
  const { data: productsData } = useGetAllProductsQuery(undefined);

  const productst = productsData?.data || [];

  // Filter products that match saved IDs
  const filteredProducts = productst.filter((product) =>
    savedProductIds.includes(product._id)
  );
  return (
    <div>
      <h2>CartViewPage</h2>
      <div>
        <h2 className="text-2xl">
          Saved Product IDs: {savedProductIds.length}
        </h2>
        {savedProductIds.map((id, index) => (
          <div key={index}>
            <p>Product ID: {id}</p>
          </div>
        ))}
        <button>Clear All</button>
        {/* <button onClick={() => dispatch(clearProductIds())}>Clear All</button> */}
        <div className="flex flex-wrap justify-center align-middle gap-5">
          {filteredProducts.length === 0 ? (
            <p>No saved products found</p>
          ) : (
            filteredProducts.map((product: any) => (
              <ProductsSingleView key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CartViewPage;
