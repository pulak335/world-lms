'use client';

import Image from 'next/image';
import { FaStar, FaRegClock, FaArrowRight } from 'react-icons/fa';

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      level: 'Beginner',
      title: 'Title',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      price: 'FREE',
      rating: 0.0,
      reviews: 0,
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      level: 'Advanced',
      title: 'tEst',
      image: 'https://images.unsplash.com/photo-1521737711867-ee17107734a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      price: 'FREE',
      rating: 0.0,
      reviews: 0,
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      level: 'Intermediate',
      title: 'Test',
      image: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      price: 'FREE',
      rating: 0.0,
      reviews: 0,
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-violet-900 mb-4">
              Featured Courses
            </h2>
            
            {/* Gradient Line */}
            <div className="flex space-x-1">
              <div className="w-6 h-1 bg-violet-500 rounded-full"></div>
              <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-1 bg-green-500 rounded-full"></div>
              <div className="w-6 h-1 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
          
          {/* See All Link */}
          <a 
            href="#" 
            className="text-violet-600 hover:text-violet-800 font-medium flex items-center space-x-1 transition-colors duration-300"
          >
            <span>See all</span>
            <FaArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
            >
              {/* Course Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={400}
                />
              </div>
              
              {/* Course Content */}
              <div className="p-6">
                {/* Course Level */}
                <span className="text-sm text-gray-500 font-medium mb-2 block">
                  {course.level}
                </span>
                
                {/* Course Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-violet-600 transition-colors duration-300">
                  {course.title}
                </h3>
                
                {/* Price and Rating */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    {course.price}
                  </span>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    {/* Star Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-gray-300" />
                      ))}
                    </div>
                    
                    {/* Rating Text */}
                    <span className="text-sm">
                      {course.rating.toFixed(1)} ({course.reviews} Review)
                    </span>
                    
                    {/* Clock Icon */}
                    <FaRegClock className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                
                {/* Instructor */}
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={course.instructorAvatar}
                      alt="Instructor"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">
                    Instructor Name
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
