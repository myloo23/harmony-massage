import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const baseProps = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

export const IconMenu = ({ size = 24, ...props }: IconProps) => (
  <svg {...baseProps(size)} {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const IconClose = ({ size = 24, ...props }: IconProps) => (
  <svg {...baseProps(size)} {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const IconPhone = ({ size = 24, ...props }: IconProps) => (
  <svg {...baseProps(size)} {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.8 2.8a2 2 0 0 1-.5 2.1L8.2 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 1.8.7 2.8.8a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const IconArrowRight = ({ size = 24, ...props }: IconProps) => (
  <svg {...baseProps(size)} {...props}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const IconCheckCircle = ({ size = 24, ...props }: IconProps) => (
  <svg {...baseProps(size)} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.3 2.5L15.8 9" />
  </svg>
);
