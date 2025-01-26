import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Loading from "./components/Loading";

import { lazy, Suspense } from "react";

// Lazy Loading

const HomePage = lazy(() => import("./Pages/HomePage"));
const AppLayout = lazy(() => import("./Pages/AppLayout"));
const ProductListPage = lazy(() =>
  import("./Pages/ProductPage/ProductListPage")
);
const CartPage = lazy(() => import("./Pages/Cart/CartPage"));
const CategoryPage = lazy(() => import("./Pages/CategoryPage"));
const CheckOut = lazy(() => import("./Pages/CheckoutPages/CheckOut"));
const ProductDetailPage = lazy(() =>
  import("./Pages/ProductDetailPage/ProductDetailPage")
);

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loading />}>
        <AppLayout />
      </Suspense>
    ),
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductListPage />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loading />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<Loading />}>
            <CheckOut />
          </Suspense>
        ),
      },
      {
        path: "/categories/:category",
        element: (
          <Suspense fallback={<Loading />}>
            <CategoryPage />
          </Suspense>
        ),
      },
      {
        path: "/products/:productId",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetailPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
