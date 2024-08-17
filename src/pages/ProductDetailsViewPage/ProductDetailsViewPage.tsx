import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/api/api";
import SideBySideMagnifier from "../ImageMagnifier/SideBySideMagnifier";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productSlice";

import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
// Import Swiper React components

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
    const productToAdd = { ...product, requiredQty };
    dispatch(addProduct(productToAdd));
    Swal.fire({
      title: "Success!",
      text: "Product added to cart successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const isOutOfStock = product.quantity === 0;
  // const existingProduct = savedProducts.find((p) => p._id === product._id);
  const isAddToCartDisabled = isOutOfStock || requiredQty > product.quantity;

  return (
    <div className="my-10 min-h-screen md:min-h-full">
      {/* <h2>ProductDetailsViewPage:{product.Mimages}</h2> */}
      <div className="text-3xl text-black font-semibold underline text-center pb-8 md:pb-14">
        See your Product in details:
      </div>
      <div className="flex flex-col md:flex-row  w-11/12  mx-auto h-96 gap-10">
        {/* left side portion */}
        <div className="w-full md:w-2/6 h-96 flex justify-center  ">
          <SideBySideMagnifier imageUrl={product.Mimages} />
        </div>
        {/* left side portion */}
        {/* Right side portion */}
        <div className="w-full md:w-4/6 h-96  flex flex-col justify-between">
          <div>
            <h1 className="text-2xl text-black font-semibold">
              {product.name}
            </h1>
            <h1>
              rating:
              <StarRatings
                rating={product.ratings}
                starRatedColor="#f39c12"
                numberOfStars={5}
                name="rating"
                starDimension="18px"
                starSpacing="1px"
              />
            </h1>
            <h1>Category: {product.category}</h1>
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
                max={product.quantity}
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
            <h1>Description:{product.description}</h1>
          </div>
          <div className="flex justify-center  ">
            <button
              onClick={handleProductIdLocalStorage}
              className="btn btn-primary mt-4 my-5"
              disabled={isAddToCartDisabled}
            >
              {isAddToCartDisabled ? (
                <p className="text-red-500">Cannot Add to Cart</p>
              ) : (
                "Add to Cart"
              )}
            </button>
          </div>
        </div>
        {/* Right side portion */}
      </div>
    </div>
  );
};

export default ProductDetailsViewPage;
