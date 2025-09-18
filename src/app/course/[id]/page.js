'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  FaPlay, 
  FaClock, 
  FaUser, 
  FaStar, 
  FaDownload, 
  FaBookOpen, 
  FaUsers,
  FaAward,
  FaCheckCircle,
  FaArrowRight,
  FaBookmark
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id;
  
  const [activeTab, setActiveTab] = useState('overview');

  // Mock course data
  const course = {
    id: courseId,
    title: 'Complete Web Development Bootcamp',
    instructor: 'John Doe',
    instructorImage: '/api/placeholder/100/100',
    rating: 4.8,
    reviews: 1250,
    students: 15000,
    duration: '45 hours',
    level: 'Beginner',
    price: 99.99,
    originalPrice: 199.99,
    language: 'English',
    lastUpdated: '2024-01-15',
    description: 'Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js. This comprehensive course covers everything you need to become a professional web developer.',
    thumbnail: '/api/placeholder/800/450',
    previewVideo: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    whatYouWillLearn: [
      'Build responsive websites with HTML and CSS',
      'Master JavaScript programming fundamentals',
      'Create interactive UIs with React',
      'Build backend APIs with Node.js and Express',
      'Work with databases and authentication',
      'Deploy applications to the cloud'
    ],
    requirements: [
      'No programming experience required',
      'Basic computer skills',
      'Internet connection',
      'Text editor (VS Code recommended)'
    ],
    sections: [
      {
        id: 1,
        title: 'Getting Started',
        duration: '2 hours',
        lectures: 8,
        videos: [
          { id: 1, title: 'Introduction to Web Development', duration: '15:30', isPreview: true },
          { id: 2, title: 'Setting Up Your Development Environment', duration: '12:45', isPreview: false },
          { id: 3, title: 'HTML Basics and Structure', duration: '22:15', isPreview: false },
          { id: 4, title: 'HTML Forms and Input Elements', duration: '18:30', isPreview: false }
        ]
      },
      {
        id: 2,
        title: 'CSS Styling and Layout',
        duration: '4 hours',
        lectures: 12,
        videos: [
          { id: 5, title: 'CSS Basics and Selectors', duration: '20:15', isPreview: false },
          { id: 6, title: 'CSS Box Model and Layout', duration: '25:45', isPreview: false },
          { id: 7, title: 'Flexbox and Grid Layout', duration: '30:20', isPreview: false },
          { id: 8, title: 'Responsive Design Principles', duration: '22:10', isPreview: false }
        ]
      },
      {
        id: 3,
        title: 'JavaScript Fundamentals',
        duration: '6 hours',
        lectures: 15,
        videos: [
          { id: 9, title: 'JavaScript Basics and Variables', duration: '18:30', isPreview: false },
          { id: 10, title: 'Functions and Scope', duration: '24:15', isPreview: false },
          { id: 11, title: 'Objects and Arrays', duration: '28:45', isPreview: false },
          { id: 12, title: 'DOM Manipulation', duration: '32:20', isPreview: false }
        ]
      }
    ],
    instructor: {
      name: 'John Doe',
      title: 'Senior Web Developer',
      image: '/api/placeholder/100/100',
      bio: 'John is a senior web developer with over 10 years of experience in building scalable web applications. He has worked with companies like Google, Microsoft, and Amazon.',
      rating: 4.9,
      students: 50000,
      courses: 15
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Course Thumbnail */}
            <div className="relative">
              <Image
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-64 lg:h-80 object-cover rounded-lg"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <Link
                  href={`/course/${courseId}/video`}
                  className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <FaPlay className="w-5 h-5" />
                  <span>Start Learning</span>
                </Link>
              </div>
            </div>

            {/* Course Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6">{course.description}</p>
              </div>

              {/* Course Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <FaStar className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-600">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUsers className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">{course.students.toLocaleString()}</span>
                  <span className="text-gray-600">students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaClock className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">{course.duration}</span>
                  <span className="text-gray-600">total</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaAward className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold">{course.level}</span>
                  <span className="text-gray-600">level</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-violet-600">${course.price}</span>
                <span className="text-xl text-gray-500 line-through">${course.originalPrice}</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                  50% OFF
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Link
                  href={`/course/${courseId}/video`}
                  className="flex-1 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <FaPlay className="w-5 h-5" />
                  <span>Start Course</span>
                </Link>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2">
                  <FaBookmark className="w-5 h-5" />
                  <span>Save</span>
                </button>
              </div>

              {/* Instructor */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Image
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full"
                  width={400}
                  height={400}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{course.instructor.name}</h4>
                  <p className="text-sm text-gray-600">{course.instructor.title}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <FaStar className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{course.instructor.rating}</span>
                    <span className="text-sm text-gray-600">•</span>
                    <span className="text-sm text-gray-600">{course.instructor.students.toLocaleString()} students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-white rounded-lg shadow-lg mb-6">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8 px-6">
                    {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                          activeTab === tab
                            ? 'border-violet-500 text-violet-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-6">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">What you&apos;ll learn</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.whatYouWillLearn.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <FaCheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                        <ul className="space-y-2">
                          {course.requirements.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                        <p className="text-gray-700 leading-relaxed">{course.description}</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'curriculum' && (
                    <div className="space-y-4">
                      {course.sections.map((section, index) => (
                        <div key={section.id} className="border border-gray-200 rounded-lg">
                          <div className="p-4 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-gray-900">{section.title}</h4>
                              <div className="text-sm text-gray-600">
                                {section.lectures} lectures • {section.duration}
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-2">
                            {section.videos.map((video, videoIndex) => (
                              <div
                                key={video.id}
                                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded transition-colors"
                              >
                                <div className="flex items-center space-x-3">
                                  <FaPlay className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-900">{video.title}</span>
                                  {video.isPreview && (
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                      Preview
                                    </span>
                                  )}
                                </div>
                                <span className="text-sm text-gray-500">{video.duration}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'instructor' && (
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Image
                          src={course.instructor.image}
                          alt={course.instructor.name}
                          className="w-20 h-20 rounded-full"
                          width={400}
                          height={400}
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{course.instructor.name}</h3>
                          <p className="text-gray-600 mb-2">{course.instructor.title}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <FaStar className="w-4 h-4 text-yellow-400 fill-current" />
                              <span>{course.instructor.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaUsers className="w-4 h-4" />
                              <span>{course.instructor.students.toLocaleString()} students</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaBookOpen className="w-4 h-4" />
                              <span>{course.instructor.courses} courses</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{course.instructor.bio}</p>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-2">{course.rating}</div>
                        <div className="flex items-center justify-center space-x-1 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                              key={star}
                              className={`w-5 h-5 ${
                                star <= Math.floor(course.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">Based on {course.reviews} reviews</p>
                      </div>
                      
                      <div className="space-y-4">
                        {/* Mock reviews */}
                        {[1, 2, 3].map((review) => (
                          <div key={review} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <FaStar key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">2 days ago</span>
                            </div>
                            <p className="text-gray-700">
                              This course is amazing! The instructor explains everything clearly and the projects are very practical. Highly recommended for beginners.
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Image
                                src="/api/placeholder/32/32"
                                alt="User"
                                className="w-6 h-6 rounded-full"
                                width={32}
                                height={32}
                              />
                              <span className="text-sm font-medium text-gray-900">John Smith</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Course Details</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language</span>
                    <span className="font-medium">{course.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated</span>
                    <span className="font-medium">{course.lastUpdated}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href={`/course/${courseId}/video`}
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300 text-center flex items-center justify-center space-x-2"
                  >
                    <FaPlay className="w-4 h-4" />
                    <span>Start Learning</span>
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
