import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Problem } from "./components/sections/Problem";
import { Services } from "./components/sections/Services";
import { Pricing } from "./components/sections/Pricing";
import { Testimonials } from "./components/sections/Testimonials";
import { About } from "./components/sections/About";
import { FAQ } from "./components/sections/FAQ";
import { Booking } from "./components/sections/Booking";

export default function App() {
  return (
    <div className="selection:bg-brand-terracotta/30 selection:text-brand-ink">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Pricing />
        <Testimonials />
        <About />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
