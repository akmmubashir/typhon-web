import React from "react";

type Props = {
  title?: string | React.ReactNode;
  tagLine?: string;
  img?: string;
  titleClass?: string;
  tagLineClass?: string;
  fullscreen?: boolean;
};

const Banner = (props: Props) => {
  return (
    <div
      className={`relative ${
        props.fullscreen ? "h-screen" : "h-[400px]"
      } flex items-center justify-center mt-[-120px] max-lg:-mt-20 w-full`}
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2.5 p-5">
        <h1
          className={`text-[40px] max-lg:text-[24px] text-white font-bold ${props.titleClass}`}
        >
          {props.title}
        </h1>
        {props.tagLine ? (
          <h2
            className={`text-white text-[24px] max-lg:text-[16px] font-medium ${props.tagLineClass}`}
          >
            {props.tagLine}
          </h2>
        ) : null}
      </div>
    </div>
  );
};

export default Banner;
