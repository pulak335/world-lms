'use client';

import { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaClock, FaUsers, FaGraduationCap, FaHeart, FaArrowRight, FaFilter, FaBriefcase, FaStar, FaCheckCircle, FaGlobe, FaHandshake } from 'react-icons/fa';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'remote', name: 'Remote' },
    { id: 'london', name: 'London, UK' },
    { id: 'new-york', name: 'New York, USA' },
    { id: 'singapore', name: 'Singapore' },
    { id: 'dubai', name: 'Dubai, UAE' }
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'academic', name: 'Academic' },
    { id: 'technology', name: 'Technology' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' },
    { id: 'operations', name: 'Operations' },
    { id: 'hr', name: 'Human Resources' }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'full-time', name: 'Full Time' },
    { id: 'part-time', name: 'Part Time' },
    { id: 'contract', name: 'Contract' },
    { id: 'internship', name: 'Internship' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'technology',
      location: 'remote',
      type: 'full-time',
      experience: '5+ years',
      salary: '$80,000 - $120,000',
      posted: '2 days ago',
      description: 'We are looking for a Senior Software Engineer to join our technology team and help build the next generation of educational platforms.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of experience in full-stack development',
        'Proficiency in React, Node.js, and Python',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Health Insurance', 'Remote Work', 'Learning Budget', 'Stock Options'],
      urgent: false
    },
    {
      id: 2,
      title: 'Computer Science Professor',
      department: 'academic',
      location: 'london',
      type: 'full-time',
      experience: 'PhD required',
      salary: '£60,000 - £80,000',
      posted: '1 week ago',
      description: 'Join our academic team as a Computer Science Professor and help shape the future of technology education.',
      requirements: [
        'PhD in Computer Science or related field',
        'Teaching experience at university level',
        'Research publications in top-tier conferences',
        'Experience with online education platforms',
        'Passion for student success and innovation'
      ],
      benefits: ['Research Funding', 'Conference Travel', 'Health Insurance', 'Pension Plan'],
      urgent: true
    },
    {
      id: 3,
      title: 'Digital Marketing Manager',
      department: 'marketing',
      location: 'new-york',
      type: 'full-time',
      experience: '3+ years',
      salary: '$70,000 - $90,000',
      posted: '3 days ago',
      description: 'Lead our digital marketing efforts and help us reach students worldwide with innovative campaigns.',
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        '3+ years of digital marketing experience',
        'Proficiency in Google Ads, Facebook Ads, and SEO',
        'Experience with marketing automation tools',
        'Analytical mindset and data-driven approach'
      ],
      benefits: ['Health Insurance', 'Flexible Hours', 'Marketing Budget', 'Career Development'],
      urgent: false
    },
    {
      id: 4,
      title: 'Student Success Coordinator',
      department: 'operations',
      location: 'remote',
      type: 'full-time',
      experience: '2+ years',
      salary: '$45,000 - $60,000',
      posted: '5 days ago',
      description: 'Help students achieve their academic goals by providing personalized support and guidance.',
      requirements: [
        'Bachelor\'s degree in Education or related field',
        '2+ years of student support experience',
        'Excellent communication and interpersonal skills',
        'Experience with CRM systems',
        'Passion for student success and education'
      ],
      benefits: ['Health Insurance', 'Remote Work', 'Student Success Bonus', 'Professional Development'],
      urgent: false
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      department: 'technology',
      location: 'singapore',
      type: 'full-time',
      experience: '3+ years',
      salary: '$50,000 - $70,000',
      posted: '1 week ago',
      description: 'Design intuitive and engaging user experiences for our educational platform.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, and Adobe Creative Suite',
        'Experience with user research and testing',
        'Portfolio demonstrating design skills'
      ],
      benefits: ['Health Insurance', 'Design Tools Budget', 'Flexible Hours', 'Creative Freedom'],
      urgent: false
    },
    {
      id: 6,
      title: 'Business Development Intern',
      department: 'sales',
      location: 'dubai',
      type: 'internship',
      experience: 'Student',
      salary: 'Stipend',
      posted: '2 weeks ago',
      description: 'Gain valuable experience in business development and sales in the education sector.',
      requirements: [
        'Currently enrolled in Business or related program',
        'Strong communication and presentation skills',
        'Interest in education technology',
        'Proficiency in Microsoft Office',
        'Self-motivated and eager to learn'
      ],
      benefits: ['Mentorship Program', 'Learning Opportunities', 'Networking Events', 'Potential Full-time Offer'],
      urgent: false
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    
    return matchesSearch && matchesLocation && matchesDepartment && matchesType;
  });

  const benefits = [
    {
      icon: FaHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: FaGlobe,
      title: 'Remote Work',
      description: 'Flexible remote work options and home office setup support.'
    },
    {
      icon: FaGraduationCap,
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and skill development programs.'
    },
    {
      icon: FaHandshake,
      title: 'Work-Life Balance',
      description: 'Flexible hours, unlimited PTO, and family-friendly policies.'
    }
  ];

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and innovative solutions to educational challenges.'
    },
    {
      title: 'Student-Centric',
      description: 'Everything we do is focused on improving student outcomes and experiences.'
    },
    {
      title: 'Collaborative Environment',
      description: 'We believe in teamwork, open communication, and mutual support.'
    },
    {
      title: 'Growth Mindset',
      description: 'We embrace challenges, learn from failures, and continuously improve.'
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
              Join Our <span className="text-yellow-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Build the future of education with passionate professionals who are transforming how the world learns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>View Open Positions</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-colors duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>
              
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                {jobTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600">
                Showing {filteredJobs.length} of {jobOpenings.length} open positions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      {job.urgent && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{locations.find(l => l.id === job.location)?.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaBriefcase className="w-4 h-4" />
                        <span>{departments.find(d => d.id === job.department)?.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaClock className="w-4 h-4" />
                        <span>{jobTypes.find(t => t.id === job.type)?.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaUsers className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-violet-600">{job.salary}</div>
                      <div className="text-sm text-gray-500">Posted {job.posted}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center space-x-2">
                      <span>Apply Now</span>
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <FaBriefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later for new openings.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-r from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply', description: 'Submit your application with resume and cover letter' },
              { step: '2', title: 'Review', description: 'Our team reviews your application and qualifications' },
              { step: '3', title: 'Interview', description: 'Video or in-person interview with the hiring team' },
              { step: '4', title: 'Decision', description: 'Receive feedback and decision within 1-2 weeks' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join our mission to transform education and help students worldwide achieve their dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>Browse All Jobs</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-colors duration-300">
              Join Our Talent Network
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
