'use client';

import { useState, useEffect } from 'react';
import { FaSearch, FaStar, FaChevronLeft, FaChevronRight, FaUser, FaGraduationCap, FaBookOpen, FaUsers, FaAward } from 'react-icons/fa';

export default function InstructorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInstructors, setFilteredInstructors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [instructorsPerPage] = useState(6);

  // Mock instructor data
  const instructors = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Instructor',
      profileImage: '/api/placeholder/150/150',
      rating: 4.8,
      reviews: 124,
      subjects: ['Mathematics', 'Physics', 'Calculus'],
      experience: '8 years',
      education: 'PhD in Mathematics',
      bio: 'Experienced mathematics instructor with expertise in calculus and advanced mathematics.',
      courses: 12,
      students: 450
    },
    {
      id: 2,
      name: 'V Kumar',
      role: 'Test',
      profileImage: '/api/placeholder/150/150',
      rating: 4.5,
      reviews: 89,
      subjects: ['Computer Science', 'Programming', 'Data Structures'],
      experience: '6 years',
      education: 'MSc in Computer Science',
      bio: 'Passionate computer science instructor specializing in programming and data structures.',
      courses: 8,
      students: 320
    },
    {
      id: 3,
      name: 'Dr. Sarah Wilson',
      role: 'Professor',
      profileImage: '/api/placeholder/150/150',
      rating: 4.9,
      reviews: 156,
      subjects: ['Chemistry', 'Organic Chemistry', 'Biochemistry'],
      experience: '12 years',
      education: 'PhD in Chemistry',
      bio: 'Renowned chemistry professor with extensive research experience in organic chemistry.',
      courses: 15,
      students: 680
    },
    {
      id: 4,
      name: 'Michael Chen',
      role: 'Senior Instructor',
      profileImage: '/api/placeholder/150/150',
      rating: 4.7,
      reviews: 203,
      subjects: ['Electronics', 'Digital Electronics', 'Circuit Design'],
      experience: '10 years',
      education: 'MEng in Electrical Engineering',
      bio: 'Expert in electronics and circuit design with industry experience.',
      courses: 10,
      students: 520
    },
    {
      id: 5,
      name: 'Dr. Emily Rodriguez',
      role: 'Associate Professor',
      profileImage: '/api/placeholder/150/150',
      rating: 4.6,
      reviews: 98,
      subjects: ['Database Management', 'SQL', 'Data Analytics'],
      experience: '7 years',
      education: 'PhD in Information Systems',
      bio: 'Database expert with focus on modern data management and analytics.',
      courses: 7,
      students: 380
    },
    {
      id: 6,
      name: 'James Thompson',
      role: 'Instructor',
      profileImage: '/api/placeholder/150/150',
      rating: 4.4,
      reviews: 67,
      subjects: ['English Literature', 'Creative Writing', 'Communication'],
      experience: '5 years',
      education: 'MA in English Literature',
      bio: 'Literature enthusiast and communication expert.',
      courses: 6,
      students: 280
    },
    {
      id: 7,
      name: 'Dr. Lisa Park',
      role: 'Professor',
      profileImage: '/api/placeholder/150/150',
      rating: 4.8,
      reviews: 142,
      subjects: ['Physics', 'Quantum Physics', 'Thermodynamics'],
      experience: '15 years',
      education: 'PhD in Physics',
      bio: 'Distinguished physics professor with research in quantum mechanics.',
      courses: 18,
      students: 750
    },
    {
      id: 8,
      name: 'Robert Johnson',
      role: 'Senior Instructor',
      profileImage: '/api/placeholder/150/150',
      rating: 4.5,
      reviews: 115,
      subjects: ['Web Development', 'JavaScript', 'React'],
      experience: '8 years',
      education: 'BSc in Computer Science',
      bio: 'Full-stack developer and web technologies instructor.',
      courses: 9,
      students: 420
    },
    {
      id: 9,
      name: 'Dr. Maria Garcia',
      role: 'Associate Professor',
      profileImage: '/api/placeholder/150/150',
      rating: 4.7,
      reviews: 134,
      subjects: ['Business Management', 'Marketing', 'Entrepreneurship'],
      experience: '11 years',
      education: 'PhD in Business Administration',
      bio: 'Business strategy expert with industry consulting experience.',
      courses: 11,
      students: 580
    },
    {
      id: 10,
      name: 'David Kim',
      role: 'Instructor',
      profileImage: '/api/placeholder/150/150',
      rating: 4.3,
      reviews: 76,
      subjects: ['French Language', 'Linguistics', 'Translation'],
      experience: '6 years',
      education: 'MA in French Literature',
      bio: 'Native French speaker and language learning specialist.',
      courses: 5,
      students: 240
    },
    {
      id: 11,
      name: 'Dr. Ahmed Hassan',
      role: 'Professor',
      profileImage: '/api/placeholder/150/150',
      rating: 4.9,
      reviews: 189,
      subjects: ['Environmental Science', 'Sustainability', 'Ecology'],
      experience: '13 years',
      education: 'PhD in Environmental Science',
      bio: 'Environmental scientist with focus on sustainable development.',
      courses: 14,
      students: 620
    },
    {
      id: 12,
      name: 'Jennifer Lee',
      role: 'Senior Instructor',
      profileImage: '/api/placeholder/150/150',
      rating: 4.6,
      reviews: 92,
      subjects: ['Drawing', 'Art History', 'Visual Design'],
      experience: '9 years',
      education: 'MFA in Fine Arts',
      bio: 'Professional artist and design instructor.',
      courses: 8,
      students: 350
    }
  ];

  // Filter instructors based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredInstructors(instructors);
    } else {
      const filtered = instructors.filter(instructor =>
        instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        instructor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        instructor.subjects.some(subject => 
          subject.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredInstructors(filtered);
    }
    setCurrentPage(1); // Reset to first page when searching
  }, [searchQuery]);

  // Calculate pagination
  const totalInstructors = filteredInstructors.length;
  const totalPages = Math.ceil(totalInstructors / instructorsPerPage);
  const startIndex = (currentPage - 1) * instructorsPerPage;
  const endIndex = startIndex + instructorsPerPage;
  const currentInstructors = filteredInstructors.slice(startIndex, endIndex);

  const handleSearch = () => {
    // Search is handled by useEffect when searchQuery changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="w-4 h-4 text-yellow-400 fill-current opacity-50" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FaUsers className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Our Instructors</h1>
            </div>
            
            <div className="flex justify-center space-x-1 mb-6">
              <div className="w-6 h-1 bg-white rounded-full"></div>
              <div className="w-6 h-1 bg-blue-300 rounded-full"></div>
              <div className="w-6 h-1 bg-green-300 rounded-full"></div>
              <div className="w-6 h-1 bg-yellow-300 rounded-full"></div>
            </div>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet our expert instructors who are passionate about teaching and helping you achieve your learning goals.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Results Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Results Count */}
            <div className="text-gray-700">
              <span className="font-medium">
                Showing {totalInstructors > 0 ? startIndex + 1 : 0} - {Math.min(endIndex, totalInstructors)} of {totalInstructors} results
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search our instructors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-violet-900 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentInstructors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentInstructors.map((instructor) => (
                <div key={instructor.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  {/* Profile Image */}
                  <div className="text-center mb-4">
                    <div className="relative inline-block">
                      <img
                        src={instructor.profileImage}
                        alt={instructor.name}
                        className="w-24 h-24 rounded-full border-4 border-violet-500 mx-auto object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <FaUser className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Instructor Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                    <p className="text-gray-600 mb-2">{instructor.role}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {renderStars(instructor.rating)}
                    </div>
                    <p className="text-sm text-gray-500">{instructor.rating} ({instructor.reviews})</p>
                  </div>

                  {/* Subjects */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {instructor.subjects.slice(0, 3).map((subject, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                      {instructor.subjects.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{instructor.subjects.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <FaBookOpen className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-gray-700">{instructor.courses}</span>
                      </div>
                      <p className="text-xs text-gray-500">Courses</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <FaUsers className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-gray-700">{instructor.students}</span>
                      </div>
                      <p className="text-xs text-gray-500">Students</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{instructor.bio}</p>

                  {/* Action Button */}
                  <button className="w-full px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors duration-300">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FaUser className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Instructors Found</h3>
              <p className="text-gray-600">
                {searchQuery ? `No instructors match your search for "${searchQuery}"` : 'No instructors available at the moment.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-l-lg font-medium transition-colors duration-300 ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <FaChevronLeft className="w-4 h-4 inline mr-1" />
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 font-medium transition-colors duration-300 ${
                    page === currentPage
                      ? 'bg-violet-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-r-lg font-medium transition-colors duration-300 ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-violet-600 hover:bg-violet-50 border border-gray-300'
                }`}
              >
                Next
                <FaChevronRight className="w-4 h-4 inline ml-1" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Instructors?
            </h2>
            <div className="flex justify-center space-x-1 mb-6">
              <div className="w-6 h-1 bg-violet-500 rounded-full"></div>
              <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-1 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Qualifications</h3>
              <p className="text-gray-600">All instructors hold advanced degrees and industry certifications.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaAward className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Experience</h3>
              <p className="text-gray-600">Years of teaching experience with thousands of successful students.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaStar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Ratings</h3>
              <p className="text-gray-600">Consistently rated highly by students for teaching quality.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Success</h3>
              <p className="text-gray-600">Dedicated to helping students achieve their learning goals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
