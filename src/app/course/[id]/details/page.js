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
  FaLanguage,
  FaCalendar,
  FaCertificate,
  FaMobile,
  FaDesktop,
  FaHeadphones,
  FaInfinity,
  FaShieldAlt,
  FaHeart,
  FaShare,
  FaBookmark,
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
  FaCode,
  FaDatabase,
  FaCloud,
  FaRocket,
  FaComments,
  FaQuestionCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function CourseDetailsPage() {
  const params = useParams();
  const courseId = params.id;
  
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState(new Set());
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Mock course data
  const course = {
    id: courseId,
    title: 'Complete Web Development Bootcamp 2024',
    subtitle: 'From Zero to Hero: Master Modern Web Development',
    instructor: {
      name: 'John Doe',
      title: 'Senior Full-Stack Developer',
      image: '/api/placeholder/100/100',
      bio: 'John is a senior web developer with over 10 years of experience in building scalable web applications. He has worked with companies like Google, Microsoft, and Amazon, and has taught over 50,000 students worldwide.',
      rating: 4.9,
      students: 50000,
      courses: 15,
      experience: '10+ years',
      specializations: ['React', 'Node.js', 'Python', 'AWS', 'Docker']
    },
    rating: 4.8,
    reviews: 1250,
    students: 15000,
    duration: '45 hours',
    level: 'Beginner',
    price: 99.99,
    originalPrice: 199.99,
    language: 'English',
    lastUpdated: '2024-01-15',
    category: 'Web Development',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    description: 'Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js. This comprehensive course covers everything you need to become a professional web developer. You\'ll build real-world projects, learn best practices, and gain the skills needed to land your first developer job.',
    longDescription: `This comprehensive web development bootcamp is designed to take you from absolute beginner to job-ready developer. You'll learn modern web technologies through hands-on projects and real-world applications.

The course covers frontend development with HTML, CSS, and JavaScript, then moves to modern frameworks like React. You'll also learn backend development with Node.js and Express, database management with MongoDB, and deployment strategies.

What makes this course special:
• Real-world projects you can add to your portfolio
• Industry best practices and coding standards
• Career guidance and job search tips
• Lifetime access to all course materials
• Certificate of completion
• 30-day money-back guarantee

Perfect for beginners with no programming experience, as well as developers looking to expand their skills.`,
    thumbnail: '/api/placeholder/800/450',
    previewVideo: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    whatYouWillLearn: [
      'Build responsive websites with HTML5 and CSS3',
      'Master JavaScript ES6+ and modern programming concepts',
      'Create interactive UIs with React and Redux',
      'Build RESTful APIs with Node.js and Express',
      'Work with databases using MongoDB and Mongoose',
      'Implement user authentication and authorization',
      'Deploy applications to cloud platforms like Heroku and AWS',
      'Use Git and GitHub for version control',
      'Apply responsive design principles',
      'Optimize websites for performance and SEO'
    ],
    requirements: [
      'No programming experience required - we start from the basics',
      'Basic computer skills and internet connection',
      'Text editor (VS Code recommended - we\'ll show you how to set it up)',
      'Motivation to learn and practice coding',
      'Windows, Mac, or Linux computer'
    ],
    targetAudience: [
      'Complete beginners who want to learn web development',
      'Career changers looking to enter the tech industry',
      'Students and recent graduates',
      'Entrepreneurs who want to build their own websites',
      'Anyone interested in learning modern web technologies'
    ],
    sections: [
      {
        id: 1,
        title: 'Getting Started with Web Development',
        description: 'Introduction to web development and setting up your environment',
        duration: '3 hours',
        lectures: 12,
        isPreview: true,
        videos: [
          { id: 1, title: 'Welcome to the Course', duration: '5:30', isPreview: true, description: 'Course overview and what you\'ll learn' },
          { id: 2, title: 'Setting Up Your Development Environment', duration: '12:45', isPreview: true, description: 'Install VS Code, Node.js, and essential tools' },
          { id: 3, title: 'How the Web Works', duration: '8:20', isPreview: false, description: 'Understanding HTTP, browsers, and web servers' },
          { id: 4, title: 'Introduction to HTML', duration: '15:30', isPreview: false, description: 'HTML basics, tags, and document structure' },
          { id: 5, title: 'HTML Forms and Input Elements', duration: '18:15', isPreview: false, description: 'Creating forms and handling user input' },
          { id: 6, title: 'HTML5 Semantic Elements', duration: '12:30', isPreview: false, description: 'Modern HTML5 tags and accessibility' }
        ]
      },
      {
        id: 2,
        title: 'CSS Styling and Layout',
        description: 'Master CSS for beautiful and responsive designs',
        duration: '6 hours',
        lectures: 18,
        isPreview: false,
        videos: [
          { id: 7, title: 'CSS Basics and Selectors', duration: '20:15', isPreview: false, description: 'CSS syntax, selectors, and specificity' },
          { id: 8, title: 'CSS Box Model and Layout', duration: '25:45', isPreview: false, description: 'Understanding margins, padding, and borders' },
          { id: 9, title: 'Flexbox Layout', duration: '30:20', isPreview: false, description: 'Modern CSS layout with Flexbox' },
          { id: 10, title: 'CSS Grid Layout', duration: '28:10', isPreview: false, description: 'Advanced layout with CSS Grid' },
          { id: 11, title: 'Responsive Design Principles', duration: '22:30', isPreview: false, description: 'Making websites work on all devices' },
          { id: 12, title: 'CSS Animations and Transitions', duration: '18:45', isPreview: false, description: 'Adding smooth animations to your websites' }
        ]
      },
      {
        id: 3,
        title: 'JavaScript Fundamentals',
        description: 'Learn JavaScript programming from the ground up',
        duration: '8 hours',
        lectures: 22,
        isPreview: false,
        videos: [
          { id: 13, title: 'JavaScript Basics and Variables', duration: '18:30', isPreview: false, description: 'Variables, data types, and basic syntax' },
          { id: 14, title: 'Functions and Scope', duration: '24:15', isPreview: false, description: 'Creating and using functions effectively' },
          { id: 15, title: 'Objects and Arrays', duration: '28:45', isPreview: false, description: 'Working with complex data structures' },
          { id: 16, title: 'DOM Manipulation', duration: '32:20', isPreview: false, description: 'Interacting with HTML elements using JavaScript' },
          { id: 17, title: 'Event Handling', duration: '25:10', isPreview: false, description: 'Responding to user interactions' },
          { id: 18, title: 'ES6+ Features', duration: '35:30', isPreview: false, description: 'Modern JavaScript features and syntax' }
        ]
      },
      {
        id: 4,
        title: 'React Development',
        description: 'Build modern user interfaces with React',
        duration: '10 hours',
        lectures: 25,
        isPreview: false,
        videos: [
          { id: 19, title: 'Introduction to React', duration: '22:15', isPreview: false, description: 'What is React and why use it?' },
          { id: 20, title: 'Components and JSX', duration: '28:30', isPreview: false, description: 'Creating your first React components' },
          { id: 21, title: 'State and Props', duration: '32:45', isPreview: false, description: 'Managing component data and communication' },
          { id: 22, title: 'Event Handling in React', duration: '25:20', isPreview: false, description: 'Handling user interactions in React' },
          { id: 23, title: 'React Hooks', duration: '40:15', isPreview: false, description: 'Modern React with hooks' },
          { id: 24, title: 'Building a Complete React App', duration: '45:30', isPreview: false, description: 'Putting it all together in a real project' }
        ]
      },
      {
        id: 5,
        title: 'Backend Development with Node.js',
        description: 'Create server-side applications and APIs',
        duration: '8 hours',
        lectures: 20,
        isPreview: false,
        videos: [
          { id: 25, title: 'Introduction to Node.js', duration: '20:30', isPreview: false, description: 'Server-side JavaScript with Node.js' },
          { id: 26, title: 'Express.js Framework', duration: '28:15', isPreview: false, description: 'Building web servers with Express' },
          { id: 27, title: 'RESTful API Design', duration: '35:45', isPreview: false, description: 'Creating APIs that follow REST principles' },
          { id: 28, title: 'Middleware and Authentication', duration: '32:20', isPreview: false, description: 'Securing your APIs with authentication' },
          { id: 29, title: 'Error Handling and Validation', duration: '25:10', isPreview: false, description: 'Robust error handling and input validation' },
          { id: 30, title: 'Testing APIs', duration: '30:45', isPreview: false, description: 'Writing tests for your backend code' }
        ]
      },
      {
        id: 6,
        title: 'Database Integration',
        description: 'Working with databases and data persistence',
        duration: '6 hours',
        lectures: 15,
        isPreview: false,
        videos: [
          { id: 31, title: 'Introduction to MongoDB', duration: '22:30', isPreview: false, description: 'NoSQL databases and MongoDB basics' },
          { id: 32, title: 'Mongoose ODM', duration: '28:15', isPreview: false, description: 'Working with MongoDB using Mongoose' },
          { id: 33, title: 'CRUD Operations', duration: '32:45', isPreview: false, description: 'Create, Read, Update, Delete operations' },
          { id: 34, title: 'Data Relationships', duration: '25:20', isPreview: false, description: 'Modeling relationships between data' },
          { id: 35, title: 'Database Optimization', duration: '20:30', isPreview: false, description: 'Improving database performance' }
        ]
      },
      {
        id: 7,
        title: 'Deployment and Production',
        description: 'Deploy your applications to the cloud',
        duration: '4 hours',
        lectures: 10,
        isPreview: false,
        videos: [
          { id: 36, title: 'Version Control with Git', duration: '25:15', isPreview: false, description: 'Managing code with Git and GitHub' },
          { id: 37, title: 'Deployment Strategies', duration: '20:30', isPreview: false, description: 'Different ways to deploy web applications' },
          { id: 38, title: 'Heroku Deployment', duration: '18:45', isPreview: false, description: 'Deploying to Heroku platform' },
          { id: 39, title: 'AWS Deployment', duration: '22:20', isPreview: false, description: 'Deploying to Amazon Web Services' },
          { id: 40, title: 'Performance Optimization', duration: '15:30', isPreview: false, description: 'Making your apps faster and more efficient' }
        ]
      }
    ],
    features: [
      { icon: FaInfinity, title: 'Lifetime Access', description: 'Access to all course materials forever' },
      { icon: FaMobile, title: 'Mobile & Desktop', description: 'Learn on any device, anywhere' },
      { icon: FaCertificate, title: 'Certificate', description: 'Get a certificate of completion' },
      { icon: FaDownload, title: 'Downloadable', description: 'Download videos for offline learning' },
      { icon: FaHeadphones, title: 'Audio Description', description: 'Audio descriptions for accessibility' },
      { icon: FaShieldAlt, title: '30-Day Guarantee', description: '30-day money-back guarantee' }
    ],
    reviews: [
      {
        id: 1,
        user: 'Sarah Johnson',
        avatar: '/api/placeholder/50/50',
        rating: 5,
        date: '2 days ago',
        comment: 'This course is absolutely amazing! John explains everything so clearly and the projects are very practical. I went from knowing nothing about web development to building my own websites. Highly recommended!',
        helpful: 24
      },
      {
        id: 2,
        user: 'Mike Chen',
        avatar: '/api/placeholder/50/50',
        rating: 5,
        date: '1 week ago',
        comment: 'The best web development course I\'ve taken. The instructor is knowledgeable and the curriculum is well-structured. The real-world projects really help solidify the concepts.',
        helpful: 18
      },
      {
        id: 3,
        user: 'Emily Rodriguez',
        avatar: '/api/placeholder/50/50',
        rating: 4,
        date: '2 weeks ago',
        comment: 'Great course for beginners. The pace is perfect and the explanations are clear. I wish there were more advanced topics covered, but overall very satisfied.',
        helpful: 12
      }
    ]
  };

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const totalLectures = course.sections.reduce((sum, section) => sum + section.lectures, 0);
  const totalVideos = course.sections.reduce((sum, section) => sum + section.videos.length, 0);

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
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <FaPlay className="w-5 h-5" />
                  <span>Preview Course</span>
                </button>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  50% OFF
                </span>
              </div>
            </div>

            {/* Course Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h1>
                <p className="text-lg text-gray-600 mb-4">{course.subtitle}</p>
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
                  <FaCalendar className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold">{course.lastUpdated}</span>
                  <span className="text-gray-600">updated</span>
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
                  <FaHeart className="w-5 h-5" />
                  <span>Save</span>
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2">
                  <FaShare className="w-5 h-5" />
                  <span>Share</span>
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

      {/* Main Content */}
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
                    <div className="space-y-8">
                      {/* Description */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">About This Course</h3>
                        <div className="text-gray-700 leading-relaxed">
                          {showFullDescription ? course.longDescription : course.description}
                          {!showFullDescription && (
                            <button
                              onClick={() => setShowFullDescription(true)}
                              className="text-violet-600 hover:text-violet-700 ml-2 font-medium"
                            >
                              Read more...
                            </button>
                          )}
                        </div>
                      </div>

                      {/* What You'll Learn */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">What you&apos;ll learn</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.whatYouWillLearn.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                        <ul className="space-y-2">
                          {course.requirements.map((item, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Target Audience */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Who this course is for</h3>
                        <ul className="space-y-2">
                          {course.targetAudience.map((item, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Course Features */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Course Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {course.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <feature.icon className="w-6 h-6 text-violet-600" />
                              <div>
                                <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'curriculum' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Course Curriculum</h3>
                          <p className="text-gray-600">{totalLectures} lectures • {course.duration} total length</p>
                        </div>
                        <div className="text-sm text-gray-500">
                          {expandedSections.size === course.sections.length ? 'All sections expanded' : `${expandedSections.size} of ${course.sections.length} sections expanded`}
                        </div>
                      </div>

                      {course.sections.map((section, index) => (
                        <div key={section.id} className="border border-gray-200 rounded-lg">
                          <div 
                            className="p-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                            onClick={() => toggleSection(section.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                {expandedSections.has(section.id) ? (
                                  <FaChevronUp className="w-4 h-4 text-gray-600" />
                                ) : (
                                  <FaChevronDown className="w-4 h-4 text-gray-600" />
                                )}
                                <div>
                                  <h4 className="font-semibold text-gray-900">{section.title}</h4>
                                  <p className="text-sm text-gray-600">{section.description}</p>
                                </div>
                              </div>
                              <div className="text-sm text-gray-600 text-right">
                                <div>{section.lectures} lectures</div>
                                <div>{section.duration}</div>
                                {section.isPreview && (
                                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mt-1">
                                    Preview
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {expandedSections.has(section.id) && (
                            <div className="p-2">
                              {section.videos.map((video, videoIndex) => (
                                <div
                                  key={video.id}
                                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded transition-colors"
                                >
                                  <div className="flex items-center space-x-3">
                                    <FaPlay className="w-4 h-4 text-gray-400" />
                                    <div>
                                      <span className="text-gray-900 font-medium">{video.title}</span>
                                      <p className="text-xs text-gray-500">{video.description}</p>
                                    </div>
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
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'instructor' && (
                    <div className="space-y-6">
                      <div className="flex items-start space-x-6">
                        <Image
                          src={course.instructor.image}
                          alt={course.instructor.name}
                          className="w-24 h-24 rounded-full"
                          width={400}
                          height={400}
                        />
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.instructor.name}</h3>
                          <p className="text-lg text-gray-600 mb-4">{course.instructor.title}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-2xl font-bold text-violet-600">{course.instructor.rating}</div>
                              <div className="text-sm text-gray-600">Instructor Rating</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-2xl font-bold text-violet-600">{course.instructor.students.toLocaleString()}</div>
                              <div className="text-sm text-gray-600">Students</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-2xl font-bold text-violet-600">{course.instructor.courses}</div>
                              <div className="text-sm text-gray-600">Courses</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-2xl font-bold text-violet-600">{course.instructor.experience}</div>
                              <div className="text-sm text-gray-600">Experience</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">About the Instructor</h4>
                        <p className="text-gray-700 leading-relaxed mb-6">{course.instructor.bio}</p>
                        
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Specializations</h5>
                          <div className="flex flex-wrap gap-2">
                            {course.instructor.specializations.map((skill, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
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
                              className={`w-6 h-6 ${
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
                        {course.reviews.map((review) => (
                          <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                              <Image
                                src={review.avatar}
                                alt={review.user}
                                className="w-12 h-12 rounded-full"
                                width={400}
                                height={400}
                              />
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h4 className="font-semibold text-gray-900">{review.user}</h4>
                                  <div className="flex items-center space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <FaStar
                                        key={star}
                                        className={`w-4 h-4 ${
                                          star <= review.rating
                                            ? 'text-yellow-400 fill-current'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                                <p className="text-gray-700 mb-3">{review.comment}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <button className="flex items-center space-x-1 hover:text-gray-700">
                                    <span>Helpful</span>
                                    <span>({review.helpful})</span>
                                  </button>
                                  <button className="hover:text-gray-700">Reply</button>
                                </div>
                              </div>
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
                    <span className="text-gray-600">Lectures</span>
                    <span className="font-medium">{totalLectures}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Videos</span>
                    <span className="font-medium">{totalVideos}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated</span>
                    <span className="font-medium">{course.lastUpdated}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href={`/course/${courseId}/video`}
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300 text-center flex items-center justify-center space-x-2 mb-3"
                  >
                    <FaPlay className="w-4 h-4" />
                    <span>Start Learning</span>
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <div className="text-center text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <FaShieldAlt className="w-4 h-4" />
                      <span>30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <FaInfinity className="w-4 h-4" />
                      <span>Lifetime access</span>
                    </div>
                  </div>
                </div>

                {/* Course Tags */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Course Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
