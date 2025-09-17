'use client';

import { useState, useRef } from 'react';
import { FaStar, FaRegClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function NewestCourses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const courses = [
    {
      id: 1,
      level: 'Beginner',
      title: 'test',
      image: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      price: 'FREE',
      originalPrice: null,
      rating: 0.0,
      reviews: 0,
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      level: 'Beginner',
      title: 'Title',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      price: 'FREE',
      originalPrice: null,
      rating: 0.0,
      reviews: 0,
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      level: 'Intermediate',
      title: 'SRTFGHFGH',
      image: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      price: 'CFA 8.00',
      originalPrice: null,
      rating: 0.0,
      reviews: 0,
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 4,
      level: 'Advanced',
      title: 'tEst',
      image: 'https://images.unsplash.com/photo-1521737711867-ee17107734a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      price: 'FREE',
      originalPrice: null,
      rating: 0.0,
      reviews: 0,
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 5,
      level: 'Beginner',
      title: 'Test',
      image: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      price: 'CFA 1.00',
      originalPrice: 'CFA 12.00',
      rating: 0.0,
      reviews: 0,
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0].offsetWidth + 32; // card width + gap
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newScrollLeft = Math.min(container.scrollLeft + cardWidth, maxScroll);
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0].offsetWidth + 32; // card width + gap
      const newScrollLeft = Math.max(container.scrollLeft - cardWidth, 0);
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Controls */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-violet-900 mb-4">
              Newest Courses
            </h2>
            
            {/* Gradient Line */}
            <div className="flex space-x-1">
              <div className="w-6 h-1 bg-violet-500 rounded-full"></div>
              <div className="w-6 h-1 bg-green-500 rounded-full"></div>
              <div className="w-6 h-1 bg-yellow-500 rounded-full"></div>
              <div className="w-6 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={scrollToPrev}
              className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center text-gray-600 hover:text-violet-600"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToNext}
              className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center text-gray-600 hover:text-violet-600"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Course Cards */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
            >
              {/* Course Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Course Content */}
              <div className="p-6">
                {/* Course Level */}
                <span className="text-sm text-gray-500 font-medium mb-2 block">
                  {course.level}
                </span>
                
                {/* Instructor Avatar */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <img
                      src={course.instructorAvatar}
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Course Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-violet-600 transition-colors duration-300">
                  {course.title}
                </h3>
                
                {/* Price */}
                <div className="mb-4">
                  {course.originalPrice ? (
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">
                        {course.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                  ) : (
                    <span className="text-lg font-bold text-gray-900">
                      {course.price}
                    </span>
                  )}
                </div>
                
                {/* Rating and Reviews */}
                <div className="flex items-center space-x-2 text-gray-600">
                  {/* Clock Icon */}
                  <FaRegClock className="w-4 h-4 text-gray-400" />
                  
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-gray-300" />
                    ))}
                  </div>
                  
                  {/* Rating Text */}
                  <span className="text-sm">
                    {course.rating.toFixed(1)} ({course.reviews} Reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
