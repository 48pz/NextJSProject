'use client';

import Image from "next/image";
import { CartProductType, SelectedImgType } from "./ProductDetails";

interface ProductImageProps {
    cartProduct: CartProductType,
    product: any,
    handleColorSelected: (value: SelectedImgType) => void;

}

const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct,
    product,
    handleColorSelected
}) => {
    return (<div className="
        grid
        grid-cols-6
        gap-2
        h-full
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
    
    ">
        <div className="flex
        flex-col
        items-center
        justify-center
        gap-4
        cursor-pointer
        border
        border-pink
        h-full
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
        ">
            {product.images.map((image: SelectedImgType) => {
                return (<div key={image.color} onClick={() => {
                    handleColorSelected(image);
                }} className={`relative w-[80%] aspect-square rounded border-accent ${cartProduct.selectedImg.color === image.color ? "border-[1.5px]" : "border-none"}`}>
                    <Image src={image.image}
                        alt={image.color}
                        fill
                        className="object-contain" />
                </div>);
            })}
        </div>
        <div className="col-span-5 relative aspect-square">
            <Image fill src={cartProduct.selectedImg.image} alt={cartProduct.name} className="w-full
            h-full
            object-contain
            max-h-[500px]
            min-h-[300px]
            sm:min-h-[400px]
            "></Image>

        </div>
    </div>);
}

export default ProductImage;