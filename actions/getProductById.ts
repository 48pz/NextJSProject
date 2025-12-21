import prisma from "@/libs/prismadb";
import { Prisma } from "@prisma/client";

export type ProductWithReviews = Prisma.ProductGetPayload<{
  include: {
    reviews: {
      include: {
        user: true;
      };
    };
  };
}>;

export default async function getProductById(
  productId?: string
): Promise<ProductWithReviews | null> {
  try {
    if (!productId) return null;
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        reviews: {
          include: {
            user: true,
          },
          orderBy: {
            createdDate: "desc",
          },
        },
      },
    });
    if (!product) {
      return null;
    }
    return product;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error occurred");
  }
}
