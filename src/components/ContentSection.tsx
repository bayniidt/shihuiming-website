"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface LabCard {
  image: string;
  title: string;
  delay: string;
}

interface ContentSectionProps {
  title: string;
  text: string;
  cards: LabCard[];
}

export default function ContentSection({ title, text, cards }: ContentSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .youshi-card-img {
          overflow: hidden;
          position: relative;
        }
        .youshi-card-img img {
          width: 100%;
          transition: transform 1.1s;
        }
        .youshi-card-title2 {
          position: absolute;
          bottom: 28px;
          left: 30px;
          color: #ffffff;
          font-size: 22px;
          line-height: 30px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.8s;
        }
        .youshi-card-item:hover .youshi-card-title2 {
          opacity: 1;
          visibility: visible;
        }
      `}</style>

      <div className="w-full bg-[var(--color-site-light-bg)] h-[200px] flex items-center">
        <div className="w1140">
          <h2
            className="text-[40px] font-bold text-[#212121]"
            style={{ fontFamily: '"Microsoft YaHei"' }}
          >
            {title}
          </h2>
        </div>
      </div>

      <div ref={sectionRef} className="pb-[66px]">
        <div className="w1140">
          <div className="mt-[20px]">
            <div
              className="text-[16px] text-[#212121] leading-[30px] mb-[22px] fade-in-up"
              style={{ fontFamily: '"Microsoft YaHei"' }}
              dangerouslySetInnerHTML={{ __html: text }}
            />

            <div className="pt-[28px] -mx-[20px] clearfix">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="float-left w-1/2 fade-in-up"
                  style={{ transitionDelay: card.delay }}
                >
                  <div className="youshi-card-item mx-[20px] pb-[50px]">
                    <div className="youshi-card-img">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={550}
                        height={410}
                        className="w-full h-auto"
                      />
                      <div className="youshi-card-title2">{card.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
