'use client';

import { FaCog, FaBookOpen, FaUserGraduate, FaCloud } from 'react-icons/fa';
import Image from "next/image";

export default function PromoSection() {
  const features = [
    {
      icon: FaCog,
      text: "Get certified with 100+ certification courses"
    },
    {
      icon: FaBookOpen,
      text: "Build skills your way, from labs to courses"
    },
    {
      icon: FaUserGraduate,
      text: "Stay motivated with engaging instructors"
    },
    {
      icon: FaCloud,
      text: "Keep up with the latest in cloud"
    }
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Students Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Students learning with tablets and digital devices"
              className="w-full h-auto rounded-2xl shadow-lg"
              width={1000}
              height={1000}
            />
            {/* Decorative purple circle */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-violet-200 rounded-full opacity-60"></div>
          </div>

          {/* Right Side - Content Block */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h2 className="text-4xl md:text-5xl text-violet-900 font-bold mb-4">
                Master the skills to drive your career
              </h2>
              
              {/* Gradient Line */}
              <div className="flex space-x-1 mb-6">
                <div className="w-8 h-1 bg-violet-500 rounded-full"></div>
                <div className="w-8 h-1 bg-green-500 rounded-full"></div>
                <div className="w-8 h-1 bg-yellow-500 rounded-full"></div>
                <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Advance your career by mastering in-demand skills! Gain certifications, learn from expert instructors, and explore hands-on content designed to help you succeed in the modern tech landscape. Whether you&apos;re just starting or looking to level up, our engaging courses and latest industry insights will keep you ahead.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white border border-gray-100 rounded-lg hover:shadow-md cursor-pointer transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-violet-900 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white " />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-100 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
    </section>
  );
}
