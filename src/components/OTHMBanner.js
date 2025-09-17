'use client';

import { useState } from 'react';
import { FaGraduationCap, FaAward, FaGlobe, FaCheckCircle, FaArrowRight, FaStar, FaUsers, FaBookOpen } from 'react-icons/fa';

export default function OTHMBanner() {
  const [activeLevel, setActiveLevel] = useState(3);

  const othmLevels = [
    {
      level: 3,
      title: 'Foundation',
      subtitle: 'OTHM Level 3 Foundation Diploma',
      duration: '6-12 Months',
      credits: '120 Credits',
      description: 'Perfect starting point for your higher education journey. Build essential academic and professional skills.',
      features: [
        'Academic Writing Skills',
        'Research Methods',
        'Business Communication',
        'IT Skills',
        'Study Skills'
      ],
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      iconColor: 'text-blue-600'
    },
    {
      level: 4,
      title: 'Diploma',
      subtitle: 'OTHM Level 4 Diploma',
      duration: '9-12 Months',
      credits: '120 Credits',
      description: 'Advanced diploma level qualification. Develop specialized knowledge in your chosen field.',
      features: [
        'Business Management',
        'Marketing Principles',
        'Human Resource Management',
        'Financial Management',
        'Strategic Planning'
      ],
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      iconColor: 'text-green-600'
    },
    {
      level: 5,
      title: 'Higher Diploma',
      subtitle: 'OTHM Level 5 Diploma',
      duration: '12-18 Months',
      credits: '120 Credits',
      description: 'Higher diploma qualification. Gain advanced skills and knowledge for senior roles.',
      features: [
        'Advanced Business Strategy',
        'Leadership & Management',
        'Project Management',
        'Quality Management',
        'Change Management'
      ],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800',
      iconColor: 'text-purple-600'
    },
    {
      level: 6,
      title: 'Top-up Degree',
      subtitle: 'OTHM Level 6 Top-up Degree',
      duration: '12-18 Months',
      credits: '120 Credits',
      description: 'Complete your degree with our top-up program. Direct pathway to bachelor\'s degree.',
      features: [
        'Strategic Management',
        'International Business',
        'Entrepreneurship',
        'Digital Marketing',
        'Global Economics'
      ],
      color: 'from-violet-500 to-violet-700',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
      textColor: 'text-violet-800',
      iconColor: 'text-violet-600'
    }
  ];

  const currentLevel = othmLevels.find(level => level.level === activeLevel);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-violet-900 to-gray-900 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-500/20 to-blue-500/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-violet-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FaGraduationCap className="w-12 h-12 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              UK OTHM Degrees
            </h1>
            <FaAward className="w-12 h-12 text-yellow-400" />
          </div>
          
          <div className="flex justify-center space-x-2 mb-6">
            <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
            <div className="w-8 h-1 bg-violet-400 rounded-full"></div>
            <div className="w-8 h-1 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-1 bg-green-400 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Internationally recognized qualifications from the UK. Progress through our structured levels to achieve your academic and career goals.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <FaGlobe className="w-6 h-6 text-yellow-400" />
                <span className="text-2xl font-bold text-white">Global Recognition</span>
              </div>
              <p className="text-gray-300">Accepted worldwide</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <FaUsers className="w-6 h-6 text-yellow-400" />
                <span className="text-2xl font-bold text-white">50K+ Students</span>
              </div>
              <p className="text-gray-300">Successfully graduated</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <FaStar className="w-6 h-6 text-yellow-400" />
                <span className="text-2xl font-bold text-white">4.9/5 Rating</span>
              </div>
              <p className="text-gray-300">Student satisfaction</p>
            </div>
          </div>
        </div>

        {/* Level Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {othmLevels.map((level) => (
              <button
                key={level.level}
                onClick={() => setActiveLevel(level.level)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeLevel === level.level
                    ? `bg-gradient-to-r ${level.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                Level {level.level} - {level.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Level Information */}
          <div className={`${currentLevel.bgColor} rounded-2xl p-8 ${currentLevel.borderColor} border-2`}>
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${currentLevel.color} rounded-xl flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{currentLevel.level}</span>
                </div>
                <div>
                  <h2 className={`text-2xl font-bold ${currentLevel.textColor}`}>
                    {currentLevel.subtitle}
                  </h2>
                  <p className={`text-sm ${currentLevel.textColor} opacity-80`}>
                    Duration: {currentLevel.duration} • Credits: {currentLevel.credits}
                  </p>
                </div>
              </div>
              
              <p className={`text-lg ${currentLevel.textColor} mb-6`}>
                {currentLevel.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className={`text-lg font-semibold ${currentLevel.textColor} mb-3`}>
                Key Learning Areas:
              </h3>
              {currentLevel.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FaCheckCircle className={`w-5 h-5 ${currentLevel.iconColor}`} />
                  <span className={`${currentLevel.textColor}`}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits & CTA */}
          <div className="space-y-6">
            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose OTHM?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaAward className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Internationally Recognized</h4>
                    <p className="text-gray-300">UK qualifications accepted by universities and employers worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaBookOpen className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Flexible Learning</h4>
                    <p className="text-gray-300">Study at your own pace with online and blended learning options</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaGraduationCap className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Progression Pathway</h4>
                    <p className="text-gray-300">Clear pathway from Level 3 to Level 6 with credit transfer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Your OTHM Journey Today!
              </h3>
              <p className="text-gray-800 mb-6">
                Join thousands of successful students who have achieved their academic goals with OTHM qualifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-colors duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Level Progression */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Your Progression Pathway</h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {othmLevels.map((level, index) => (
              <div key={level.level} className="flex items-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {level.level}
                </div>
                <div className="ml-4 text-center">
                  <h4 className="text-white font-semibold">{level.title}</h4>
                  <p className="text-gray-300 text-sm">{level.credits}</p>
                </div>
                {index < othmLevels.length - 1 && (
                  <div className="hidden md:block mx-4">
                    <FaArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
