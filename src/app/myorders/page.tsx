"use client";

import { useQuery } from "@tanstack/react-query";
import { getOrders } from "./actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Phone from "@/components/Phone";
import { notFound } from "next/navigation";
import { formatPrice } from "@/lib/utils";

const Page = () => {
  const { data } = useQuery({
    queryKey: ["current-user-orders"],
    queryFn: async () => await getOrders(),
  });

  if (data === false) {
    return notFound();
  }

  return (
    <div className="min-h-screen w-3/4 max-w-4xl mx-auto flex flex-col mt-8">
      <h3 className="text-xl mb-3 md:mb-4 font-semibold text-green-600 self-start">
        Your Orders
      </h3>
      {data?.map((order) => (
        <Card
          key={order.id}
          className="mb-8 p-4 text-xs sm:text-sm md:text-lg lg:text-xl"
        >
          <CardHeader className="space-y-0 flex flex-col sm:flex-row sm:items-center ">
            <CardTitle className="mr-0 sm:mr-2.5">Oder ID: </CardTitle>
            <CardDescription className="pt-2 sm:pt-0 md:text-lg">
              {order.id}
            </CardDescription>
          </CardHeader>

          <div className="h-[1px] w-full bg-gray-300" />

          <CardContent className="grid grid-cols-1 md:grid-cols-3 md:gap-5 md:mt-8">
            <div className="p-10 md:p-0 xl:p-10">
              <Phone
                className="rounded-md overflow-hidden"
                imgSrc={order.configuration.croppedImageUrl!}
              />
            </div>

            <div className=" grid col-span-2 xl:mt-5">
              <div className="m-0 p-0 sm:m-3 sm:p-3 ">
                <h3 className="font-semibold  mb-1">Order Details</h3>

                <div className="h-[1px] w-full bg-gray-300 mb-4" />

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Color: </span>
                    <p className="text-gray-600">{order.configuration.color}</p>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Model: </span>
                    <p className="text-gray-600">{order.configuration.model}</p>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Material: </span>
                    <p className="text-gray-600">
                      {order.configuration.material}
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Finish: </span>
                    <p className="text-gray-600">
                      {order.configuration.finish}
                    </p>
                  </div>

                  <div className="hidden xl:flex xl:justify-between mt-4 gap-16">
                    <span className="font-medium">Shipping Address: </span>
                    <div className="text-base mx-auto text-gray-600 flex flex-col">
                      {`${order.shippingAddress?.street} , 
                      ${order.shippingAddress?.state} , 
                      ${order.shippingAddress?.country} ,
                      ${order.shippingAddress?.postalCode}.`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          <div className="h-[1px] w-full bg-gray-300" />

          <CardFooter className="flex flex-col mt-5 gap-5  sm:gap-3">
            <div className=" w-full flex flex-col sm:flex-row gap-1 justify-start sm:justify-between">
              <p className="font-medium ">Current Status:</p>
              <span className="text-gray-600">{order.status}</span>
            </div>
            <div className="w-full flex flex-col gap-1 sm:flex-row justify-between">
              <p className="font-medium">Amount Paid:</p>
              <span className="text-gray-600">
                {formatPrice(order.amount, false)}
              </span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Page;
