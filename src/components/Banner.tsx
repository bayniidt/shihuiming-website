interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  offsetRight?: boolean;
}

export default function Banner({ title, subtitle, bgImage, offsetRight = false }: BannerProps) {
  const encodedBg = encodeURI(bgImage);
  return (
    <div className="main">
      <div
        className="flex h-[380px] items-center justify-center"
        style={{
          backgroundImage: `url('${encodedBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="contain text-left">
          <div
            className={`banner-copy w-fit max-w-[850px] border-l-[5px] border-[var(--color-site-primary)] bg-white/90 px-[34px] py-[24px] backdrop-blur-[2px] ${offsetRight ? "ml-[70%]" : ""}`}
          >
            <h2 className="mb-[12px] text-[40px] font-bold leading-[1.2] tracking-[2px] text-[#173b35] md:text-[54px]">
              {title}
            </h2>
            {subtitle && (
              <h3 className="text-[22px] font-semibold leading-[1.4] tracking-[3px] text-[#315f56] md:text-[28px]">
                {subtitle}
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
