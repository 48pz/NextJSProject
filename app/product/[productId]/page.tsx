// export const dynamic = "force-dynamic";
// import { Container } from "@mui/material";
// import ProductDetails from "./ProductDetails";
// import ListRating from "./ListRating";
// import getProductById from "@/actions/getProductById";
// import NullData from "@/app/components/products/NullData";
// import AddRating from "./AddRating";
// import { getCurrentUser } from "@/actions/getCurrentUser";

// interface IParams {
//   productId?: string;
// }

// interface ProductProps {
//   params: Promise<IParams>;
// }

// const Product = async ({ params }: ProductProps) => {
//   const { productId } = await params;
//   const product = await getProductById(productId);
//   const user = await getCurrentUser();

//   if (!product) {
//     return <NullData title="Oops! Product with he given id does not exist" />;
//   }

//   return (
//     <div className="p-8">
//       <Container>
//         <ProductDetails product={product} />

//         <div className="flex flex-col mt-20 gap-4">
//           <AddRating product={product} user={user} />
//           <ListRating product={product} />
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Product;

export const dynamic = "force-dynamic";

import getProductById from "@/actions/getProductById";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/products/NullData";
import ProductClient from "./ProductClient";

interface IParams {
  productId?: string;
}

interface ProductProps {
  params: Promise<IParams>;
}

const Product = async ({ params }: ProductProps) => {
  const { productId } = await params;
  const product = await getProductById(productId);
  const user = await getCurrentUser();

  if (!product) {
    return <NullData title="Oops! Product with the given id does not exist" />;
  }

  return <ProductClient product={product} user={user} />;
};

export default Product;
