'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

export default function CourseCategories() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    {
      id: 1,
      title: 'AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200'
    },
    {
      id: 2,
      title: 'Development',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200'
    },
    {
      id: 3,
      title: 'Business',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200'
    },
    {
      id: 4,
      title: 'Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200'
    },
    {
      id: 5,
      title: 'Health & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(categories.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(categories.length / 3)) % Math.ceil(categories.length / 3));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-gray-50 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-violet-900 font-bold text-gray-900 mb-4">
            Explore Top Courses Categories
          </h2>
          
          {/* Gradient Line */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-8 h-1 bg-violet-500 rounded-full"></div>
            <div className="w-8 h-1 bg-yellow-500 rounded-full"></div>
            <div className="w-8 h-1 bg-teal-500 rounded-full"></div>
          </div>
        </div>

        {/* Course Categories Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <FaChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <FaChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Categories Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(categories.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.slice(slideIndex * 3, (slideIndex + 1) * 3).map((category) => (
                      <div
                        key={category.id}
                        className={`${category.bgColor} ${category.borderColor} border-2 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer group`}
                      >
                        {/* Category Image */}
                        <div className="mb-6">
                          <Image
                            src={category.image}
                            alt={category.title}
                            className="w-full h-48 object-cover rounded-xl"
                            width={400}
                            height={400}
                          />
                        </div>
                        
                        {/* Category Title */}
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(categories.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-violet-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-violet-50 to-transparent"></div>
    </section>
  );
}
