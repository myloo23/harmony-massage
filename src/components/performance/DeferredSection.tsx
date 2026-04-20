import { type ComponentType, useEffect, useRef, useState } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

type DeferredSectionProps = {
  id?: string;
  load: Loader;
  fallbackClassName?: string;
  rootMargin?: string;
};

const DEFAULT_ROOT_MARGIN = "800px 0px";

export const DeferredSection = ({
  id,
  load,
  fallbackClassName = "min-h-[380px]",
  rootMargin = DEFAULT_ROOT_MARGIN,
}: DeferredSectionProps) => {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const placeholderRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (shouldLoad) {
      return;
    }

    const placeholder = placeholderRef.current;
    if (!placeholder || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(placeholder);
    return () => observer.disconnect();
  }, [rootMargin, shouldLoad]);

  useEffect(() => {
    if (Component || !shouldLoad) {
      return;
    }

    let cancelled = false;

    load().then((module) => {
      if (!cancelled) {
        setComponent(() => module.default);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [Component, load, shouldLoad]);

  useEffect(() => {
    if (Component || shouldLoad) {
      return;
    }

    const idleCallback = (window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    }).requestIdleCallback;

    if (idleCallback) {
      const idleId = idleCallback(() => setShouldLoad(true), { timeout: 3000 });
      return () => {
        (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(
          idleId,
        );
      };
    }

    const timeoutId = window.setTimeout(() => setShouldLoad(true), 3000);
    return () => window.clearTimeout(timeoutId);
  }, [Component, shouldLoad]);

  if (!Component) {
    return <section id={id} ref={placeholderRef} className={fallbackClassName} aria-busy="true" />;
  }

  return <Component />;
};
