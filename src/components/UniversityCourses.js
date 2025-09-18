'use client';

import { FaGraduationCap, FaBook, FaClock, FaUsers, FaCertificate } from 'react-icons/fa';

export default function UniversityCourses() {
  const semesters = [
    {
      id: 1,
      name: 'First Semester',
      duration: '4 months',
      credits: '18 credits',
      subjects: [
        { name: 'Mathematics I', credits: 3, type: 'Core' },
        { name: 'Physics I', credits: 3, type: 'Core' },
        { name: 'Chemistry I', credits: 3, type: 'Core' },
        { name: 'English Communication', credits: 2, type: 'Language' },
        { name: 'Computer Fundamentals', credits: 3, type: 'Core' },
        { name: 'Engineering Drawing', credits: 2, type: 'Practical' },
        { name: 'Workshop Practice', credits: 2, type: 'Practical' }
      ]
    },
    {
      id: 2,
      name: 'Second Semester',
      duration: '4 months',
      credits: '20 credits',
      subjects: [
        { name: 'Mathematics II', credits: 3, type: 'Core' },
        { name: 'Physics II', credits: 3, type: 'Core' },
        { name: 'Chemistry II', credits: 3, type: 'Core' },
        { name: 'Programming in C', credits: 3, type: 'Core' },
        { name: 'Basic Electronics', credits: 3, type: 'Core' },
        { name: 'Environmental Studies', credits: 2, type: 'General' },
        { name: 'Lab Practice I', credits: 2, type: 'Practical' },
        { name: 'Project Work I', credits: 1, type: 'Project' }
      ]
    },
    {
      id: 3,
      name: 'Third Semester',
      duration: '4 months',
      credits: '22 credits',
      subjects: [
        { name: 'Data Structures', credits: 3, type: 'Core' },
        { name: 'Digital Electronics', credits: 3, type: 'Core' },
        { name: 'Database Management', credits: 3, type: 'Core' },
        { name: 'Object-Oriented Programming', credits: 3, type: 'Core' },
        { name: 'Network Fundamentals', credits: 3, type: 'Core' },
        { name: 'Business Communication', credits: 2, type: 'General' },
        { name: 'Lab Practice II', credits: 3, type: 'Practical' },
        { name: 'Seminar', credits: 2, type: 'Presentation' }
      ]
    }
  ];

  const getSubjectTypeColor = (type) => {
    switch (type) {
      case 'Core': return 'bg-blue-100 text-blue-800';
      case 'Practical': return 'bg-green-100 text-green-800';
      case 'Language': return 'bg-purple-100 text-purple-800';
      case 'General': return 'bg-yellow-100 text-yellow-800';
      case 'Project': return 'bg-red-100 text-red-800';
      case 'Presentation': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FaGraduationCap className="w-8 h-8 text-violet-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              University Semester Courses
            </h2>
          </div>
          
          {/* Gradient Line */}
          <div className="flex justify-center space-x-1 mb-6">
            <div className="w-6 h-1 bg-violet-500 rounded-full"></div>
            <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-1 bg-green-500 rounded-full"></div>
            <div className="w-6 h-1 bg-yellow-500 rounded-full"></div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive credit-based semester courses designed to provide structured academic learning with industry-relevant curriculum.
          </p>
        </div>

        {/* Semester Courses */}
        <div className="space-y-8">
          {semesters.map((semester) => (
            <div key={semester.id} className="bg-gray-50 rounded-xl p-8 shadow-lg">
              {/* Semester Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {semester.name}
                  </h3>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FaClock className="w-4 h-4" />
                      <span>{semester.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCertificate className="w-4 h-4" />
                      <span>{semester.credits}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <button className="px-6 py-3 bg-violet-600 hover:bg-violet-900 text-white font-medium rounded-lg transition-colors duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>

              {/* Subjects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {semester.subjects.map((subject, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                        {subject.name}
                      </h4>
                      <span className="text-xs font-bold text-violet-600 bg-violet-100 px-2 py-1 rounded-full">
                        {subject.credits} credits
                      </span>
                    </div>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getSubjectTypeColor(subject.type)}`}>
                      {subject.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-gradient-to-r from-violet-50 to-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our University Courses?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBook className="w-8 h-8 text-violet-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Structured Curriculum</h4>
              <p className="text-sm text-gray-600">Well-organized semester-wise learning with clear objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCertificate className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Credit System</h4>
              <p className="text-sm text-gray-600">Academic credit-based evaluation system</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Faculty</h4>
              <p className="text-sm text-gray-600">Learn from experienced university professors</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-violet-900 mb-2">Degree Pathway</h4>
              <p className="text-sm text-gray-600">Clear pathway to academic degrees and certifications</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-violet-900 mb-4">
              Ready to Start Your Academic Journey?
            </h3>
            <p className="text-violet-600 mb-6">
              Join our university semester courses and earn academic credits while building industry-relevant skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-violet-600 hover:bg-violet-900 text-white font-medium rounded-lg transition-colors duration-300">
                View All Semesters
              </button>
              <button className="px-8 py-3 border border-violet-600 text-violet-600 hover:bg-violet-50 font-medium rounded-lg transition-colors duration-300">
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
