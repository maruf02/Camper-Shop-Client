import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
  ratings: number;
  Mimages: string;
}

interface ProductsSingleViewProps {
  product: Product;
}
const ProductsSingleView: React.FC<ProductsSingleViewProps> = ({ product }) => {
  const { _id, name, price, category, quantity, ratings, Mimages } = product;

  return (
    <div>
      {/* *********************** */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        // className="text-center"
      >
        <Link to={`/ProductDetailsView/${_id}`}>
          <div className="card glass w-80">
            <figure>
              <img src={Mimages} alt="car!" className="w-80 h-60" />
            </figure>
            <div className=" my-5 ">
              <div className="space-y-0 pl-5">
                <div className="badge badge-outline">{category}</div>
                <h2 className="card-title m-0 py-2 text-2xl w-full h-20">
                  {name}
                </h2>
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
                <button className="btn btn-primary w-full ">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
      {/* *********************** */}
    </div>
  );
};

export default ProductsSingleView;
