"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const router = useRouter();

    // array.reduce((acc, cur, idx, arr) => {
    // return 新的累计值
    // }, initialValue)
    const productRating = data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / data.reviews.length

    return (
        <div onClick={() => router.push(`/product/${data.id}`)}
            className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
            <div className="flex flex-col items-center w-full gap-1"></div>
            <div className="aspect-square overflow-hidden relative w-full">
                <Image className="w-full h-full object-contain" fill src={data.images[0].image} alt={data.name} />
            </div>
            <div className="mt-4">
                {truncateText(data.name)}
            </div>
            <div>
                <Rating value={productRating} readOnly />
            </div>
            <div>{data.reviews.length} reviews</div>
            <div className="font-semibold">{formatPrice(data.price)}</div>
        </div>
    );
}

export default ProductCard;