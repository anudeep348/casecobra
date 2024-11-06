"use server";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getOrders = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const orders = await db.order.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    where: {
      userId: user?.id,
      isPaid: true,
    },
    include: {
      configuration: true,
      shippingAddress: true,
    },
  });

  if (!user) {
    return false;
  }

  return orders ?? null;
};
