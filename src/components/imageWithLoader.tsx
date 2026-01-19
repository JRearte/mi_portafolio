import { useState } from "react";

interface ImageWithLoaderProps {
  src: string;
  alt?: string;
}

export default function ImageWithLoader({ src, alt }: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative inline-block w-[500px] h-[280px] flex-shrink-0
                 rounded-xl border border-stone-800 overflow-hidden"
    >
      {/* Skeleton */}
      {!loaded && (
        <div
          className="absolute inset-0 bg-stone-800 animate-pulse
                     flex items-center justify-center"
        >
          <span className="text-stone-500 text-sm font-ibm-plex-mono">
            Cargando…
          </span>
        </div>
      )}

      {/* Imagen */}
      <img
        src={src}
        alt={alt}
        draggable="false"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500
          ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
