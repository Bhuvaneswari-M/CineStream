import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
    <header className="hearder">
      <nav style={{ padding: "10px", background: "#333", color: "#fff", display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/payments" style={{ color: "#fff", textDecoration: "none" }}>Go to Payment</Link>
      </nav>
      </header>
      <main className="content-area">
      <AppRoutes />
      </main>

    </BrowserRouter>
  );
}