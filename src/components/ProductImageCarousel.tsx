"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ProductImageCarouselProps = {
  images: string[];
  title: string;
};

export function ProductImageCarousel({ images, title }: ProductImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageCount = images.length;
  const activeImage = images[activeIndex];

  if (!activeImage) {
    return null;
  }

  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + imageCount) % imageCount);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % imageCount);
  };

  return (
    <div className="bg-[var(--color-site-light-bg)] p-[18px]">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-white">
        <Image
          src={activeImage}
          alt={`${title} ${activeIndex + 1}`}
          width={520}
          height={520}
          sizes="(min-width: 1024px) 430px, 100vw"
          className="max-h-full w-full object-contain p-[8px]"
          priority={activeIndex === 0}
        />
        {imageCount > 1 && (
          <>
            <button
              type="button"
              onClick={goPrevious}
              className="absolute left-[12px] top-1/2 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center bg-white/90 text-[#26302d] shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-colors hover:bg-[var(--color-site-primary)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-site-primary)]"
              aria-label="上一张图片"
            >
              <ChevronLeft className="h-[24px] w-[24px]" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-[12px] top-1/2 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center bg-white/90 text-[#26302d] shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-colors hover:bg-[var(--color-site-primary)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-site-primary)]"
              aria-label="下一张图片"
            >
              <ChevronRight className="h-[24px] w-[24px]" aria-hidden="true" />
            </button>
          </>
        )}
      </div>
      {imageCount > 1 && (
        <div className="mt-[12px] flex items-center justify-center gap-[8px]" aria-label="图片轮播位置">
          {images.map((image, imageIndex) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(imageIndex)}
              className={`h-[8px] transition-all ${
                activeIndex === imageIndex ? "w-[28px] bg-[var(--color-site-primary)]" : "w-[8px] bg-[#cdd9d5] hover:bg-[var(--color-site-green)]"
              }`}
              aria-label={`查看第 ${imageIndex + 1} 张图片`}
              aria-current={activeIndex === imageIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
