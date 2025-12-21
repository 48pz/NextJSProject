// export const dynamic = "force-dynamic";
// import { Container } from "@mui/material";
// import getOrderById from "@/actions/getOrderById";
// import OrderDetails from "./OrderDetails";
// import NullData from "@/app/components/products/NullData";
// interface IParams {
//   orderId?: string;
// }

// const Order = async ({ params }: { params: Promise<IParams> }) => {
//   const { orderId } = await params;

//   const order = await getOrderById(orderId);

//   if (!order) {
//     return <NullData title="No order"></NullData>;
//   }

//   return (
//     <div className="p-8">
//       <Container>
//         <OrderDetails order={order} />
//       </Container>
//     </div>
//   );
// };

// export default Order;

export const dynamic = "force-dynamic";

import getOrderById from "@/actions/getOrderById";
import NullData from "@/app/components/products/NullData";
import OrderClient from "./OrderClient";

interface IParams {
  orderId?: string;
}

const Order = async ({ params }: { params: Promise<IParams> }) => {
  const { orderId } = await params;

  const order = await getOrderById(orderId);

  if (!order) {
    return <NullData title="No order" />;
  }

  return <OrderClient order={order} />;
};

export default Order;
