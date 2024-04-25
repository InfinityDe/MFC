import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export const MFC = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clientOnlyContent =
    typeof window !== "undefined" && windowWidth >= 768 ? (
      <div className="relative z-10">
        <ScrollLink
          to="Contacto"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
        >
          <button className="absolute bottom-16 left-[43%] bg-black px-10 py-5 font-body text-sm font-bold hover:bg-white hover:text-black transition duration-200">
            EMPEZAR AHORA
          </button>
        </ScrollLink>
      </div>
    ) : null;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative h-screen">
        <video
          ref={videoRef}
          src="/MFC.mp4"
          autoPlay
          loop
          muted
          className="w-full object-cover"
          style={{ height: "calc(100vh - 10px)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-transparent to-black rotate-180"></div>
      </div>
      {clientOnlyContent}
    </div>
  );
};
