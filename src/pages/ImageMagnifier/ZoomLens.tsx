import React, { useRef, useState } from "react";

interface MagnifierProps {
  imageUrl: string;
}

const ZoomLens: React.FC<MagnifierProps> = ({ imageUrl }) => {
  const [lensStyle, setLensStyle] = useState<React.CSSProperties>({});
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageRef.current) {
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const lensWidth = 100; // Width of the lens
      const lensHeight = 100; // Height of the lens
      const zoomSize = 300; // Size of the zoomed image

      const lensX = Math.max(0, Math.min(width - lensWidth, x - lensWidth / 2));
      const lensY = Math.max(
        0,
        Math.min(height - lensHeight, y - lensHeight / 2)
      );

      setLensStyle({
        left: `${lensX}px`,
        top: `${lensY}px`,
        width: `${lensWidth}px`,
        height: `${lensHeight}px`,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: `${zoomSize}px ${zoomSize}px`,
        backgroundPosition: `-${(lensX * zoomSize) / width}px -${
          (lensY * zoomSize) / height
        }px`,
        display: "block",
      });

      setZoomStyle({
        display: "block",
        left: `${lensX + lensWidth + 10}px`,
        top: `${lensY}px`,
        width: `${zoomSize}px`,
        height: `${zoomSize}px`,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: `${zoomSize * 2}px ${zoomSize * 2}px`,
        backgroundPosition: `-${(lensX * zoomSize) / width}px -${
          (lensY * zoomSize) / height
        }px`,
        position: "absolute",
        border: "1px solid #ddd",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      });
    }
  };

  const handleMouseEnter = () => {
    setZoomStyle((prev) => ({
      ...prev,
      display: "block",
    }));
  };

  const handleMouseLeave = () => {
    setZoomStyle((prev) => ({
      ...prev,
      display: "none",
    }));
  };

  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt="Product"
        ref={imageRef}
        className="w-full h-auto object-cover"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div className="absolute" style={lensStyle} />
      <div className="absolute" style={zoomStyle} />
    </div>
  );
};

export default ZoomLens;
