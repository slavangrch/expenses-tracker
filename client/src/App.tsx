import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import {Auth} from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { Expenses } from "./pages/Expenses";
import { Incomes } from "./pages/Incomes";
import { Menu } from "./components/Menu/Menu";
import {Provider} from 'react-redux'
import store from "./store/index";


function App() {
  const router = createBrowserRouter([
    { path: '/auth', element: <Auth></Auth> },
    { path: '/', element: <Menu></Menu>, children: [
      {index: true, element: <Dashboard></Dashboard>},
      { path: 'dashboard', element: <Dashboard></Dashboard> }, 
      { path: 'expenses', element: <Expenses></Expenses> },
      { path: 'incomes', element: <Incomes></Incomes> }
    ]},
    // {path: '*', element: <Navigate to='/'></Navigate>}
    
  ])

  return (
    <Provider store={store}><RouterProvider router={router}></RouterProvider></Provider>
    
  );
}

export default App;