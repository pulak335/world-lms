'use client';

import { FaCheck } from 'react-icons/fa';

export default function BecomeInstructor() {
  const benefits = [
    "Reach students worldwide",
    "Flexible schedule and self-paced teaching",
    "Earn money while sharing your knowledge"
  ];

  return (
    <section className="bg-yellow-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Become An Instructor
            </h2>
            
            {/* Introductory Text */}
            <div className="space-y-3">
              <p className="text-lg text-gray-900">
                Top instructors from around the world teach millions of students on Academix LMS.
              </p>
              <p className="text-lg text-gray-900">
                Join us and make a lasting impact.
              </p>
            </div>
            
            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <FaCheck className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-lg text-gray-900 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Call to Action Button */}
          <div className="flex justify-center lg:justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
