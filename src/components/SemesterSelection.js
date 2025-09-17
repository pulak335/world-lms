'use client';

import { useState } from 'react';
import { FaCheck, FaPlus, FaMinus, FaGraduationCap, FaBookOpen, FaClock, FaUsers } from 'react-icons/fa';

export default function SemesterSelection() {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(1);

  const allSubjects = [
    // Core Subjects
    { id: 1, name: 'Mathematics I', credits: 3, type: 'Core', semester: 1, description: 'Calculus, Algebra, and Trigonometry fundamentals' },
    { id: 2, name: 'Mathematics II', credits: 3, type: 'Core', semester: 2, description: 'Advanced Calculus and Linear Algebra' },
    { id: 3, name: 'Mathematics III', credits: 3, type: 'Core', semester: 3, description: 'Differential Equations and Complex Analysis' },
    { id: 4, name: 'Physics I', credits: 3, type: 'Core', semester: 1, description: 'Mechanics, Thermodynamics, and Waves' },
    { id: 5, name: 'Physics II', credits: 3, type: 'Core', semester: 2, description: 'Electricity, Magnetism, and Modern Physics' },
    { id: 6, name: 'Chemistry I', credits: 3, type: 'Core', semester: 1, description: 'General Chemistry and Organic Chemistry' },
    { id: 7, name: 'Chemistry II', credits: 3, type: 'Core', semester: 2, description: 'Physical Chemistry and Analytical Chemistry' },
    
    // Programming Subjects
    { id: 8, name: 'Programming in C', credits: 3, type: 'Programming', semester: 2, description: 'C programming fundamentals and data structures' },
    { id: 9, name: 'Object-Oriented Programming', credits: 3, type: 'Programming', semester: 3, description: 'Java, C++, and OOP concepts' },
    { id: 10, name: 'Data Structures', credits: 3, type: 'Programming', semester: 3, description: 'Algorithms and data structure implementation' },
    { id: 11, name: 'Web Development', credits: 3, type: 'Programming', semester: 4, description: 'HTML, CSS, JavaScript, and frameworks' },
    { id: 12, name: 'Mobile App Development', credits: 3, type: 'Programming', semester: 4, description: 'React Native and Flutter development' },
    
    // Electronics Subjects
    { id: 13, name: 'Basic Electronics', credits: 3, type: 'Electronics', semester: 2, description: 'Electronic components and circuits' },
    { id: 14, name: 'Digital Electronics', credits: 3, type: 'Electronics', semester: 3, description: 'Logic gates, flip-flops, and digital systems' },
    { id: 15, name: 'Microcontrollers', credits: 3, type: 'Electronics', semester: 4, description: 'Arduino, PIC, and embedded systems' },
    
    // Database Subjects
    { id: 16, name: 'Database Management', credits: 3, type: 'Database', semester: 3, description: 'SQL, MySQL, and database design' },
    { id: 17, name: 'Advanced Database', credits: 3, type: 'Database', semester: 4, description: 'NoSQL, MongoDB, and data analytics' },
    
    // Language Subjects
    { id: 18, name: 'English Communication', credits: 2, type: 'Language', semester: 1, description: 'Business communication and presentation skills' },
    { id: 19, name: 'Technical Writing', credits: 2, type: 'Language', semester: 2, description: 'Technical documentation and report writing' },
    { id: 20, name: 'French Language', credits: 2, type: 'Language', semester: 3, description: 'Basic French language skills' },
    
    // General Subjects
    { id: 21, name: 'Environmental Studies', credits: 2, type: 'General', semester: 2, description: 'Environmental science and sustainability' },
    { id: 22, name: 'Business Communication', credits: 2, type: 'General', semester: 3, description: 'Professional communication and ethics' },
    { id: 23, name: 'Project Management', credits: 2, type: 'General', semester: 4, description: 'Project planning and management skills' },
    
    // Practical Subjects
    { id: 24, name: 'Engineering Drawing', credits: 2, type: 'Practical', semester: 1, description: 'Technical drawing and CAD basics' },
    { id: 25, name: 'Workshop Practice', credits: 2, type: 'Practical', semester: 1, description: 'Hands-on workshop skills' },
    { id: 26, name: 'Lab Practice I', credits: 2, type: 'Practical', semester: 2, description: 'Physics and Chemistry laboratory work' },
    { id: 27, name: 'Lab Practice II', credits: 3, type: 'Practical', semester: 3, description: 'Programming and electronics lab' },
    
    // Project Subjects
    { id: 28, name: 'Project Work I', credits: 1, type: 'Project', semester: 2, description: 'Small-scale individual project' },
    { id: 29, name: 'Project Work II', credits: 2, type: 'Project', semester: 3, description: 'Medium-scale team project' },
    { id: 30, name: 'Final Year Project', credits: 4, type: 'Project', semester: 4, description: 'Comprehensive final year project' }
  ];

  const getSubjectTypeColor = (type) => {
    switch (type) {
      case 'Core': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Programming': return 'bg-green-100 text-green-800 border-green-200';
      case 'Electronics': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Database': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Language': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'General': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Practical': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Project': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredSubjects = allSubjects.filter(subject => subject.semester === selectedSemester);

  const toggleSubject = (subject) => {
    setSelectedSubjects(prev => {
      const isSelected = prev.find(s => s.id === subject.id);
      if (isSelected) {
        return prev.filter(s => s.id !== subject.id);
      } else {
        return [...prev, subject];
      }
    });
  };

  const getTotalCredits = () => {
    return selectedSubjects.reduce((total, subject) => total + subject.credits, 0);
  };

  const getSubjectsByType = () => {
    const grouped = {};
    selectedSubjects.forEach(subject => {
      if (!grouped[subject.type]) {
        grouped[subject.type] = [];
      }
      grouped[subject.type].push(subject);
    });
    return grouped;
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FaGraduationCap className="w-8 h-8 text-violet-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Open Credit System
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
            Choose your own subjects and create a personalized learning path. Select subjects from any semester to build your custom curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subject Selection */}
          <div className="lg:col-span-2">
            {/* Semester Selector */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Select Semester</h3>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map(semester => (
                  <button
                    key={semester}
                    onClick={() => setSelectedSemester(semester)}
                    className={`p-3 rounded-lg font-medium transition-colors ${
                      selectedSemester === semester
                        ? 'bg-violet-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Semester {semester}
                  </button>
                ))}
              </div>
            </div>

            {/* Subjects List */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Available Subjects - Semester {selectedSemester}
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredSubjects.map(subject => {
                  const isSelected = selectedSubjects.find(s => s.id === subject.id);
                  return (
                    <div
                      key={subject.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-violet-500 bg-violet-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleSubject(subject)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSubjectTypeColor(subject.type)}`}>
                              {subject.type}
                            </span>
                            <span className="text-sm font-bold text-violet-600 bg-violet-100 px-2 py-1 rounded-full">
                              {subject.credits} credits
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{subject.description}</p>
                        </div>
                        <div className="ml-4">
                          {isSelected ? (
                            <FaCheck className="w-5 h-5 text-violet-600" />
                          ) : (
                            <FaPlus className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Selection Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Selection</h3>
              
              {/* Total Credits */}
              <div className="bg-violet-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-3">
                  <FaClock className="w-6 h-6 text-violet-600" />
                  <div>
                    <p className="text-sm text-gray-600">Total Credits</p>
                    <p className="text-2xl font-bold text-violet-600">{getTotalCredits()}</p>
                  </div>
                </div>
              </div>

              {/* Selected Subjects */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Selected Subjects ({selectedSubjects.length})</h4>
                {Object.entries(getSubjectsByType()).map(([type, subjects]) => (
                  <div key={type} className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-700">{type}</h5>
                    {subjects.map(subject => (
                      <div key={subject.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm text-gray-900">{subject.name}</span>
                        <span className="text-xs font-bold text-violet-600">{subject.credits}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button className="w-full px-4 py-3 bg-violet-600 hover:bg-violet-900 text-white font-medium rounded-lg transition-colors duration-300">
                  Enroll Selected Subjects
                </button>
                <button 
                  onClick={() => setSelectedSubjects([])}
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors duration-300"
                >
                  Clear Selection
                </button>
              </div>

              {/* Credit Requirements Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-900 mb-2">Credit Requirements</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Minimum: 12 credits per semester</li>
                  <li>• Maximum: 24 credits per semester</li>
                  <li>• Core subjects: Required</li>
                  <li>• Electives: Choose freely</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
