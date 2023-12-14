import { Posts } from './pages/Posts/index.tsx';
import { Home } from './pages/index.tsx';
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/posts",
    element: <Posts/>,
  },
  {
    path: "/",
    element: <Home/>
  },
]);
