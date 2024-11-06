import Img from "@/components/Img";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { buttonVariants } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutProduct() {
  return (
    <section>
      <MaxWidthWrapper className="py-24 overflow-hidden">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Upload your photo and get{" "}
              <span className="relative px-2 bg-green-600 text-white">
                your own case{" "}
              </span>{" "}
              now
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
            <Img
              src="/arrow.png"
              width={125}
              alt="arrow pointing to phone case"
              className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 md:left-1/2 -translate-x-1/2 z-10 rotate-90 md:rotate-0"
            />
            <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
              <Img
                src="/horse.jpg"
                alt="women kissing her horse"
                className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
              />
            </div>

            <Phone className="w-60" imgSrc="/horse_phone.jpg" />
          </div>
        </div>

        <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit ">
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
            High-quality silicon material
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
            Scratch and finger print resistant
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
            Wireless charging compactable
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />5 year
            print warranty
          </li>

          <li className="flex justify-center">
            <Link
              className={buttonVariants({
                size: "lg",
                className: "mx-auto mt-8",
              })}
              href="/configure/upload"
            >
              Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </li>
        </ul>
      </MaxWidthWrapper>
    </section>
  );
}
