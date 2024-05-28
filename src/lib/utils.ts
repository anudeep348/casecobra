import { CURRENCY_CONVERTER } from "@/config/products";
import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number, convertCurrency?: boolean) => {
  const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "INR",
  });

  if (convertCurrency === false) {
    return formatter.format(price);
  }
  return formatter.format(price * CURRENCY_CONVERTER);
};

export function constructMetaData({
  title = "CaseCobra - custom high-quality phone cases",
  description = "Create custom high-quality phone cases in seconds",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@anudeepsirigir1",
    },
    icons,
    metadataBase: new URL("https://casecobra-iota.vercel.app/"),
  };
}
