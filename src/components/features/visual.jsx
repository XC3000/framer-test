import Image from "next/image";

const Visual = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="max-w-5xl px-4">{children}</div>
    </div>
  );
};

export const MusicVisual = () => {
  return (
    <Visual>
      <div className="">
        <Image
          src="/features/window-spotify.webp"
          alt="window-spotify"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Visual>
  );
};
