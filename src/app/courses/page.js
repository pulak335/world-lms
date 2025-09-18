'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch, FaChevronDown, FaChevronUp, FaTh, FaList, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { 
  setSearchQuery, 
  setCategory, 
  setLevel, 
  setPrice, 
  setSortBy, 
  setCurrentPage,
  fetchCourses 
} from '../../store/slices/courses-slice';
import { 
  setCoursesViewMode, 
  toggleFilter, 
  selectCoursesViewMode, 
  selectExpandedFilters 
} from '../../store/slices/ui-slice';
import { addToCart } from '../../store/slices/cart-slice';
import Image from 'next/image';

export default function CoursesPage() {
  const dispatch = useDispatch();
  
  // Redux state
  const viewMode = useSelector(selectCoursesViewMode);
  const expandedFilters = useSelector(selectExpandedFilters);
  const { 
    courses, 
    filters, 
    pagination, 
    loading 
  } = useSelector(state => state.courses);

  // Fetch courses on component mount
  useEffect(() => {
    dispatch(fetchCourses(filters));
  }, [dispatch, filters]);

  const categories = [
    { name: 'AI', count: 0, subcategories: [] },
    { 
      name: 'Development', 
      count: 2, 
      subcategories: ['Mobile Development', 'Game Development'] 
    },
    { 
      name: 'Business', 
      count: 2, 
      subcategories: ['Management', 'Business Strategy'] 
    },
    { name: 'Marketing', count: 0, subcategories: [] },
    { 
      name: 'Health & Fitness', 
      count: 1, 
      subcategories: ['Nutrition & Diet'] 
    },
    { 
      name: 'Academics', 
      count: 5, 
      subcategories: ['Math', 'Science', 'English', 'Social', 'Language'] 
    },
    { 
      name: 'Lifestyle', 
      count: 1, 
      subcategories: ['Beauty & Makeup'] 
    }
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const prices = ['All', 'Free', 'Paid'];

  // Pagination
  const startIndex = (pagination.currentPage - 1) * pagination.coursesPerPage;
  const endIndex = startIndex + pagination.coursesPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  const toggleFilter = (filterName) => {
    dispatch(toggleFilter(filterName));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (course) => {
    dispatch(addToCart(course));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current opacity-50" />);
      } else {
        stars.push(<FaStar key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Left side - View toggles and results */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(setCoursesViewMode('grid'))}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-violet-600 text-white' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FaTh className="w-4 h-4" />
                </button>
                <button
                  onClick={() => dispatch(setCoursesViewMode('list'))}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-violet-600 text-white' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FaList className="w-4 h-4" />
                </button>
              </div>
              <span className="text-gray-600">
                Showing {startIndex + 1} - {Math.min(endIndex, courses.length)} of {courses.length} results
              </span>
            </div>

            {/* Right side - Search and sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search our courses"
                  value={filters.search}
                  onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
                <FaSearch className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              </div>
              
              <div className="relative">
                <select
                  value={filters.sortBy}
                  onChange={(e) => dispatch(setSortBy(e.target.value))}
                  className="appearance-none w-full sm:w-48 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                >
                  <option value="newly-published">Newly published</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="popular">Most Popular</option>
                </select>
                <FaChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              
              <button className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              {/* Categories Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter('categories')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-4"
                >
                  <span>Categories</span>
                  {expandedFilters.categories ? (
                    <FaChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                
                {expandedFilters.categories && (
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index}>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            value={category.name}
                            checked={filters.category === category.name}
                            onChange={(e) => dispatch(setCategory(e.target.value))}
                            className="w-4 h-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                          />
                          <span className="text-gray-700">{category.name} ({category.count})</span>
                        </label>
                        
                        {category.subcategories.length > 0 && (
                          <div className="ml-6 mt-2 space-y-2">
                            {category.subcategories.map((subcategory, subIndex) => (
                              <label key={subIndex} className="flex items-center space-x-3 cursor-pointer">
                                <input
                                  type="radio"
                                  name="category"
                                  value={subcategory}
                                  checked={filters.category === subcategory}
                                  onChange={(e) => dispatch(setCategory(e.target.value))}
                                  className="w-4 h-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                                />
                                <span className="text-gray-600 text-sm">{subcategory}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter('level')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-4"
                >
                  <span>Level</span>
                  {expandedFilters.level ? (
                    <FaChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                
                {expandedFilters.level && (
                  <div className="space-y-2">
                    {levels.map((level, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="level"
                          value={level.toLowerCase()}
                          checked={filters.level === level.toLowerCase()}
                          onChange={(e) => dispatch(setLevel(e.target.value))}
                          className="w-4 h-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                        />
                        <span className="text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter('price')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-4"
                >
                  <span>Price</span>
                  {expandedFilters.price ? (
                    <FaChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                
                {expandedFilters.price && (
                  <div className="space-y-2">
                    {prices.map((price, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          value={price.toLowerCase()}
                          checked={filters.price === price.toLowerCase()}
                          onChange={(e) => dispatch(setPrice(e.target.value))}
                          className="w-4 h-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                        />
                        <span className="text-gray-700">{price}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content - Course Cards */}
          <div className="lg:w-3/4">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {currentCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  {/* Course Image */}
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTEzNSAxMDBMMTQ1IDExMEwxNjUgOTAiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+';
                      }}
                    />
                    
                    {/* Price Tag */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        course.isFree 
                          ? 'bg-green-500 text-white' 
                          : 'bg-white text-gray-900 shadow-sm'
                      }`}>
                        {course.isFree ? 'FREE' : `${course.currency}${course.price.toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    {/* Instructor */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-semibold text-sm">
                          {course.instructor.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{course.instructor}</p>
                        <p className="text-sm text-gray-500">Instructor</p>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {course.title}
                    </h3>

                    {/* Course Details */}
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-600">
                        {course.lessons} Lesson{course.lessons !== 1 ? 's' : ''}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {renderStars(course.rating)}
                        </div>
                        <span className="text-sm text-gray-600">
                          {course.rating} ({course.reviews} Review{course.reviews !== 1 ? 's' : ''})
                        </span>
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <button 
                      onClick={() => handleAddToCart(course)}
                      className="w-full py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    disabled={pagination.currentPage === 1}
                    className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaChevronLeft className="w-4 h-4" />
                  </button>
                  
                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        pagination.currentPage === page
                          ? 'bg-violet-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                    disabled={pagination.currentPage === pagination.totalPages}
                    className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
