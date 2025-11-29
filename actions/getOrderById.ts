import prisma from "@/libs/prismadb";

export default async function getOrderById(orderId?: string) {
  try {
    if (!orderId) return null;

    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });

    if (!order) return null;
    return order;
  } catch (error: any) {
    throw new Error(error);
  }
}
