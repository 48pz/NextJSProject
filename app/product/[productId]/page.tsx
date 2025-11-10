import { Container } from "@mui/material";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";
import { notFound } from "next/navigation";

interface IParams {
    productId?: string
}

const Product = async ({ params }: { params: IParams }) => {
    const {productId} = await params;

    console.log('params', params);
    const product = products.find((item) => item.id === productId);
    if(!product){
        return notFound();
    }

    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={product} />

                <div className="flex flex-col mt-20 gap-4">
                    <div>Add Rating</div>
                    <ListRating product={product} />
                </div>
            </Container>
        </div>
    );
}

export default Product;