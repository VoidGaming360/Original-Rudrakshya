import React from 'react';
import { productsData } from '../../data/products';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';

interface RelatedProductsProps {
  currentProduct: Product;
  category?: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProduct, category }) => {
  let relatedProducts = productsData.filter(product => 
    product.id !== currentProduct.id && 
    (category ? product.category === category : product.type === currentProduct.type)
  ).slice(0, 4);

  // If not enough products in the same category, just get other products
  if (relatedProducts.length < 4) {
    const additionalProducts = productsData.filter(
      product => !relatedProducts.includes(product) && product.id !== currentProduct.id
    ).slice(0, 4 - relatedProducts.length);
    
    relatedProducts = [...relatedProducts, ...additionalProducts];
  }

  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-serif font-bold text-amber-900 mb-8">
          You May Also Like
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;