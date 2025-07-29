import ProductDetails from '@/components/ProductDetails';
import { products } from '@/lib/products';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  return <ProductDetails product={product} />;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}