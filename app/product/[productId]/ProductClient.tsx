"use client";

import { Container } from "@mui/material";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import AddRating from "./AddRating";
import { ProductWithReviews } from "@/actions/getProductById";
import { SafeUser } from "@/types";

interface Props {
  product: ProductWithReviews;
  user: SafeUser  | null;
}

const ProductClient: React.FC<Props> = ({ product, user }) => {
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />

        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={product} user={user} />
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default ProductClient;
