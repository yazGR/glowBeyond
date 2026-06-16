"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({
  images,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(
    images[0]
  );

  return (
    <div>

      <img
        src={selectedImage}
        alt=""
        className="w-full rounded-4xl"
      />

      <div className="mt-4 flex gap-4">

        {images.map((image) => (
          <button
            key={image}
            onClick={() =>
              setSelectedImage(image)
            }
            className="overflow-hidden rounded-xl"
          >
            <img
              src={image}
              alt=""
              className="h-24 w-24 object-cover"
            />
          </button>
        ))}

      </div>

    </div>
  );
}