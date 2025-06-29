import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 bg-amber-600 text-white text-xs font-bold py-1 px-2 rounded">
          {product.badge}
        </div>
      )}
      
      {/* Image */}
      <Link to={`/products/${product.id}`} className="block relative overflow-hidden h-64">
        <div className="absolute inset-0 bg-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent flex justify-center space-x-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <button className="bg-white text-amber-900 p-2 rounded-full hover:bg-amber-100 transition-colors">
            <Heart size={18} />
          </button>
          <button className="bg-white text-amber-900 p-2 rounded-full hover:bg-amber-100 transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>
      </Link>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-center text-amber-500 text-sm mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < product.rating ? 'text-amber-500' : 'text-gray-300'}>★</span>
          ))}
          <span className="ml-1 text-gray-500">({product.reviews})</span>
        </div>
        
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-medium text-lg text-amber-900 hover:text-amber-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-amber-700 font-serif mt-1 mb-2">{product.type}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <div className="font-bold text-amber-900">
            रु{product.price.toFixed(2)}
            {product.oldPrice && (
              <span className="text-gray-500 text-sm line-through ml-2">रु{product.oldPrice.toFixed(2)}</span>
            )}
          </div>
          
          <Link
            to={`/products/${product.id}`}
            className="text-sm font-medium text-amber-700 hover:text-amber-900 underline-offset-2 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;