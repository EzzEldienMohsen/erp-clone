import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Landing, ModulePage } from './pages';
import { AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// loader
import {loader as moduleLoader} from "./pages/ModulePage"






const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/:id',
        element: <ModulePage />,
        loader: moduleLoader(queryCLient),
      },
    ],
  },
]);
function App() {
  return (
    <AnimatePresence mode="wait">
      <QueryClientProvider client={queryCLient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AnimatePresence>
  );
}

export default App;
