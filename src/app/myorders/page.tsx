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
        <Card key={order.id} className="mb-5 p-4 sm:text-lg md:text-lg">
          <CardHeader className="space-y-0 flex flex-row items-center ">
            <CardTitle className="mr-2.5">Oder ID: </CardTitle>
            <CardDescription className="pt-0">{order.id}</CardDescription>
          </CardHeader>

          <div className="h-[1px] w-full bg-gray-300" />
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mt-8">
            <div className="p-16 md:p-0 xl:p-10">
              <Phone imgSrc={order.configuration.croppedImageUrl!} />
            </div>

            <div className=" grid col-span-2 xl:mt-5 ">
              <div className="m-3 p-3">
                <h3 className="font-semibold  mb-1">Order Details</h3>

                <div className="h-[1px] w-full bg-gray-300 mb-4" />

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Color: </span>
                    <p>{order.configuration.color}</p>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Model: </span>
                    <p>{order.configuration.model}</p>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Material: </span>
                    <p>{order.configuration.material}</p>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Finish: </span>
                    <p>{order.configuration.finish}</p>
                  </div>

                  <div className="hidden xl:flex justify-between mt-2">
                    <span className="font-medium">Shipping Address: </span>
                    <div className="text-base">
                      <p>{order.shippingAddress?.street} </p>
                      <p>{order.shippingAddress?.state} </p>
                      <p>{order.shippingAddress?.country} </p>
                      <p>{order.shippingAddress?.postalCode}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          <div className="h-[1px] w-full bg-gray-300" />

          <CardFooter className="flex flex-col mt-5 gap-3">
            <div className=" w-full flex justify-between">
              <p className="font-medium ">Current Status:</p>
              {order.status}
            </div>
            <div className="w-full flex justify-between">
              <p className="font-medium">Amount Paid:</p>
              {formatPrice(order.amount, false)}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Page;
