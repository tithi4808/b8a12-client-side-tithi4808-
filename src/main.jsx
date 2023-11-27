import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './assets/Roots/Roots.jsx';
import Home from './assets/Components/Homepage/Home/Home.jsx';
import JoinAsEmployee from './assets/Components/WithoutLogin/Pages/JoinAsEmployeePage/JoinAsEmployee.jsx';
import JoinAsAdmin from './assets/Components/WithoutLogin/Pages/JoinAsAdmin/JoinAsAdmin.jsx';
import Login from './assets/Components/WithoutLogin/Pages/Login/Login.jsx';
import MyAsset from './assets/Components/EmployeeLogin/Pages/MyAssetPage/MyAsset.jsx';
import MyTeam from './assets/Components/EmployeeLogin/Pages/My Team/MyTeam.jsx';
import RequestForAnAsset from './assets/Components/EmployeeLogin/Pages/RequestForAnAsset/RequestForAnAsset.jsx';
import MakeCustomRequest from './assets/Components/EmployeeLogin/Pages/MakeCustomRequest/MakeCustomRequest.jsx';
import EmployeeProfile from './assets/Components/EmployeeLogin/Pages/EmployeeProfile/EmployeeProfile.jsx';
import AssetList from './assets/Components/AdminLogin/Pages/AssetList/AssetList.jsx';
import AddAsset from './assets/Components/AdminLogin/Pages/AddAsset/AddAsset.jsx';
import AllRequest from './assets/Components/AdminLogin/Pages/AllRequest/AllRequest.jsx';
import CustomRequestList from './assets/Components/AdminLogin/Pages/CustomRequestList/CustomRequestList.jsx';
import MyEmployeeList from './assets/Components/AdminLogin/Pages/MyEmployeeList/MyEmployeeList.jsx';
import AddAnEmployee from './assets/Components/AdminLogin/Pages/AddAnEmployee/AddAnEmployee.jsx';
import AdminProfile from './assets/Components/AdminLogin/Pages/AdminProfile/AdminProfile.jsx';
import PaymentPage from './assets/Components/Shared/Pages/PaymentPage/PaymentPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/joinAsEmployee",
        element:<JoinAsEmployee></JoinAsEmployee>
      },
      {
        path:"/JoinAsAdmin",
        element:<JoinAsAdmin></JoinAsAdmin>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/MyAssets",
        element:<MyAsset></MyAsset>
      },
      {
        path:"/MyTeam",
        element:<MyTeam></MyTeam>
      },
      {
        path:"/RequestForAnAsset",
        element:<RequestForAnAsset></RequestForAnAsset>
      },
      {
        path:"/MakeCustomRequest",
        element:<MakeCustomRequest></MakeCustomRequest>
      },
      {
        path:"/EmployeeProfile",
        element:<EmployeeProfile></EmployeeProfile>
      },
      {
        path:"/AssetList",
        element:<AssetList></AssetList>
      },
      {
        path:"/AddAnAsset",
        element:<AddAsset></AddAsset>
      },{
        path:"/AllRequest",
        element:<AllRequest></AllRequest>
      },
      {
        path:"/CustomRequestList",
        element:<CustomRequestList></CustomRequestList>
      },
      {
        path:"/MyEmployeeList",
        element:<MyEmployeeList></MyEmployeeList>
      },
      {
        path:"/AddAnEmployee",
        element:<AddAnEmployee></AddAnEmployee>
      },
      {
        path:"/AdminProfile",
        element:<AdminProfile></AdminProfile>
      },
      {
        path:"/PaymentPage",
        element:<PaymentPage></PaymentPage>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
