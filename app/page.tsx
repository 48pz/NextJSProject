export const revalidate = 0;

import getProducts from "@/actions/getProducts";
import Container from "./components/Container";
import NullData from "./components/products/NullData";
import Hero from "./components/Hero";
import ProductCard from "./components/products/ProductCard";

interface HomeProps {
  searchParams: Promise<{
    category?: string;
    searchTerm?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { category, searchTerm } = await searchParams;
  const products = await getProducts(category, searchTerm);

  if (products.length === 0) {
    return (
      <NullData title="Oops! No products found. Click 'All' to clear filters" />
    );
  }

  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const shuffledProducts = shuffleArray(products);

  return (
    <div className="p-8">
      <Container>
        <div>
          <Hero/>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8" id="productsSection">
          {shuffledProducts.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
