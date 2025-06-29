import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShoppingBag, Heart, Share2, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';
import { Product } from '../../types/product';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.image);
  
  const handleInquiry = () => {
    // Replace with your WhatsApp number and dynamic product info
    const phoneNumber = '9779841234567';
    const message = encodeURIComponent(`Hello, I'm interested in the ${product.name}. Can you provide more information?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Breadcrumbs */}
      <div className="bg-amber-50 p-4">
        <div className="container mx-auto">
          <div className="flex items-center text-sm text-amber-800">
            <Link to="/" className="hover:text-amber-600">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/products" className="hover:text-amber-600">Products</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {/* Product Images */}
          <div>
            <div className="mb-4 aspect-square overflow-hidden rounded-lg">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {[product.image, ...product.gallery || []].map((img, index) => (
                <button
                  key={index}
                  className={`border-2 rounded-md overflow-hidden ${
                    mainImage === img ? 'border-amber-500' : 'border-gray-200'
                  }`}
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            {product.badge && (
              <div className="inline-block bg-amber-600 text-white text-xs font-bold py-1 px-3 rounded-full mb-2">
                {product.badge}
              </div>
            )}
            
            <h1 className="text-3xl font-serif font-bold text-amber-900 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center text-amber-500 text-sm mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < product.rating ? 'text-amber-500' : 'text-gray-300'}>★</span>
              ))}
              <span className="ml-1 text-gray-500">({product.reviews} reviews)</span>
            </div>
            
            <div className="text-2xl font-bold text-amber-900 mb-4">
              रु{product.price.toFixed(2)}
              {product.oldPrice && (
                <span className="text-gray-500 text-lg line-through ml-2">
                  रु{product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            <div className="border-t border-b border-gray-200 py-4 my-4">
              <p className="text-gray-700 mb-4">{product.shortDescription}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-medium text-amber-900">Type:</span>
                  <span className="ml-2 text-gray-700">{product.type}</span>
                </div>
                {product.faces && (
                  <div>
                    <span className="font-medium text-amber-900">Faces:</span>
                    <span className="ml-2 text-gray-700">{product.faces} Mukhi</span>
                  </div>
                )}
                <div>
                  <span className="font-medium text-amber-900">Origin:</span>
                  <span className="ml-2 text-gray-700">{product.origin}</span>
                </div>
                <div>
                  <span className="font-medium text-amber-900">Certification:</span>
                  <span className="ml-2 text-gray-700">{product.certification ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {/* <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={<ShoppingBag size={18} />}
              >
                Add to Cart
              </Button> */}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleInquiry}
                icon={<MessageCircle size={18} />}
              >
                Inquire on WhatsApp
              </Button>
            </div>
            
            <div className="flex space-x-4 text-gray-500">
              {/* <button className="flex items-center hover:text-amber-700">
                <Heart size={18} className="mr-1" />
                <span>Add to Wishlist</span>
              </button> */}
              {/* <button className="flex items-center hover:text-amber-700">
                <Share2 size={18} className="mr-1" />
                <span>Share</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Description */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto p-4">
          <div className="py-8">
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">About This Rudraksha</h2>
            <div className="prose max-w-none text-gray-700">
              <p>{product.description}</p>
              {product.benefits && (
                <>
                  <h3 className="text-xl font-semibold text-amber-800 mt-6 mb-4">Benefits</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </>
              )}
              {product.wearingMethod && (
                <>
                  <h3 className="text-xl font-semibold text-amber-800 mt-6 mb-4">How to Wear</h3>
                  <p>{product.wearingMethod}</p>
                </>
              )}
              {product.mantras && (
                <>
                  <h3 className="text-xl font-semibold text-amber-800 mt-6 mb-4">Associated Mantras</h3>
                  <p className="italic font-serif">{product.mantras}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;