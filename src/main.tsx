import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import Root from "./root/Root.tsx";
import HomePage from "./pages/Homepage/HomePage.tsx";
import ErrorPage from "./ErrorPage/ErrorPage.tsx";
import Products from "./pages/Products/Products.tsx";
import ProductDetailsViewPage from "./pages/ProductDetailsViewPage/ProductDetailsViewPage.tsx";
import CartViewPage from "./pages/CartViewPage/CartViewPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/ProductDetailsView/:id",
        element: <ProductDetailsViewPage></ProductDetailsViewPage>,
      },
      {
        path: "/cartView",
        element: <CartViewPage></CartViewPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
