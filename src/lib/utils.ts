import { CURRENCY_CONVERTER } from "@/config/products";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "INR",
  });

  return formatter.format(price * CURRENCY_CONVERTER);
};
