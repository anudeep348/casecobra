import Image from "next/image";
import { HTMLAttributes } from "react";

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function Img({ className, src, alt, width, height, ...props }: ImageProps) {
  return (
    <Image
      className={
        className
          ? className
          : "inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 "
      }
      src={src}
      alt={alt}
      width={width ? width : 1000}
      height={height ? height : 1000}
      {...props}
    />
  );
}

export default Img;
