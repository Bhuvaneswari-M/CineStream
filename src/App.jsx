import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/navbar";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <main className="content-area">
      <AppRoutes />
      </main>

    </BrowserRouter>
  );
}