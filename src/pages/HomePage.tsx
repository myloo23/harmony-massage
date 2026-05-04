import { lazy, Suspense } from "react";
import { Hero } from "../components/sections/Hero";

const Problem = lazy(() => import("../components/sections/Problem").then(m => ({ default: m.Problem })));
const Services = lazy(() => import("../components/sections/Services").then(m => ({ default: m.Services })));
const Pricing = lazy(() => import("../components/sections/Pricing").then(m => ({ default: m.Pricing })));
const Trust = lazy(() => import("../components/sections/Trust").then(m => ({ default: m.Trust })));
const Testimonials = lazy(() => import("../components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const About = lazy(() => import("../components/sections/About").then(m => ({ default: m.About })));
const Booking = lazy(() => import("../components/sections/Booking").then(m => ({ default: m.Booking })));
const FAQ = lazy(() => import("../components/sections/FAQ").then(m => ({ default: m.FAQ })));

export const HomePage = () => (
  <main>
    <Hero />
    <Suspense fallback={<section className="min-h-[420px]" aria-busy="true" />}>
      <Problem />
    </Suspense>
    <Suspense fallback={<section id="services" className="min-h-[760px]" aria-busy="true" />}>
      <Services />
    </Suspense>
    <Suspense fallback={<section id="pricing" className="min-h-[520px]" aria-busy="true" />}>
      <Pricing />
    </Suspense>
    <Suspense fallback={<section className="min-h-[420px]" aria-busy="true" />}>
      <Trust />
    </Suspense>
    <Suspense fallback={<section className="min-h-[420px]" aria-busy="true" />}>
      <Testimonials />
    </Suspense>
    <Suspense fallback={<section id="about" className="min-h-[520px]" aria-busy="true" />}>
      <About />
    </Suspense>
    <Suspense fallback={<section id="booking" className="min-h-[720px]" aria-busy="true" />}>
      <Booking />
    </Suspense>
    <Suspense fallback={<section id="faq" className="min-h-[420px]" aria-busy="true" />}>
      <FAQ />
    </Suspense>
  </main>
);
