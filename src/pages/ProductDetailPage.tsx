import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import ProductDetail from '../components/products/ProductDetail';
import RelatedProducts from '../components/products/RelatedProducts';
import { Product } from '../types/product';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    const foundProduct = productsData.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      // Update document title
      document.title = `${foundProduct.name} - Rudraksha Beads`;
    } else {
      // Product not found, redirect to products page
      navigate('/products');
    }
    
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-amber-50">
        <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="bg-amber-50 min-h-screen">
      <ProductDetail product={product} />
      <RelatedProducts currentProduct={product} />
    </div>
  );
};

export default ProductDetailPage;