'use client';

import { useState } from 'react';
import { FaSearch, FaArrowRight, FaBook, FaUserTie, FaCertificate, FaUsers } from 'react-icons/fa';
import { Building2 } from 'lucide-react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  const stats = [
    {
      icon: FaBook,
      number: '50',
      label: 'Online Courses',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FaUserTie,
      number: '2+',
      label: 'Expert Instructors',
      iconColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: FaCertificate,
      number: '50',
      label: 'Certified Courses',
      iconColor: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      icon: FaUsers,
      number: '4+',
      label: 'Online Students',
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Welcome Tag */}
            <div className="inline-block">
              <span className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Welcome to Elearning
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Learn from anywhere
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses"
                  className="w-full pl-12 pr-16 py-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <div className="bg-violet-600 hover:bg-violet-900 text-white p-2 rounded-lg transition-colors">
                    <FaArrowRight className="h-4 w-4" />
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* Right Visual Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Delicious carrot cake with cream cheese frosting"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-violet-200 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Bottom Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <IconComponent className={`h-6 w-6 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
