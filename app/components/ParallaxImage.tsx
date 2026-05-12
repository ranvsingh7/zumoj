"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ParallaxImageProps = ImageProps & {
  wrapperClassName?: string;
  imageClassName?: string;
};

export default function ParallaxImage({
  wrapperClassName = "",
  imageClassName = "",
  ...imageProps
}: ParallaxImageProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${wrapperClassName}`}>
      <Image {...imageProps} className={imageClassName} />
    </div>
  );
}
