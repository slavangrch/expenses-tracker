import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Auth} from "./pages/Auth";


function App() {
  const router = createBrowserRouter([{path: '/auth', element: <Auth></Auth>}])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;