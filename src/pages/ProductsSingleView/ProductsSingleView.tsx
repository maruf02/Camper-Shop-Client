import React from "react";
import StarRatings from "react-star-ratings";

const ProductsSingleView = ({ product }) => {
  const { name, description, price, category, quantity, ratings, images } =
    product;
  return (
    <div>
      {/* *********************** */}
      <div className="card glass w-80">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="car!"
          />
        </figure>
        <div className=" my-5 ">
          <div className="space-y-0 pl-5">
            <div className="badge badge-outline">{category}</div>
            <h2 className="card-title m-0 py-2 text-2xl">{name}</h2>
            <p className="m-0 text-md">QTY: {quantity}pcs</p>
            <div className="flex justify-between align-middle pr-5 pb-3">
              <p className="m-0 text-md">Price: {price}</p>

              <StarRatings
                rating={ratings}
                starRatedColor="#f39c12"
                numberOfStars={5}
                name="rating"
                starDimension="18px"
                starSpacing="1px"
              />
            </div>
          </div>
          <div className="card-actions   mt-3 ">
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </div>
      </div>
      {/* *********************** */}
    </div>
  );
};

export default ProductsSingleView;
