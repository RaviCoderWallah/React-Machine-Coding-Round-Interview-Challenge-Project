import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import App from './App.jsx';
import ProductDetailsPage from './features/products/components/ProductDetailsPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> },
      { path: "/products/:productID", element: <ProductDetailsPage /> },
      { path: "/carts", element: <Cart /> }
    ]
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
