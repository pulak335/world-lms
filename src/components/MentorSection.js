'use client';

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export default function MentorSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Group of people collaborating around a table"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              width={800}
              height={800}
            />
          </div>

          {/* Right Side - Content */}
          <div className="bg-gradient-to-r from-white to-purple-50 p-8 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-violet-900 mb-6">
              Want to share your knowledge? <br /> Join us a Mentor
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Share your expertise and inspire others by becoming a mentor! Join our platform to guide learners through top-rated courses and high-quality educational content.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700 text-lg">
                <FaCheckCircle className="text-red-500 mr-3 flex-shrink-0" />
                <span>Best Courses</span>
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <FaCheckCircle className="text-red-500 mr-3 flex-shrink-0" />
                <span>Top rated Instructors</span>
              </li>
            </ul>
            <button className="px-8 py-3 border border-purple-400 text-gray-800 rounded-full hover:bg-purple-100 transition-colors text-lg font-medium">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
