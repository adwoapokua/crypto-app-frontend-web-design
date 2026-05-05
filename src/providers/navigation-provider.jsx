import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import  Learn  from "../pages/Learn";
import  Home  from "../pages/Home";
import  SignUp from "../pages/SignUp";
import  SignIn  from "../pages/SignIn";
import Explore from "../pages/Explore";
import UserProfile from "../pages/UserProfile";
import Crypto from "../pages/Crypto";
import Gainers from "../pages/Gainers";
import NewListings from "../pages/NewListings";
import AddCrypto from "../pages/AddCrypto";
import ProtectedRoute from "../components/layout/ProtectedRoute";

export function NavigationProvider(){
    return(
       <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/user" element={<ProtectedRoute><UserProfile /></ProtectedRoute>}/> 
            <Route path="/crypto" element={<ProtectedRoute><Crypto /></ProtectedRoute>} />
            <Route path="/crypto/gainers" element={<ProtectedRoute><Gainers /></ProtectedRoute>} />
            <Route path="/crypto/new" element={<ProtectedRoute><NewListings /></ProtectedRoute>} />
            <Route path="/crypto/add" element={<ProtectedRoute><AddCrypto /></ProtectedRoute>} />
            <Route path="/" element={<Navigate to="/crypto" replace />} />
            <Route path="*" element={<Navigate to="/crypto" replace />} />

        </Routes>
       </BrowserRouter>
    )
}