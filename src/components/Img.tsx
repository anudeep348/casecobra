import { HTMLAttributes } from "react";

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt?: string;
}

function Img({ className, src, alt, ...props }: ImageProps) {
  return (
    <img
      className={
        className
          ? className
          : "inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 "
      }
      src={src}
      alt={alt}
      {...props}
    />
  );
}

export default Img;
