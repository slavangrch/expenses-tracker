import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Auth} from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { Expenses } from "./pages/Expenses";
import { Incomes } from "./pages/Incomes";
import { Menu } from "./components/Menu/Menu";

function App() {
  const router = createBrowserRouter([
    { path: '/auth', element: <Auth></Auth> },
    { path: '/', element: <Menu></Menu>, children: [
      { path: 'dashboard', element: <Dashboard></Dashboard> }, 
      { path: 'expenses', element: <Expenses></Expenses> },
      { path: 'incomes', element: <Incomes></Incomes> }
    ]}
    
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;