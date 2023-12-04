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
import Authprovider from './assets/Components/AuthProvider.jsx/AuthProvider.jsx';
import PrivateRoute from './assets/Components/PrivateRoute/PrivateRoute.jsx';
import AdminRoute from './assets/Components/AdminRoute/AdminRoute.jsx';

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
        element:<PrivateRoute><MyAsset></MyAsset></PrivateRoute>,
        loader:()=>fetch('https://b8a12-server-side-tithi4808.vercel.app/requestassets')
      },
      {
        path:"/MyTeam",
        element:<PrivateRoute><MyTeam></MyTeam></PrivateRoute>,
        loader:()=>fetch('https://b8a12-server-side-tithi4808.vercel.app/fullteams')
      },
      {
        path:"/RequestForAnAsset",
        element:<PrivateRoute><RequestForAnAsset></RequestForAnAsset></PrivateRoute>
      },
      {
        path:"/MakeCustomRequest",
        element:<PrivateRoute><MakeCustomRequest></MakeCustomRequest></PrivateRoute>
      },
      {
        path:"/EmployeeProfile",
        element:<PrivateRoute><EmployeeProfile></EmployeeProfile></PrivateRoute>
      },
      {
        path:"/AssetList",
        element:<AdminRoute><AssetList></AssetList></AdminRoute>,
        loader:()=>fetch('https://b8a12-server-side-tithi4808.vercel.app/allassets')
      },
      {
        path:"/AddAnAsset",
        element:<AdminRoute><AddAsset></AddAsset></AdminRoute>
      },{
        path:"/AllRequest",
        element:<AdminRoute><AllRequest></AllRequest></AdminRoute>
      },
      {
        path:"/CustomRequestList",
        element:<AdminRoute><CustomRequestList></CustomRequestList></AdminRoute>
      },
      {
        path:"/MyEmployeeList",
        element:<AdminRoute><MyEmployeeList></MyEmployeeList></AdminRoute>
      },
      {
        path:"/AddAnEmployee",
        element:<AdminRoute><AddAnEmployee></AddAnEmployee></AdminRoute>
      },
      {
        path:"/AdminProfile",
        element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
      },
      {
        path:"/payment/:packageType",
        element:<AdminRoute><PaymentPage></PaymentPage></AdminRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider><RouterProvider router={router} /></Authprovider>
  </React.StrictMode>,
)
