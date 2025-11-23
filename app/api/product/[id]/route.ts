import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, context: any) {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }

  const { id } = await context.params;
  const product = await prisma?.product.delete({
    where: { id: id },
  });

  return NextResponse.json(product);
}
