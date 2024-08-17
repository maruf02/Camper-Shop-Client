import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../redux/store";
import { useGetAllProductsQuery } from "../redux/api/api";
import { MdManageAccounts } from "react-icons/md";

const Navbar = () => {
  // redux part for cart
  // const dispatch = useDispatch();
  // const savedProductIds = useSelector(
  //   (state: RootState) => state.product.savedProductIds
  // );
  // const { data: productsData } = useGetAllProductsQuery(undefined);

  // const productst = productsData?.data || [];

  // // Filter products that match saved IDs
  // const filteredProducts = productst.filter((product) =>
  //   savedProductIds.includes(product._id)
  // );
  // const totalSum = filteredProducts.reduce((accumulator, product) => {
  //   return accumulator + product.price;
  // }, 0);

  // console.log("Total Sum:", totalSum);
  // console.log("filteredProducts price", filteredProducts[0].price);
  // redux part for cart
  const menu = (
    <>
      <li>
        <NavLink to="/" className="activeNavLink ">
          <button>Home</button>
        </NavLink>
      </li>
      <li>
        {/* <NavLink to="/about" className="activeNavLink "> */}
        <button>About</button>
        {/* </NavLink> */}
      </li>

      <li>
        <NavLink to="/products" className="activeNavLink ">
          <button>Product</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/cartView" className="activeNavLink ">
          <button>Cart</button>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-[#1A4870] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1A4870] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li> */}
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
            {menu}
          </ul>
        </div>

        <div className="navbar-end ">
          {/* /////////////////////////////////////////// */}
          {/* wishlist section */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div
                  className="indicator tooltip tooltip-bottom"
                  data-tip="Wishlist"
                >
                  <FaRegHeart className="h-5 w-5 " />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  {/* <span className="text-info">Subtotal: $999</span> */}
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* wishList section */}
          {/* /////////////////////////////////////////// */}
          {/* /////////////////////////////////////////// */}
          {/* cart section */}
          <div className="flex-none mr-3">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div
                  className="indicator tooltip tooltip-bottom"
                  data-tip="Cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {/* {savedProductIds.length} */}8
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {/* {savedProductIds.length} */}8
                  </span>
                  {/* <span className="text-info">Subtotal: ${totalSum}</span> */}
                  <span className="text-info">Subtotal: $205</span>
                  <div className="card-actions">
                    <NavLink to="/cartView" className="activeNavLink ">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* cart section */}
          {/* /////////////////////////////////////////// */}

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12  border-2 border-[#5B99C2] rounded-full  ">
                <MdManageAccounts className="w-full h-full p-1" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1A4870] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/productManagement">
                <button className="text-white btn bg-[#1A4870] hover:bg-[#5B99C2] btn-md justify-between w-full">
                  Product Management
                </button>
              </NavLink>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
