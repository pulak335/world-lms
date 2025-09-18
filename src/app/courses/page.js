'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch, FaChevronDown, FaChevronUp, FaTh, FaList, FaStar, FaChevronLeft, FaChevronRight, FaCode, FaBriefcase, FaChartLine, FaHeartbeat, FaGraduationCap, FaPalette, FaRobot, FaGamepad, FaMobile, FaLaptopCode, FaDatabase, FaCloud, FaShieldAlt, FaLanguage, FaMusic, FaCamera, FaUtensils, FaPlane, FaHome, FaCar, FaBookOpen } from 'react-icons/fa';
import { 
  setSearchQuery, 
  setCategory, 
  setLevel, 
  setPrice, 
  setRating,
  setDuration,
  setLanguage,
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
import { addToCart, selectIsInCart } from '../../store/slices/cart-slice';
import Image from 'next/image';

// Course Card Button Component
function CourseCardButton({ course, onAddToCart }) {
  const isInCart = useSelector(selectIsInCart(course.id));
  
  return (
    <button 
      onClick={() => onAddToCart(course)}
      className={`w-full py-2 rounded-lg transition-colors font-medium ${
        isInCart 
          ? 'bg-green-600 text-white hover:bg-green-700' 
          : 'bg-violet-600 text-white hover:bg-violet-700'
      }`}
    >
      {isInCart ? 'Added to Cart ✓' : 'Add to Cart'}
    </button>
  );
}

export default function CoursesPage() {
  const dispatch = useDispatch();
  
  // Local state for search suggestions
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  
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
    { 
      name: 'Programming & Development', 
      count: 45, 
      icon: FaCode,
      subcategories: [
        { name: 'Web Development', count: 15, icon: FaLaptopCode },
        { name: 'Mobile Development', count: 12, icon: FaMobile },
        { name: 'Game Development', count: 8, icon: FaGamepad },
        { name: 'Database Management', count: 10, icon: FaDatabase }
      ] 
    },
    { 
      name: 'Data Science & AI', 
      count: 32, 
      icon: FaRobot,
      subcategories: [
        { name: 'Machine Learning', count: 12, icon: FaRobot },
        { name: 'Data Analysis', count: 10, icon: FaChartLine },
        { name: 'Cloud Computing', count: 10, icon: FaCloud }
      ] 
    },
    { 
      name: 'Business & Management', 
      count: 28, 
      icon: FaBriefcase,
      subcategories: [
        { name: 'Project Management', count: 8, icon: FaBriefcase },
        { name: 'Digital Marketing', count: 10, icon: FaChartLine },
        { name: 'Entrepreneurship', count: 10, icon: FaChartLine }
      ] 
    },
    { 
      name: 'Design & Creative', 
      count: 35, 
      icon: FaPalette,
      subcategories: [
        { name: 'Graphic Design', count: 12, icon: FaPalette },
        { name: 'UI/UX Design', count: 10, icon: FaPalette },
        { name: 'Photography', count: 8, icon: FaCamera },
        { name: 'Music Production', count: 5, icon: FaMusic }
      ] 
    },
    { 
      name: 'Health & Wellness', 
      count: 22, 
      icon: FaHeartbeat,
      subcategories: [
        { name: 'Fitness & Nutrition', count: 12, icon: FaHeartbeat },
        { name: 'Mental Health', count: 5, icon: FaHeartbeat },
        { name: 'Yoga & Meditation', count: 5, icon: FaHeartbeat }
      ] 
    },
    { 
      name: 'Academic Subjects', 
      count: 40, 
      icon: FaGraduationCap,
      subcategories: [
        { name: 'Mathematics', count: 10, icon: FaBookOpen },
        { name: 'Science', count: 12, icon: FaBookOpen },
        { name: 'Languages', count: 8, icon: FaLanguage },
        { name: 'History & Social Studies', count: 10, icon: FaBookOpen }
      ] 
    },
    { 
      name: 'Technology & IT', 
      count: 25, 
      icon: FaShieldAlt,
      subcategories: [
        { name: 'Cybersecurity', count: 8, icon: FaShieldAlt },
        { name: 'Network Administration', count: 7, icon: FaShieldAlt },
        { name: 'System Administration', count: 10, icon: FaShieldAlt }
      ] 
    },
    { 
      name: 'Lifestyle & Hobbies', 
      count: 18, 
      icon: FaHome,
      subcategories: [
        { name: 'Cooking & Culinary', count: 6, icon: FaUtensils },
        { name: 'Travel & Tourism', count: 4, icon: FaPlane },
        { name: 'Home Improvement', count: 4, icon: FaHome },
        { name: 'Automotive', count: 4, icon: FaCar }
      ] 
    }
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const prices = ['All', 'Free', 'Under $50', '$50 - $100', '$100 - $200', 'Over $200'];
  const ratings = ['All', '4.5+ Stars', '4.0+ Stars', '3.5+ Stars', '3.0+ Stars'];
  const durations = ['All', 'Under 20 lessons', '20-30 lessons', '30-40 lessons', '40+ lessons'];
  const languages = ['All', 'English', 'Spanish', 'French', 'German', 'Chinese'];

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

  // Search suggestions logic
  const generateSuggestions = (query) => {
    if (query.length < 2) return [];
    
    const allCourses = courses;
    const courseTitles = allCourses.map(course => course.title.toLowerCase());
    const instructorNames = allCourses.map(course => course.instructor.toLowerCase());
    const categories = allCourses.map(course => course.category.toLowerCase());
    
    const allSuggestions = [...courseTitles, ...instructorNames, ...categories];
    const uniqueSuggestions = [...new Set(allSuggestions)];
    
    return uniqueSuggestions
      .filter(suggestion => suggestion.includes(query.toLowerCase()))
      .slice(0, 5)
      .map(suggestion => suggestion.charAt(0).toUpperCase() + suggestion.slice(1));
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
    
    if (query.length >= 2) {
      const newSuggestions = generateSuggestions(query);
      setSuggestions(newSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    dispatch(setSearchQuery(suggestion));
    setShowSuggestions(false);
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
                  placeholder="Search courses, instructors, or categories..."
                  value={filters.search}
                  onChange={handleSearchChange}
                  onFocus={() => {
                    if (filters.search.length >= 2) {
                      setShowSuggestions(true);
                    }
                  }}
                  onBlur={() => {
                    // Delay hiding suggestions to allow clicking on them
                    setTimeout(() => setShowSuggestions(false), 200);
                  }}
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
                <FaSearch className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                
                {/* Search Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-violet-50 hover:text-violet-900"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <span className="font-normal block truncate">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                )}
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

        {/* Filter Results Summary */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {courses.length} Course{courses.length !== 1 ? 's' : ''} Found
              </h2>
              {filters.search && (
                <span className="text-sm text-gray-600">
                  for "{filters.search}"
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(setCoursesViewMode('grid'))}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-violet-100 text-violet-600' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <FaTh className="w-4 h-4" />
                </button>
                <button
                  onClick={() => dispatch(setCoursesViewMode('list'))}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-violet-100 text-violet-600' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <FaList className="w-4 h-4" />
                </button>
              </div>
              
              {/* Sort Options */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => dispatch(setSortBy(e.target.value))}
                  className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                >
                  <option value="newly-published">Newest First</option>
                  <option value="oldest-published">Oldest First</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating-high-low">Rating: High to Low</option>
                  <option value="rating-low-high">Rating: Low to High</option>
                  <option value="title-a-z">Title: A to Z</option>
                  <option value="title-z-a">Title: Z to A</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              {/* Filter Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={() => {
                    dispatch(setCategory(''));
                    dispatch(setLevel(''));
                    dispatch(setPrice(''));
                    dispatch(setRating(''));
                    dispatch(setDuration(''));
                    dispatch(setLanguage(''));
                    dispatch(setSearchQuery(''));
                  }}
                  className="text-sm text-violet-600 hover:text-violet-700 font-medium"
                >
                  Clear All
                </button>
              </div>
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
                  <div className="space-y-3">
                    {/* Show All Categories Option */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:border-violet-300 transition-colors">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value=""
                          checked={!filters.category}
                          onChange={(e) => dispatch(setCategory(e.target.value))}
                          className="w-4 h-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                        />
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                            <FaTh className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-900 font-medium">All Categories</span>
                            <span className="text-gray-500 text-sm ml-2">({categories.reduce((sum, cat) => sum + cat.count, 0)} courses)</span>
                          </div>
                        </div>
                      </label>
                    </div>
                    
                    {categories.map((category, index) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={index} className="border border-gray-200 rounded-lg p-3 hover:border-violet-300 transition-colors">
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="category"
                              value={category.name}
                              checked={filters.category === category.name}
                              onChange={(e) => dispatch(setCategory(e.target.value))}
                              className="w-4 h-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                            />
                            <div className="flex items-center space-x-3 flex-1">
                              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <span className="text-gray-900 font-medium">{category.name}</span>
                                <span className="text-gray-500 text-sm ml-2">({category.count} courses)</span>
                              </div>
                            </div>
                          </label>
                          
                          {category.subcategories.length > 0 && (
                            <div className="ml-11 mt-3 space-y-2">
                              {category.subcategories.map((subcategory, subIndex) => {
                                const SubIconComponent = subcategory.icon;
                                return (
                                  <label key={subIndex} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
                                    <input
                                      type="radio"
                                      name="category"
                                      value={subcategory.name}
                                      checked={filters.category === subcategory.name}
                                      onChange={(e) => dispatch(setCategory(e.target.value))}
                                      className="w-4 h-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                                    />
                                    <div className="flex items-center space-x-2">
                                      <SubIconComponent className="w-4 h-4 text-gray-500" />
                                      <span className="text-gray-600 text-sm">{subcategory.name}</span>
                                      <span className="text-gray-400 text-xs">({subcategory.count})</span>
                                    </div>
                                  </label>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
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

              {/* Rating Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter('rating')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-4"
                >
                  <span>Rating</span>
                  {expandedFilters.rating ? (
                    <FaChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                
                {expandedFilters.rating && (
                  <div className="space-y-2">
                    {ratings.map((rating, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          value={rating.toLowerCase()}
                          checked={filters.rating === rating.toLowerCase()}
                          onChange={(e) => dispatch(setRating(e.target.value))}
                          className="w-4 h-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                        />
                        <span className="text-gray-700">{rating}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Duration Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter('duration')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-4"
                >
                  <span>Duration</span>
                  {expandedFilters.duration ? (
                    <FaChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                
                {expandedFilters.duration && (
                  <div className="space-y-2">
                    {durations.map((duration, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="duration"
                          value={duration.toLowerCase()}
                          checked={filters.duration === duration.toLowerCase()}
                          onChange={(e) => dispatch(setDuration(e.target.value))}
                          className="w-4 h-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                        />
                        <span className="text-gray-700">{duration}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter('language')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-4"
                >
                  <span>Language</span>
                  {expandedFilters.language ? (
                    <FaChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                
                {expandedFilters.language && (
                  <div className="space-y-2">
                    {languages.map((language, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="language"
                          value={language.toLowerCase()}
                          checked={filters.language === language.toLowerCase()}
                          onChange={(e) => dispatch(setLanguage(e.target.value))}
                          className="w-4 h-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                        />
                        <span className="text-gray-700">{language}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Filters */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter('quick')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-4"
                >
                  <span>Quick Filters</span>
                  {expandedFilters.quick ? (
                    <FaChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                
                {expandedFilters.quick && (
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        dispatch(setPrice('free'));
                        dispatch(setLevel('beginner'));
                      }}
                      className="w-full text-left px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm"
                    >
                      🆓 Free Beginner Courses
                    </button>
                    <button
                      onClick={() => {
                        dispatch(setRating('4.5+ stars'));
                        dispatch(setLevel('intermediate'));
                      }}
                      className="w-full text-left px-3 py-2 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 transition-colors text-sm"
                    >
                      ⭐ Highly Rated Intermediate
                    </button>
                    <button
                      onClick={() => {
                        dispatch(setDuration('under 20 lessons'));
                        dispatch(setLevel('beginner'));
                      }}
                      className="w-full text-left px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm"
                    >
                      ⏱️ Quick Beginner Courses
                    </button>
                    <button
                      onClick={() => {
                        dispatch(setPrice('under $50'));
                        dispatch(setRating('4.0+ stars'));
                      }}
                      className="w-full text-left px-3 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm"
                    >
                      💰 Affordable & Well-Rated
                    </button>
                    <button
                      onClick={() => {
                        dispatch(setCategory('programming & development'));
                        dispatch(setLevel('advanced'));
                      }}
                      className="w-full text-left px-3 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-sm"
                    >
                      💻 Advanced Programming
                    </button>
                  </div>
                )}
              </div>

              {/* Active Filters Summary */}
              {(filters.category || filters.level || filters.price || filters.rating || filters.duration || filters.language || filters.search) && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Active Filters</h4>
                  <div className="space-y-2">
                    {filters.search && (
                      <div className="flex items-center justify-between bg-violet-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-violet-700">Search: "{filters.search}"</span>
                        <button
                          onClick={() => dispatch(setSearchQuery(''))}
                          className="text-violet-600 hover:text-violet-800"
                        >
                          ×
                        </button>
                      </div>
                    )}
                    {filters.category && (
                      <div className="flex items-center justify-between bg-violet-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-violet-700">Category: {filters.category}</span>
                        <button
                          onClick={() => dispatch(setCategory(''))}
                          className="text-violet-600 hover:text-violet-800"
                        >
                          ×
                        </button>
                      </div>
                    )}
                    {filters.level && (
                      <div className="flex items-center justify-between bg-violet-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-violet-700">Level: {filters.level}</span>
                        <button
                          onClick={() => dispatch(setLevel(''))}
                          className="text-violet-600 hover:text-violet-800"
                        >
                          ×
                        </button>
                      </div>
                    )}
                    {filters.price && (
                      <div className="flex items-center justify-between bg-violet-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-violet-700">Price: {filters.price}</span>
                        <button
                          onClick={() => dispatch(setPrice(''))}
                          className="text-violet-600 hover:text-violet-800"
                        >
                          ×
                        </button>
                      </div>
                    )}
                    {filters.rating && (
                      <div className="flex items-center justify-between bg-violet-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-violet-700">Rating: {filters.rating}</span>
                        <button
                          onClick={() => dispatch(setRating(''))}
                          className="text-violet-600 hover:text-violet-800"
                        >
                          ×
                        </button>
                      </div>
                    )}
                    {filters.duration && (
                      <div className="flex items-center justify-between bg-violet-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-violet-700">Duration: {filters.duration}</span>
                        <button
                          onClick={() => dispatch(setDuration(''))}
                          className="text-violet-600 hover:text-violet-800"
                        >
                          ×
                        </button>
                      </div>
                    )}
                    {filters.language && (
                      <div className="flex items-center justify-between bg-violet-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-violet-700">Language: {filters.language}</span>
                        <button
                          onClick={() => dispatch(setLanguage(''))}
                          className="text-violet-600 hover:text-violet-800"
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
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

                    {/* Add to Cart / View Details Button */}
                    <CourseCardButton course={course} onAddToCart={handleAddToCart} />
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
