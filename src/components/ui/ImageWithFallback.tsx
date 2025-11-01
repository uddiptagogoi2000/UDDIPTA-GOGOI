"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getPlaceholderImage, PLACEHOLDER_IMAGE_SVG, PLACEHOLDER_AVATAR_SVG } from "@/lib/image-utils";

type ImageWithFallbackProps = {
  src: string | undefined;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  type?: "image" | "avatar";
};

export function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  sizes,
  priority,
  type = "image",
}: ImageWithFallbackProps) {
  const imgWidth = width || (type === "avatar" ? 400 : 800);
  const imgHeight = height || (type === "avatar" ? 400 : 600);
  
  const placeholderUrl = getPlaceholderImage(type, imgWidth, imgHeight);
  const svgPlaceholder = type === "avatar" 
    ? PLACEHOLDER_AVATAR_SVG(imgWidth) 
    : PLACEHOLDER_IMAGE_SVG(imgWidth, imgHeight);
  
  const [imgSrc, setImgSrc] = useState<string>(() => {
    if (!src || src.trim() === "" || src.startsWith("/images/")) {
      return placeholderUrl;
    }
    return src;
  });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (src && src.trim() !== "" && !src.startsWith("/images/") && src !== imgSrc) {
      setImgSrc(src);
      setHasError(false);
    } else if (!src || src.trim() === "" || src.startsWith("/images/")) {
      setImgSrc(placeholderUrl);
      setHasError(false);
    }
  }, [src, imgSrc, placeholderUrl]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(svgPlaceholder);
    }
  };

  if (imgSrc.startsWith("data:")) {
    if (fill) {
      return (
        <img
          src={imgSrc}
          alt={alt}
          className={className}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      );
    }
    return (
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        width={imgWidth}
        height={imgHeight}
      />
    );
  }

  const imageProps = fill
    ? {
        fill: true,
        sizes: sizes || "100vw",
      }
    : {
        width: imgWidth,
        height: imgHeight,
      };

  return (
    <Image
      {...imageProps}
      src={imgSrc}
      alt={alt}
      className={className}
      priority={priority}
      onError={handleError}
      unoptimized={imgSrc.includes("picsum.photos") || imgSrc.includes("placeholder") || imgSrc.includes("dummyimage")}
    />
  );
}