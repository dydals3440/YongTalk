import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/Main/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
