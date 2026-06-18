"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({
  images,
  alt,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <div className="overflow-hidden rounded-4xl bg-[#EFE7DC]">
        <img
          src={selectedImage}
          alt={alt}
          className="
            h-125
            w-full
            object-cover
            transition-all
            duration-300
            md:h-162.5
          "
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-6 flex gap-4">

        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            onClick={() => setSelectedImage(image)}
            className={`
              overflow-hidden
              rounded-xl
              border-2
              transition-all
              duration-300
              ${
                selectedImage === image
                  ? "border-[#B89B7A]"
                  : "border-transparent"
              }
            `}
          >
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className="
                h-20
                w-20
                object-cover
                md:h-24
                md:w-24
              "
            />
          </button>
        ))}

      </div>
    </div>
  );
}