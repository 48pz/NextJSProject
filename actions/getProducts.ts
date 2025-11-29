import prisma from "@/libs/prismadb";

export default async function getProducts(
  category?: string,
  searchTerm?: string
) {
  try {
    let searchString = searchTerm;
    if (!searchString) {
      searchString = "";
    }
    let query: any = {};

    if (category) {
      query.category = category;
    }

    const products = await prisma.product.findMany({
      where: {
        ...query,
        OR: [
          {
            name: {
              contains: searchString,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: searchString,
              mode: "insensitive",
            },
          },
        ],
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
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}
