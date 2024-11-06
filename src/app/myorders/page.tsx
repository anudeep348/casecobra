import { Suspense } from "react";
import MyOrders from "./MyOrders";
import { Loader2 } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen w-3/4 max-w-4xl mx-auto flex flex-col mt-8">
      <h3 className="text-xl mb-6 md:mb-4 font-semibold text-green-600 self-start">
        Your Orders
        <Suspense
          fallback={
            <p className="size-2 animate-spin duration-300">
              <Loader2 />
            </p>
          }
        >
          <MyOrders />
        </Suspense>
      </h3>
    </div>
  );
};

export default Page;
