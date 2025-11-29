import { getCurrentUser } from "@/actions/getCurrentUser";
import { Review } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { comment, rating, product, userId } = body;

    const deliveredOrder = currentUser?.orders.some(
      (order) =>
        order.products.find((item) => item.id === product.id) &&
        order.deliveryStatus === "delivered"
    );

    const userReview = product?.reviews.find((review: Review) => {
      return review.userId === currentUser.id;
    });

    if (userReview) {
      return NextResponse.json(
        { error: "Product already reviewed" },
        { status: 400 }
      );
    }

    if (!deliveredOrder) {
      return NextResponse.json(
        { error: "Product not delivered yet" },
        { status: 403 }
      );
    }

    const review = await prisma?.review.create({
      data: {
        comment,
        rating,
        productId: product.id,
        userId,
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("POST /api/review error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
