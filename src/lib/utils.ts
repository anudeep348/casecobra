import { CURRENCY_CONVERTER } from "@/config/products";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number, convertCurrency?: boolean) => {
  const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "INR",
  });

  if (!convertCurrency) {
    return formatter.format(price);
  }
  return formatter.format(price * CURRENCY_CONVERTER);
};
