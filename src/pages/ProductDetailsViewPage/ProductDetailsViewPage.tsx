import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/api/api";
import SideBySideMagnifier from "../ImageMagnifier/SideBySideMagnifier";
import { useDispatch } from "react-redux";
import { addProductId } from "../../redux/productSlice";

const ProductDetailsViewPage = () => {
  const [requiredQty, setRequiredQty] = useState(1);
  const { id } = useParams<{ id: string }>();
  const { data: productsData, isLoading, isError } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();

  const product = productsData?.data || [];
  console.log(product);
  if (isLoading) return <div>Loading...</div>;
  if (isError || !product) return <div>Error loading product</div>;

  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequiredQty(Number(e.target.value));
  };

  const handleProductIdLocalStorage = () => {
    dispatch(addProductId(product._id)); // Add only the product's _id to the list of saved product IDs
  };

  const isOutOfStock = product.quantity === 0;
  const isAddToCartDisabled = requiredQty > product.quantity || isOutOfStock;
  return (
    <div>
      <h2>ProductDetailsViewPage:{product.image}</h2>
      <div className="flex flex-col md:flex-row border border-2 border-red-500 w-11/12  mx-auto h-96 gap-10">
        {/* left side portion */}
        <div className="w-full md:w-2/6 h-96 flex justify-center border border-2 border-gray-900  ">
          <SideBySideMagnifier imageUrl={product.images} />
        </div>
        {/* left side portion */}
        {/* Right side portion */}
        <div className="w-full md:w-4/6 h-96 border border-2 border-gray-900 flex flex-col justify-between">
          <div>
            <h1>Name:</h1>
            <h1>rating:</h1>
            <h1>Category:</h1>
            <h1>Available Qty: {product.quantity}</h1>
            <h1 className="flex flex-row align-middle">
              <span className="pr-2">Require Qty:</span>
              <input
                type="number"
                name="requiredQty"
                value={requiredQty}
                onChange={handleQtyChange}
                disabled={isOutOfStock}
                min="0"
                placeholder="QTY"
                className="input input-bordered input-primary  input-sm w-16 max-w-xs text-black text-lg font-semibold bg-inherit "
              />
              {isOutOfStock ? (
                <span className="pl-2 text-red-700 font-normal">
                  Out of Stock
                </span>
              ) : (
                requiredQty > product.quantity && (
                  <span className="pl-2 text-red-700 font-normal">
                    Exceeds stock
                  </span>
                )
              )}
            </h1>
            <p className="broder border-2 border-gray-300 my-2"></p>
            <h1>Description:</h1>
          </div>
          <div className="flex justify-center  ">
            <button
              onClick={handleProductIdLocalStorage}
              className="btn btn-primary mt-4 my-5"
              disabled={isAddToCartDisabled}
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* Right side portion */}
      </div>
    </div>
  );
};

export default ProductDetailsViewPage;
