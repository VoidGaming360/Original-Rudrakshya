import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import { productsData } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  const [products, setProducts] = useState(productsData);
  const [activeFilters, setActiveFilters] = useState({
    category: categoryParam || 'all',
    type: 'all',
    size: 'all',
    priceRange: 'all',
    sort: 'featured',
  });
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    filterProducts();
  }, [activeFilters]);

  useEffect(() => {
    if (categoryParam) {
      setActiveFilters(prev => ({ ...prev, category: categoryParam }));
    }
  }, [categoryParam]);

  const filterProducts = () => {
    let filtered = [...productsData];

    // Category filter
    if (activeFilters.category !== 'all') {
      filtered = filtered.filter(product => product.category === activeFilters.category);
    }

    // Type filter
    if (activeFilters.type !== 'all') {
      filtered = filtered.filter(product => product.type === activeFilters.type);
    }

    // Size filter
    if (activeFilters.size!== 'all') {
      filtered = filtered.filter(product => product.size === activeFilters.size);
    }

    // Price range filter
    if (activeFilters.priceRange !== 'all') {
      const ranges = {
        'under-50': [0, 50],
        '50-100': [50, 100],
        '100-200': [100, 200],
        'over-200': [200, Infinity],
      };
      
      const selectedRange = ranges[activeFilters.priceRange as keyof typeof ranges];
      if (selectedRange) {
        filtered = filtered.filter(
          product => product.price >= selectedRange[0] && product.price <= selectedRange[1]
        );
      }
    }

    // Sorting
    switch (activeFilters.sort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      // For 'featured', maintain original order which already has featured items
      default:
        break;
    }

    setProducts(filtered);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-amber-900 mb-8">Rudraksha Collection</h1>
        
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <button
            className="md:hidden flex items-center px-4 py-2 border border-amber-300 rounded-md text-amber-800 bg-white"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <Filter size={18} className="mr-2" />
            Filters
            <ChevronDown size={18} className={`ml-2 transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
            <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
              {/* Category Filter */}
              <div className="relative">
                <label htmlFor="category-filter" className="block text-sm font-medium text-amber-700 mb-1">
                  Category
                </label>
                <select
                  id="category-filter"
                  value={activeFilters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="block w-full bg-white border border-amber-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="all">All Categories</option>
                  <option value="mukhis">Mukhis</option>
                  <option value="malas">Rudraksha Malas</option>
                  <option value="bracelets">Bracelets</option>
                  <option value="pendants">Pendants</option>
                </select>
              </div>
              
              {/* Type Filter */}
              <div className="relative">
                <label htmlFor="type-filter" className="block text-sm font-medium text-amber-700 mb-1">
                  Type
                </label>
                <select
                  id="type-filter"
                  value={activeFilters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="block w-full bg-white border border-amber-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="all">All Types</option>
                  <option value="Nepal Rudraksha">Nepal Rudraksha</option>
                  {/* <option value="Indonesian Rudraksha">Indonesian Rudraksha</option>
                  <option value="Ganesh Rudraksha">Ganesh Rudraksha</option> */}
                  <option value="Gauri Shankar">Gauri Shankar</option>
                </select>
              </div>

              {/* Size Filter */}
              <div className="relative">
                <label htmlFor="type-filter" className="block text-sm font-medium text-amber-700 mb-1">
                  Size
                </label>
                <select
                  id="type-filter"
                  value={activeFilters.size}
                  onChange={(e) => handleFilterChange('size', e.target.value)}
                  className="block w-full bg-white border border-amber-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="all">All Types</option>
                  <option value="Small">Small</option>
                  {/* <option value="Indonesian Rudraksha">Indonesian Rudraksha</option>
                  <option value="Ganesh Rudraksha">Ganesh Rudraksha</option> */}
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
              
              {/* Price Range Filter */}
              <div className="relative">
                <label htmlFor="price-filter" className="block text-sm font-medium text-amber-700 mb-1">
                  Price Range
                </label>
                <select
                  id="price-filter"
                  value={activeFilters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="block w-full bg-white border border-amber-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="all">All Prices</option>
                  <option value="under-50">Under $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="over-200">Over $200</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            {/* Sort By */}
            <div className="relative">
              <label htmlFor="sort-by" className="block text-sm font-medium text-amber-700 mb-1">
                Sort By
              </label>
              <select
                id="sort-by"
                value={activeFilters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="block w-full bg-white border border-amber-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
            
            {/* View Layout */}
            <div className="flex items-center space-x-2 pt-6">
              <button
                onClick={() => setLayout('grid')}
                className={`p-2 rounded-md ${
                  layout === 'grid' ? 'bg-amber-100 text-amber-800' : 'bg-white text-gray-500'
                }`}
                aria-label="Grid view"
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setLayout('list')}
                className={`p-2 rounded-md ${
                  layout === 'list' ? 'bg-amber-100 text-amber-800' : 'bg-white text-gray-500'
                }`}
                aria-label="List view"
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Count */}
        <p className="text-amber-800 mb-6">
          Showing {products.length} of {productsData.length} products
        </p>
        
        {/* Products Grid */}
        {products.length > 0 ? (
          <div className={`
            ${layout === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' 
              : 'flex flex-col space-y-6'
            }
          `}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-amber-800">No products found matching your filters.</p>
            <button
              onClick={() => setActiveFilters({
                category: 'all',
                type: 'all',
                size: 'all',
                priceRange: 'all',
                sort: 'featured',
              })}
              className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;