import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import heroImg720 from "./assets/optimized/hero-720.jpg";
import heroImg1080 from "./assets/optimized/hero-1080.jpg";

const preloadHeroImage = () => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = heroImg1080;
  link.setAttribute("imagesrcset", `${heroImg720} 720w, ${heroImg1080} 1080w`);
  link.setAttribute("imagesizes", "(max-width: 768px) 92vw, 45vw");
  link.setAttribute("fetchpriority", "high");
  document.head.appendChild(link);
};

preloadHeroImage();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
