import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loader from "../components/loader";
import Login from "../pages/login";
import Signup from "../pages/sign-up";


const Movies = lazy(() => import("../pages/home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Payments = lazy(() => import("../pages/payments"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/My-list" element={<div>My List Page - Coming Soon!</div>} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/login" element={<Login />} />
        <Route path= "/Signup" element={<Signup />} />
      </Routes>
    </Suspense>
  );
}