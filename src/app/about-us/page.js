'use client';

import { useState } from 'react';
import { FaGraduationCap, FaUsers, FaGlobe, FaAward, FaLightbulb, FaHeart, FaArrowRight, FaCheckCircle, FaStar, FaTrophy, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { number: '50,000+', label: 'Students Enrolled', icon: FaUsers },
    { number: '500+', label: 'Expert Instructors', icon: FaGraduationCap },
    { number: '100+', label: 'Countries Served', icon: FaGlobe },
    { number: '95%', label: 'Success Rate', icon: FaAward }
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We continuously innovate our learning methods and technology to provide the best educational experience.'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Our passion for education drives us to help every student achieve their academic and career goals.'
    },
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity and transparency in all our educational programs.'
    },
    {
      icon: FaTrophy,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from course content to student support services.'
    }
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Founded',
      description: 'Started with a vision to democratize quality education worldwide.'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Expanded to serve students across 50+ countries.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched comprehensive online learning platform.'
    },
    {
      year: '2022',
      title: 'OTHM Partnership',
      description: 'Partnered with OTHM for internationally recognized qualifications.'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Integrated AI-powered learning tools and personalized education.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Education visionary with 20+ years in academic leadership and digital transformation.',
      achievements: ['PhD in Education Technology', 'Former Dean at Oxford University', 'Author of 15+ research papers']
    },
    {
      name: 'Prof. Michael Chen',
      position: 'Chief Academic Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Leading expert in curriculum development and international education standards.',
      achievements: ['Professor Emeritus at MIT', 'UNESCO Education Advisor', 'Nobel Prize Nominee 2023']
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Technology innovator specializing in AI-driven educational solutions.',
      achievements: ['PhD in Computer Science', 'Former Google AI Researcher', '50+ Patents in EdTech']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-400">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Empowering minds, transforming futures. We're dedicated to providing world-class education that opens doors to unlimited possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Join Our Mission</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-colors duration-300">
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-violet-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">From Vision to Reality</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, Excellence University began as a small initiative to bridge the gap between traditional education and the evolving needs of the modern world. Our founders, a group of passionate educators and technology innovators, recognized that quality education should be accessible to everyone, regardless of their location or circumstances.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we stand as a leading global education platform, serving over 50,000 students across 100+ countries. Our commitment to excellence, innovation, and student success has made us a trusted partner in educational transformation.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Internationally Accredited</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Industry Recognized</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center">
                <FaStar className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <FaHeart className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize quality education by providing accessible, innovative, and internationally recognized learning opportunities that empower individuals to achieve their academic and career aspirations, regardless of their background or location.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <FaGlobe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's leading platform for transformative education, where every learner can access world-class knowledge, develop essential skills, and build meaningful connections that shape a better future for themselves and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-violet-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-violet-600 font-semibold mb-4">{leader.position}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{leader.bio}</p>
                  
                  <div className="space-y-2">
                    {leader.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <FaCheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have transformed their lives through our world-class education programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>Apply Now</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
