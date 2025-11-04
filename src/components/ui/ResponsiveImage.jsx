import React, { useRef, useState } from "react";
import { cn } from "./utils"; 

const ResponsiveImage = ({ src, alt }) => {
  const imgRef = useRef(null);
  const [isLarge, setIsLarge] = useState(false);

  const handleLoad = () => {
    if (imgRef.current) {
      const { naturalHeight, naturalWidth } = imgRef.current;

      // 👇 Define cuándo consideras que es "grande"
      if (naturalHeight > 600 || naturalWidth > 1000) {
        setIsLarge(true);
      }
    }
  };

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt || "blog image"}
      onLoad={handleLoad}
      className={cn(
        "w-full rounded-2xl shadow-md mb-6 transition-all duration-300",
        isLarge ? "max-h-[600px] object-cover" : "h-auto object-contain"
      )}
    />
  );
};

export default ResponsiveImage;
