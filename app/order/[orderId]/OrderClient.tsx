"use client";

import { Container } from "@mui/material";
import OrderDetails from "./OrderDetails";
import { Order } from "@prisma/client";

interface Props {
  order: Order;
}

const OrderClient: React.FC<Props> = ({ order }) => {
  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default OrderClient;
