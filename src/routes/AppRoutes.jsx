import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loader from "../components/loader";


const Home = lazy(() => import("../pages/home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Payments = lazy(() => import("../pages/payments"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </Suspense>
  );
}