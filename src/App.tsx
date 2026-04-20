import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { DeferredSection } from "./components/performance/DeferredSection";

const loadProblem = () =>
  import("./components/sections/Problem").then((module) => ({ default: module.Problem }));
const loadServices = () =>
  import("./components/sections/Services").then((module) => ({ default: module.Services }));
const loadPricing = () =>
  import("./components/sections/Pricing").then((module) => ({ default: module.Pricing }));
const loadTrust = () =>
  import("./components/sections/Trust").then((module) => ({ default: module.Trust }));
const loadTestimonials = () =>
  import("./components/sections/Testimonials").then((module) => ({
    default: module.Testimonials,
  }));
const loadAbout = () =>
  import("./components/sections/About").then((module) => ({ default: module.About }));
const loadBooking = () =>
  import("./components/sections/Booking").then((module) => ({ default: module.Booking }));
const loadFaq = () =>
  import("./components/sections/FAQ").then((module) => ({ default: module.FAQ }));
const loadFooter = () =>
  import("./components/layout/Footer").then((module) => ({ default: module.Footer }));

export default function App() {
  return (
    <div className="selection:bg-brand-terracotta/30 selection:text-brand-ink">
      <Navbar />
      <main>
        <Hero />
        <DeferredSection load={loadProblem} fallbackClassName="min-h-[420px]" />
        <DeferredSection
          id="services"
          load={loadServices}
          fallbackClassName="min-h-[760px]"
          rootMargin="900px 0px"
        />
        <DeferredSection
          id="pricing"
          load={loadPricing}
          fallbackClassName="min-h-[520px]"
          rootMargin="950px 0px"
        />
        <DeferredSection load={loadTrust} fallbackClassName="min-h-[420px]" />
        <DeferredSection load={loadTestimonials} fallbackClassName="min-h-[420px]" />
        <DeferredSection
          id="about"
          load={loadAbout}
          fallbackClassName="min-h-[520px]"
          rootMargin="1000px 0px"
        />
        <DeferredSection
          id="booking"
          load={loadBooking}
          fallbackClassName="min-h-[720px]"
          rootMargin="1100px 0px"
        />
        <DeferredSection
          id="faq"
          load={loadFaq}
          fallbackClassName="min-h-[420px]"
          rootMargin="1200px 0px"
        />
      </main>
      <DeferredSection load={loadFooter} fallbackClassName="min-h-[280px] bg-brand-green" />
    </div>
  );
}
