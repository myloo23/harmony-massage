import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { HomePage } from "./pages/HomePage";

const Footer = lazy(() => import("./components/layout/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="selection:bg-brand-terracotta/30 selection:text-brand-ink">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Suspense fallback={<section className="min-h-70 bg-brand-green" aria-busy="true" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
