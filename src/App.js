import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home.js';
import Products from './views/Products.js';
import ProductDetail from './views/ProductDetail.js';
import Root from './views/Root.js';
import Error from './views/Error.js';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
