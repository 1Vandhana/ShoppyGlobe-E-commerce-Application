// Configure application routing using React Router with lazy-loaded page //
// Wrap routes in Suspense to show a loading fallback while components load ///

// Configure application routing using React Router with lazy-loaded pages
// Wrap routes in Suspense to show a loading fallback while components load

import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";

// Lazy load pages
const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Layout component (Header stays on all pages)
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <ProductList /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<h2 className="loading">Loading...</h2>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
