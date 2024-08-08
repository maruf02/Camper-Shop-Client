import React, { useState } from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaSearch, FaSortNumericDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdManageSearch, MdPriceCheck } from "react-icons/md";
import {
  useGetAllProductsQuery,
  useGetCategoriesProductsQuery,
  useGetPriceRangeProductsQuery,
  useGetSearchProductsQuery,
  useGetSortProductsQuery,
} from "../../redux/api/api";
import ProductsSingleView from "../ProductsSingleView/ProductsSingleView";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceAscDesc, setselectedPriceAscDesc] = useState("");
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([]);

  // redux part
  const {
    data: productsData,
    isError,
    isLoading,
  } = useGetAllProductsQuery(undefined);
  // const { data: SearchData } = useGetSearchProductsQuery(searchText);

  // const productst = productsData?.data || [];

  // const Search = SearchData?.data || [];
  // console.log("seardata", Search);

  if (productsData && products.length === 0) {
    setProducts(productsData.data);
    setDisplayedProducts(productsData.data);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.SearchText.value.toLowerCase();
    setSearchText(searchText);

    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText)
    );
    setDisplayedProducts(filteredProducts);
  };

  const handleSortByPriceRange = (event) => {
    event.preventDefault();
    const minPrice = parseFloat(event.target.MinPrice.value) || 0;
    const maxPrice = parseFloat(event.target.MaxPrice.value) || Infinity;

    const filteredProducts = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setDisplayedProducts(filteredProducts);
  };

  const handleSelectChangeCategory = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);

    const filteredProducts = products.filter(
      (product) => product.category === selectedValue
    );
    setDisplayedProducts(filteredProducts);
  };

  const handleSelectChangePriceAscDesc = (event) => {
    const selectedValue = event.target.value;
    setSelectedPriceAscDesc(selectedValue);

    const sortedProducts = [...displayedProducts].sort((a, b) =>
      selectedValue === "asc" ? a.price - b.price : b.price - a.price
    );
    setDisplayedProducts(sortedProducts);
  };
  // const { data: PriceRange } = useGetPriceRangeProductsQuery(undefined);
  // const { data: Category } = useGetCategoriesProductsQuery(undefined);
  // const { data: Sort } = useGetSortProductsQuery(undefined);

  // const Products = data.data;
  // console.log("Products,", data.data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const SearchText = form.SearchText.value;
  //   setSearchText(SearchText);
  //   console.log("Search Value:", SearchText);
  //   // Perform your search logic here
  // };
  // const handleSortByPriceRange = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const MinPrice = form.MinPrice.value;
  //   const MaxPrice = form.MaxPrice.value;
  //   console.log("Search Value:", MinPrice, MaxPrice);
  //   // Perform your search logic here
  // };

  // const handleSelectChangeCategory = (event) => {
  //   const selectedValue = event.target.value;
  //   setSelectedCategory(selectedValue);
  //   console.log("Selected Category:", selectedValue);
  // };
  // const handleSelectChangePriceAscDesc = (event) => {
  //   const selectedValue = event.target.value;
  //   setselectedPriceAscDesc(selectedValue);
  //   console.log("Selected Category:", selectedValue);
  // };

  console.log("Selected :", selectedCategory);
  console.log("Selected :", selectedPriceAscDesc);

  return (
    <div className="w-full h-screen">
      {/* ****************************************************************************************************** */}
      {/* Product welcome banner section */}
      <div
        className="hero h-32"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-3xl font-bold text-white">
              Buy your Suitable Product & Enjoy
            </h1>
          </div>
        </div>
      </div>
      {/* ****************************************************************************************************** */}
      {/* ****************************************************************************************************** */}
      {/* Product welcome banner section */}
      {/* title bar section */}
      <div className="navbar mt-2  flex flex-col md:flex-row gap-2     flex-wrap">
        {/* ****************************************************************************************************** */}
        {/* title bar left section */}
        <div className="flex-1 ">
          <a className=" text-4xl font-bold underline pl-3">ALL PRODUCTS: </a>
        </div>
        {/* title bar left section */}
        {/* ****************************************************************************************************** */}
        {/* ****************************************************************************************************** */}
        {/* title bar right section */}
        <div className="flex-none gap-2">
          {/******************  search *******************/}
          <form onSubmit={handleSearch}>
            <div className="dropdown dropdown-bottom text-white dropdown-hover lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn  btn-sm bg-[#1A4870]"
              >
                <FaSearch className=" text-xl text-[#F9DBBA]" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu border-[#1F316F]  bg-[#1A4870] rounded-box z-[1] w-auto p-2 shadow"
              >
                <input
                  type="text"
                  name="SearchText"
                  placeholder="Search By Name/Category"
                  className="input input-bordered input-primary w-72 max-w-md bg-inherit text-white"
                />
                <button className="btn btn-sm bg-[#1A4870] text-white mt-2 ">
                  Search
                </button>
              </ul>
            </div>
          </form>
          {/* ********************* */}
          <form onSubmit={handleSearch}>
            <div className="hidden lg:block">
              <label className="input flex items-center gap-2 bg-[#1A4870] w-auto h-auto">
                <FaSearch className=" text-xl text-[#F9DBBA]" />
                <input
                  type="text"
                  name="SearchText"
                  className="input input-sm input-bordered input-[#1A4870] w-60 max-w-md   text-white"
                  placeholder="Search By Name/Category"
                />
                <button className="btn btn-sm bg-[#1A4870] text-white ">
                  Search
                </button>
              </label>
            </div>
          </form>
          {/* ********************************** */}

          {/******************  search *******************/}

          {/* //////// filter by price range /////// */}
          <form onSubmit={handleSortByPriceRange}>
            <div className="dropdown dropdown-end text-white dropdown-hover ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-sm bg-[#1A4870]"
              >
                <span className="hidden lg:block text-white">
                  Filter By Price Range
                </span>
                <MdPriceCheck className=" text-3xl text-[#F9DBBA]" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu  border-2 border-[#1F316F]  bg-[#1A4870] rounded-box z-[1] w-auto p-2 shadow"
              >
                <div className="flex    items-baseline ">
                  <label className="pr-5 text-md">MinPrice:</label>
                  <input
                    type="number"
                    name="MinPrice"
                    placeholder="Type here"
                    className="input input-bordered input-primary  input-sm w-24 max-w-xs text-white bg-inherit"
                  />
                </div>
                <div className="flex items-baseline mt-2 ">
                  <label className="pr-5 text-md">MaxPrice:</label>
                  <input
                    type="number"
                    name="MaxPrice"
                    placeholder="Type here"
                    className="input input-bordered input-primary  input-sm w-24 max-w-xs text-white bg-inherit"
                  />
                </div>
                <button className="btn btn-sm bg-[#1A4870] text-white  h-2 mt-2">
                  <span className="hidden lg:block text-white">Apply</span>
                </button>
              </ul>
            </div>
          </form>
          {/* ////////////////////// */}
          {/* *******filter by category******** */}
          <div className="dropdown dropdown-bottom dropdown-end text-white dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-sm bg-[#1A4870]">
              <span className="hidden lg:block text-white">
                Filter By Category
              </span>
              <MdManageSearch className=" text-3xl text-[#F9DBBA]" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu border-[#1F316F]  bg-[#1A4870] rounded-box z-[1] w-52 p-2 shadow"
            >
              <select
                onChange={handleSelectChangeCategory}
                className="select select-bordered w-full  bg-[#1A4870] "
              >
                <option disabled selected>
                  Select Category
                </option>
                <option value="abc">Han Solo</option>
                <option>Greedo</option>
              </select>
            </ul>
          </div>
          {/* *******filter by category******** */}
          {/* *******filter by price sort low to hight******** */}
          <div className="dropdown dropdown-bottom dropdown-end text-white dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm  bg-[#1A4870]"
            >
              <span className="hidden lg:block text-white">Sort By Price</span>
              <FaSortNumericDown className=" text-2xl text-[#F9DBBA]" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu border-[#1F316F]  bg-[#1A4870] rounded-box z-[1] w-52 p-2 shadow"
            >
              <select
                onChange={handleSelectChangePriceAscDesc}
                className="select select-bordered w-full  bg-[#1A4870] "
              >
                <option disabled>Select Option</option>
                <option value="asc">Price Low To High(ascending)</option>
                <option value="desc">Price High to Low (descending)</option>
              </select>
            </ul>
          </div>
          {/* *******filter by category******** */}
          {/* reset button */}
          <button className="btn btn-sm bg-[#1A4870] text-white ">
            <span className="hidden lg:block text-white">Reset</span>
            <IoMdClose className=" text-2xl text-[#F9DBBA]" />
          </button>
          {/* reset button */}
        </div>
        {/* title bar right section */}
        {/* ****************************************************************************************************** */}
      </div>
      {/* title bar section */}
      {/* ****************************************************************************************************** */}
      {/* ****************************************************************************************************** */}
      {/* ************************************all product shown****************************************************************** */}
      <div className="border border-2 border-gray-400"></div>
      {/* ****************all product shown********************************************* */}
      <div className=" px-8 mt-5  w-full h-full">
        <div className="flex flex-wrap justify-center align-middle gap-5   ">
          {displayedProducts.map((product: any) => (
            <ProductsSingleView
              key={product._id}
              product={product}
            ></ProductsSingleView>
          ))}
        </div>
        {/* *********************** */}
      </div>
      {/* ****************all product shown********************************************* */}
    </div>
  );
};

export default Products;
