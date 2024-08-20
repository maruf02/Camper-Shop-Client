import { useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useGetAllProductsQuery } from "../../../redux/api/api";
import { motion } from "framer-motion";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StarRatings from "react-star-ratings";
import { NavLink } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  Mimages: string;
  ratings: number;
}
const BestSellingPage = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const {
    data: productsData,
    isError,
    isLoading,
  } = useGetAllProductsQuery(undefined);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  const getRandomProducts = (products: Product[]) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  };

  const randomProducts = getRandomProducts(productsData.data);

  return (
    <div>
      <div className="w-full h-full my-5">
        {/* title section */}
        <div className="flex flex-row justify-between py-5">
          <h1 className="text-xl md:text-3xl text-black font-bold">
            Best Selling Products:
          </h1>
          <NavLink to="/products" className="activeNavLink ">
            <button className="btn btn-primary btn-sm flex flex-row justify-center align-middle items-center gap-1 mr-5">
              View More
              <FaLongArrowAltRight className="text-black" />
            </button>
          </NavLink>
        </div>
        <div className="border border-2 border-gray-400 "></div>
        {/* product view section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="px-8 mt-5 w-full h-full my-10">
            <div className="flex flex-wrap justify-center align-middle gap-5">
              {randomProducts.length === 0 ? (
                <p>Sorry, no products available</p>
              ) : (
                <Swiper
                  onSwiper={(swiperInstance) => {
                    swiperRef.current = swiperInstance;
                  }}
                  direction="horizontal"
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    1280: {
                      slidesPerView: 4,
                    },
                    1536: {
                      slidesPerView: 5, // For screens 1536px and up
                    },
                  }}
                  spaceBetween={10}
                  virtual
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 1000, disableOnInteraction: false }}
                  modules={[Virtual, Navigation, Pagination, Autoplay]}
                  className="h-[450px]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {randomProducts.map((product: Product) => (
                    <SwiperSlide key={product._id}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="card glass w-80">
                          <figure>
                            <img
                              src={product.Mimages}
                              alt="product"
                              className="w-80 h-60"
                            />
                          </figure>
                          <div className="my-5">
                            <div className="space-y-0 pl-5">
                              <div className="badge badge-outline">
                                {product.category}
                              </div>
                              <h2 className="card-title m-0 py-2 text-2xl w-full h-20">
                                {product.name}
                              </h2>
                              <p className="m-0 text-md">
                                QTY: {product.quantity}pcs
                              </p>
                              <div className="flex justify-between align-middle pr-5 pb-3">
                                <p className="m-0 text-md">
                                  Price: {product.price}
                                </p>

                                <StarRatings
                                  rating={product.ratings}
                                  starRatedColor="#f39c12"
                                  numberOfStars={5}
                                  name="rating"
                                  starDimension="18px"
                                  starSpacing="1px"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </motion.div>
        {/* product view section */}
        <div className="flex flex-row justify-between">
          <h1></h1>
          <NavLink to="/products" className="activeNavLink ">
            <button className="btn btn-primary btn-sm flex flex-row justify-center align-middle items-center gap-1 mr-5">
              View More
              <FaLongArrowAltRight className="text-black" />
            </button>
          </NavLink>
        </div>
        {/* product view section */}
      </div>
    </div>
  );
};

export default BestSellingPage;

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// import { MutableRefObject, useRef } from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { useGetAllProductsQuery } from "../../../redux/api/api";
// import { motion } from "framer-motion";
// import { Swiper as SwiperType } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Virtual, Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import StarRatings from "react-star-ratings";
// import { NavLink } from "react-router-dom";

// const BestSellingPage = () => {
//   // const swiperRef = useRef(null);
//   const swiperRef = useRef<SwiperType | null>(null);

//   const {
//     data: productsData,
//     isError,
//     isLoading,
//   } = useGetAllProductsQuery(undefined);

//   const handleMouseEnter = () => {
//     if (swiperRef.current?.swiper) {
//       swiperRef.current.swiper.autoplay.stop();
//     }
//   };

//   const handleMouseLeave = () => {
//     if (swiperRef.current?.swiper) {
//       swiperRef.current.swiper.autoplay.start();
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="text-center py-5">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   if (isError) {
//     return <div>Error loading products</div>;
//   }

//   const getRandomProducts = (products) => {
//     const shuffled = [...products].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, 8);
//   };

//   const randomProducts = getRandomProducts(productsData.data);

//   return (
//     <div>
//       <div className="w-full h-full  my-5">
//         {/* title section */}
//         <div className="flex flex-row justify-between py-5">
//           <h1 className="text-xl md:text-3xl text-black font-bold">
//             Best Selling Products:
//           </h1>
//           <NavLink to="/products" className="activeNavLink ">
//             <button className="btn btn-primary btn-sm flex flex-row justify-center align-middle items-center gap-1 mr-5">
//               View More
//               <FaLongArrowAltRight className="text-black" />
//             </button>
//           </NavLink>
//         </div>
//         <div className="border border-2 border-gray-400 "></div>
//         {/* product view section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 2 }}
//         >
//           <div className="px-8 mt-5 w-full h-full my-10">
//             <div className="flex flex-wrap justify-center align-middle gap-5">
//               {randomProducts.length === 0 ? (
//                 <p>Sorry, no products available</p>
//               ) : (
//                 <Swiper
//                   ref={swiperRef}
//                   direction="horizontal"
//                   slidesPerView={1}
//                   breakpoints={{
//                     640: {
//                       slidesPerView: 1,
//                     },
//                     768: {
//                       slidesPerView: 2,
//                     },
//                     1024: {
//                       slidesPerView: 3,
//                     },
//                     1280: {
//                       slidesPerView: 4,
//                     },
//                     1536: {
//                       slidesPerView: 5, // For screens 1536px and up
//                     },
//                   }}
//                   spaceBetween={10}
//                   virtual
//                   navigation
//                   pagination={{ clickable: true }}
//                   autoplay={{ delay: 1000, disableOnInteraction: false }}
//                   modules={[Virtual, Navigation, Pagination, Autoplay]}
//                   className="h-[450px]"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   {randomProducts.map((product: any) => (
//                     <SwiperSlide key={product._id}>
//                       <motion.div
//                         whileHover={{ scale: 1.05 }}
//                         // className="bg-white rounded-lg shadow-lg p-6 mx-auto w-full sm:w-3/4"
//                         onMouseEnter={handleMouseEnter}
//                         onMouseLeave={handleMouseLeave}
//                       >
//                         <div className="card glass w-80">
//                           <figure>
//                             <img
//                               src={product.Mimages}
//                               alt="car!"
//                               className="w-80 h-60"
//                             />
//                           </figure>
//                           <div className=" my-5 ">
//                             <div className="space-y-0 pl-5">
//                               <div className="badge badge-outline">
//                                 {product.category}
//                               </div>
//                               <h2 className="card-title m-0 py-2 text-2xl w-full h-20">
//                                 {product.name}
//                               </h2>
//                               <p className="m-0 text-md">
//                                 QTY: {product.quantity}pcs
//                               </p>
//                               <div className="flex justify-between align-middle pr-5 pb-3">
//                                 <p className="m-0 text-md">
//                                   Price: {product.price}
//                                 </p>

//                                 <StarRatings
//                                   rating={product.ratings}
//                                   starRatedColor="#f39c12"
//                                   numberOfStars={5}
//                                   name="rating"
//                                   starDimension="18px"
//                                   starSpacing="1px"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               )}
//             </div>
//           </div>
//         </motion.div>
//         {/* product view section */}
//         <div className="flex flex-row justify-between">
//           <h1></h1>
//           <NavLink to="/products" className="activeNavLink ">
//             <button className="btn btn-primary btn-sm flex flex-row justify-center align-middle items-center gap-1 mr-5">
//               View More
//               <FaLongArrowAltRight className="text-black" />
//             </button>
//           </NavLink>
//         </div>
//         {/* product view section */}
//       </div>
//     </div>
//   );
// };

// export default BestSellingPage;
