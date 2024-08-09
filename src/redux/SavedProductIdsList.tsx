import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { clearProductIds } from "./productSlice";
import { useGetAllProductsQuery } from "./api/api";
import ProductsSingleView from "../pages/ProductsSingleView/ProductsSingleView";
import SideBySideMagnifier from "../pages/ImageMagnifier/SideBySideMagnifier";
import ZoomLens from "../pages/ImageMagnifier/ZoomLens";
import ImageMagnifier from "../pages/ImageMagnifier/ImageMagnifier";
// import Magnifier from "react-magnifier";

const SavedProductIdsList = () => {
  const dispatch = useDispatch();
  const savedProductIds = useSelector(
    (state: RootState) => state.product.savedProductIds
  );
  const {
    data: productsData,
    isError,
    isLoading,
  } = useGetAllProductsQuery(undefined);

  const productst = productsData?.data || [];

  // Filter products that match saved IDs
  const filteredProducts = productst.filter((product) =>
    savedProductIds.includes(product._id)
  );

  return (
    <div>
      <h2 className="text-2xl">Saved Product IDs: {savedProductIds.length}</h2>
      {savedProductIds.map((id, index) => (
        <div key={index}>
          <p>Product ID: {id}</p>
        </div>
      ))}
      <button onClick={() => dispatch(clearProductIds())}>Clear All</button>
      <div className="flex flex-wrap justify-center align-middle gap-5">
        {filteredProducts.length === 0 ? (
          <p>No saved products found</p>
        ) : (
          filteredProducts.map((product: any) => (
            <ProductsSingleView key={product._id} product={product} />
          ))
        )}
      </div>
      {/* image magnifier test */}
      <div className="pl-10 flex flex-row ">
        <div>
          <h1>Product Image Magnifier</h1>
          <SideBySideMagnifier imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
        </div>
        <div>
          <h2>kg;fdgk;fgk;f</h2>
          <h2>kg;fdgk;fgk;f</h2>
          <h2>kg;fdgk;fgk;f</h2>
        </div>
      </div>
      {/* zoom lens tes */}
      <div className="pl-10 flex flex-row ">
        <div>
          <h1>Product Image Magnifier</h1>
          <ZoomLens imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
        </div>
        <div>
          <h2>kg;fdgk;fgk;f</h2>
          <h2>kg;fdgk;fgk;f</h2>
          <h2>kg;fdgk;fgk;f</h2>
        </div>
      </div>
      {/* zoom lens tes */}

      {/* fgddddfgf */}
    </div>
  );
};

export default SavedProductIdsList;
