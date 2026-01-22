import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loader from "../components/Loader";
import Login from "../pages/login";
import Signup from "../pages/sign-up";

const Movies = lazy(() => import("../pages/home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Payments = lazy(() => import("../pages/Payments"));

export default function AppRoutes({ movies, loading }) {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Movies movies={movies} loading={loading} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/my-list" element={<div>My List Page - Coming Soon!</div>} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Suspense>
  );
}
