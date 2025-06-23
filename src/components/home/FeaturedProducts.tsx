import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../../data/products';
import ProductCard from '../products/ProductCard';

const FeaturedProducts: React.FC = () => {
  // Get 4 featured products
  const featuredProducts = productsData.filter(product => product.featured).slice(0, 4);

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
            Featured Rudraksha
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Discover our premium selection of authentic Rudraksha beads, handpicked
            for their spiritual potency and exceptional quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-block px-8 py-3 border-2 border-amber-700 text-amber-700 font-medium rounded-md hover:bg-amber-700 hover:text-white transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;