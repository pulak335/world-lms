'use client';

import { useState } from 'react';
import { FaGraduationCap, FaAward, FaUsers, FaBookOpen, FaGlobe, FaStar, FaCheckCircle, FaArrowRight, FaCalendar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function UniversityPage() {
  const [activeTab, setActiveTab] = useState('programs');

  const programs = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      duration: '4 Years',
      credits: '120 Credits',
      level: 'Undergraduate',
      description: 'Comprehensive computer science program covering programming, algorithms, data structures, and software engineering.',
      features: ['Programming Languages', 'Data Structures', 'Software Engineering', 'Database Systems', 'Web Development'],
      image: '/api/placeholder/400/300',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      title: 'Master of Business Administration',
      duration: '2 Years',
      credits: '60 Credits',
      level: 'Graduate',
      description: 'Advanced business management program focusing on leadership, strategy, and global business practices.',
      features: ['Strategic Management', 'Leadership', 'Marketing', 'Finance', 'Operations'],
      image: '/api/placeholder/400/300',
      color: 'from-green-500 to-green-700'
    },
    {
      id: 3,
      title: 'Bachelor of Engineering',
      duration: '4 Years',
      credits: '120 Credits',
      level: 'Undergraduate',
      description: 'Engineering program with specializations in mechanical, electrical, and civil engineering.',
      features: ['Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Project Management', 'Design'],
      image: '/api/placeholder/400/300',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 4,
      title: 'Master of Data Science',
      duration: '2 Years',
      credits: '60 Credits',
      level: 'Graduate',
      description: 'Cutting-edge data science program covering machine learning, statistics, and big data analytics.',
      features: ['Machine Learning', 'Statistics', 'Big Data', 'Python Programming', 'Data Visualization'],
      image: '/api/placeholder/400/300',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const othmDegrees = [
    {
      level: 3,
      title: 'Foundation Diploma',
      duration: '6-12 Months',
      credits: '120 Credits',
      description: 'Perfect starting point for your higher education journey.',
      subjects: ['Academic Writing', 'Research Methods', 'Business Communication', 'IT Skills', 'Study Skills'],
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-800',
      iconColor: 'text-blue-600'
    },
    {
      level: 4,
      title: 'Diploma',
      duration: '9-12 Months',
      credits: '120 Credits',
      description: 'Advanced diploma level qualification in your chosen field.',
      subjects: ['Business Management', 'Marketing Principles', 'Human Resources', 'Financial Management', 'Strategic Planning'],
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-800',
      iconColor: 'text-green-600'
    },
    {
      level: 5,
      title: 'Higher Diploma',
      duration: '12-18 Months',
      credits: '120 Credits',
      description: 'Higher diploma qualification for senior roles.',
      subjects: ['Advanced Strategy', 'Leadership & Management', 'Project Management', 'Quality Management', 'Change Management'],
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-800',
      iconColor: 'text-purple-600'
    },
    {
      level: 6,
      title: 'Top-up Degree',
      duration: '12-18 Months',
      credits: '120 Credits',
      description: 'Complete your degree with our top-up program.',
      subjects: ['Strategic Management', 'International Business', 'Entrepreneurship', 'Digital Marketing', 'Global Economics'],
      color: 'bg-violet-50 border-violet-200',
      textColor: 'text-violet-800',
      iconColor: 'text-violet-600'
    }
  ];

  const faculty = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Professor of Computer Science',
      department: 'Computer Science',
      image: '/api/placeholder/200/200',
      experience: '15 Years',
      specialization: 'Artificial Intelligence',
      education: 'PhD in Computer Science, MIT',
      achievements: ['Published 50+ Research Papers', 'IEEE Fellow', 'Nobel Prize Nominee']
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      title: 'Dean of Business School',
      department: 'Business Administration',
      image: '/api/placeholder/200/200',
      experience: '20 Years',
      specialization: 'Strategic Management',
      education: 'PhD in Business Administration, Harvard',
      achievements: ['Fortune 500 Consultant', 'Best Business Professor Award', 'Author of 10 Books']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Head of Engineering',
      department: 'Engineering',
      image: '/api/placeholder/200/200',
      experience: '18 Years',
      specialization: 'Mechanical Engineering',
      education: 'PhD in Mechanical Engineering, Stanford',
      achievements: ['Patent Holder', 'Industry Expert', 'Innovation Award Winner']
    },
    {
      id: 4,
      name: 'Prof. David Kim',
      title: 'Director of Data Science',
      department: 'Data Science',
      image: '/api/placeholder/200/200',
      experience: '12 Years',
      specialization: 'Machine Learning',
      education: 'PhD in Statistics, Berkeley',
      achievements: ['Google Research Fellow', 'Kaggle Grandmaster', 'AI Innovation Leader']
    }
  ];

  const stats = [
    { number: '5000+', label: 'Students Enrolled', icon: FaUsers },
    { number: '150+', label: 'Expert Faculty', icon: FaGraduationCap },
    { number: '50+', label: 'Academic Programs', icon: FaBookOpen },
    { number: '95%', label: 'Graduate Success Rate', icon: FaStar }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-violet-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <FaGraduationCap className="w-16 h-16 text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Excellence University
              </h1>
            </div>
            
            <div className="flex justify-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
              <div className="w-8 h-1 bg-violet-400 rounded-full"></div>
              <div className="w-8 h-1 bg-blue-400 rounded-full"></div>
              <div className="w-8 h-1 bg-green-400 rounded-full"></div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Empowering minds, transforming futures. Join our world-class university and unlock your potential with internationally recognized programs and expert faculty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Apply Now</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-colors duration-300">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-violet-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'programs', label: 'Academic Programs' },
              { id: 'othm', label: 'OTHM Degrees' },
              { id: 'faculty', label: 'Faculty' },
              { id: 'admissions', label: 'Admissions' },
              { id: 'campus', label: 'Campus Life' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-violet-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Academic Programs */}
          {activeTab === 'programs' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Academic Programs
                </h2>
                <div className="flex justify-center space-x-1 mb-6">
                  <div className="w-6 h-1 bg-violet-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choose from our comprehensive range of undergraduate and graduate programs designed to prepare you for success in your chosen field.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs.map((program) => (
                  <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className={`h-48 bg-gradient-to-r ${program.color} relative`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                          {program.level}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center space-x-1">
                            <FaCalendar className="w-4 h-4" />
                            <span>{program.duration}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <FaAward className="w-4 h-4" />
                            <span>{program.credits}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Subjects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.features.map((feature, index) => (
                            <span key={index} className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="w-full py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OTHM Degrees */}
          {activeTab === 'othm' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  UK OTHM Qualifications
                </h2>
                <div className="flex justify-center space-x-1 mb-6">
                  <div className="w-6 h-1 bg-yellow-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-violet-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Internationally recognized UK qualifications that provide a clear pathway from foundation to degree level.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {othmDegrees.map((degree) => (
                  <div key={degree.level} className={`${degree.color} rounded-xl p-6 border-2 hover:shadow-lg transition-shadow`}>
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className={`text-2xl font-bold ${degree.iconColor}`}>{degree.level}</span>
                      </div>
                      <h3 className={`text-xl font-bold ${degree.textColor} mb-2`}>
                        Level {degree.level} - {degree.title}
                      </h3>
                      <p className={`text-sm ${degree.textColor} opacity-80`}>
                        {degree.duration} • {degree.credits}
                      </p>
                    </div>
                    
                    <p className={`${degree.textColor} mb-4 text-sm`}>
                      {degree.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className={`font-semibold ${degree.textColor} text-sm`}>Key Subjects:</h4>
                      {degree.subjects.map((subject, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <FaCheckCircle className={`w-3 h-3 ${degree.iconColor}`} />
                          <span className={`text-xs ${degree.textColor}`}>{subject}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full py-2 ${degree.textColor} border-2 border-current rounded-lg hover:bg-current hover:text-white transition-colors font-medium text-sm`}>
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Faculty */}
          {activeTab === 'faculty' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Expert Faculty
                </h2>
                <div className="flex justify-center space-x-1 mb-6">
                  <div className="w-6 h-1 bg-green-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-purple-500 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Learn from world-class professors and industry experts who are passionate about education and research.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {faculty.map((member) => (
                  <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gray-200 relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTgwIDEwMEwxMDAgMTIwTDEyMCAxMDAiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+';
                        }}
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-violet-600 font-semibold mb-2">{member.title}</p>
                      <p className="text-gray-600 text-sm mb-3">{member.department}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <FaGraduationCap className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{member.experience} Experience</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaBookOpen className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{member.specialization}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaAward className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{member.education}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Achievements:</h4>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-center space-x-1">
                              <FaStar className="w-3 h-3 text-yellow-400" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Admissions */}
          {activeTab === 'admissions' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Admissions & Requirements
                </h2>
                <div className="flex justify-center space-x-1 mb-6">
                  <div className="w-6 h-1 bg-orange-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-red-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-pink-500 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Start your journey to academic excellence. Learn about our admission requirements and application process.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Requirements */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Requirements</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Undergraduate Programs</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-3">
                          <FaCheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">High School Diploma or equivalent</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <FaCheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">Minimum GPA of 2.5</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <FaCheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">English proficiency test (IELTS 6.0 or TOEFL 80)</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <FaCheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">Personal statement and letters of recommendation</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Graduate Programs</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-3">
                          <FaCheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">Bachelor&apos;s degree from accredited institution</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <FaCheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">Minimum GPA of 3.0</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <FaCheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">GMAT/GRE scores (if required)</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <FaCheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">Professional experience (for some programs)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Application Process */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Submit Application</h4>
                        <p className="text-gray-600 text-sm">Complete online application form with required documents</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Document Review</h4>
                        <p className="text-gray-600 text-sm">Our admissions team reviews your application and documents</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Interview</h4>
                        <p className="text-gray-600 text-sm">Schedule and complete admission interview (if required)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Decision</h4>
                        <p className="text-gray-600 text-sm">Receive admission decision within 2-4 weeks</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-violet-50 rounded-lg">
                    <h4 className="font-semibold text-violet-900 mb-2">Application Deadlines</h4>
                    <ul className="text-sm text-violet-800 space-y-1">
                      <li>• Fall Semester: July 15</li>
                      <li>• Spring Semester: November 15</li>
                      <li>• Summer Semester: March 15</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Campus Life */}
          {activeTab === 'campus' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Campus Life
                </h2>
                <div className="flex justify-center space-x-1 mb-6">
                  <div className="w-6 h-1 bg-teal-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-cyan-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Experience vibrant campus life with modern facilities, student organizations, and endless opportunities for growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Facilities */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <FaBookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Library</h3>
                  <p className="text-gray-600 mb-4">State-of-the-art library with 100,000+ books, digital resources, and quiet study spaces.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 24/7 Access</li>
                    <li>• Digital Resources</li>
                    <li>• Group Study Rooms</li>
                    <li>• Research Support</li>
                  </ul>
                </div>

                {/* Student Organizations */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <FaUsers className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Student Organizations</h3>
                  <p className="text-gray-600 mb-4">Join 50+ student clubs and organizations to pursue your interests and build connections.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Academic Clubs</li>
                    <li>• Sports Teams</li>
                    <li>• Cultural Groups</li>
                    <li>• Professional Societies</li>
                  </ul>
                </div>

                {/* Sports & Recreation */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <FaStar className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sports & Recreation</h3>
                  <p className="text-gray-600 mb-4">Stay active with our modern sports facilities and recreational programs.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Gymnasium</li>
                    <li>• Swimming Pool</li>
                    <li>• Tennis Courts</li>
                    <li>• Fitness Center</li>
                  </ul>
                </div>

                {/* Housing */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <FaMapMarkerAlt className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Student Housing</h3>
                  <p className="text-gray-600 mb-4">Comfortable and secure on-campus housing options for all students.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Modern Dormitories</li>
                    <li>• Meal Plans</li>
                    <li>• 24/7 Security</li>
                    <li>• Laundry Facilities</li>
                  </ul>
                </div>

                {/* Career Services */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <FaAward className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Career Services</h3>
                  <p className="text-gray-600 mb-4">Comprehensive career support to help you achieve your professional goals.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Job Placement</li>
                    <li>• Internship Programs</li>
                    <li>• Resume Building</li>
                    <li>• Interview Preparation</li>
                  </ul>
                </div>

                {/* International Programs */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <FaGlobe className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">International Programs</h3>
                  <p className="text-gray-600 mb-4">Global learning opportunities through exchange programs and international partnerships.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Study Abroad</li>
                    <li>• Exchange Programs</li>
                    <li>• International Internships</li>
                    <li>• Global Partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contact our admissions team for personalized guidance and start your application today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">admissions@excellence.edu</p>
              <p className="text-gray-400 text-sm">24/7 Support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">123 University Ave</p>
              <p className="text-gray-400 text-sm">Education City, EC 12345</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center space-x-4 mb-6">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaFacebook className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaTwitter className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaLinkedin className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaInstagram className="w-6 h-6 text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Excellence University. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
