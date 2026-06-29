interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

export default function Banner({ title, subtitle, bgImage }: BannerProps) {
  const encodedBg = encodeURI(bgImage);
  return (
    <div className="main">
      <div
        className="h-[380px] pt-[160px] text-white flex justify-center"
        style={{
          backgroundImage: `url('${encodedBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="contain">
          <h2
            className="text-[42px] text-center font-normal mb-[10px] text-white"
            style={{ fontFamily: 'Arial, "Microsoft YaHei"' }}
          >
            {title}
          </h2>
          {subtitle && (
            <h3
              className="text-[24px] font-light text-center uppercase text-white"
              style={{ fontFamily: '"Microsoft yahei"' }}
            >
              {subtitle}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}
