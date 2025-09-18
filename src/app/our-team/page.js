'use client';

import { useState } from 'react';
import { FaGraduationCap, FaUsers, FaLinkedin, FaTwitter, FaEnvelope, FaAward, FaBookOpen, FaGlobe, FaStar, FaArrowRight, FaSearch, FaFilter } from 'react-icons/fa';
import Image from 'next/image';

export default function OurTeamPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'academic', name: 'Academic' },
    { id: 'technology', name: 'Technology' },
    { id: 'administration', name: 'Administration' },
    { id: 'student-services', name: 'Student Services' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const teamMembers = [
    // Academic Team
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Chief Executive Officer',
      department: 'academic',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Education visionary with 20+ years in academic leadership and digital transformation.',
      expertise: ['Educational Leadership', 'Strategic Planning', 'Digital Innovation'],
      education: 'PhD in Education Technology, Oxford University',
      experience: '20+ years',
      linkedin: '#',
      twitter: '#',
      email: 'sarah.johnson@excellence.edu',
      achievements: ['Nobel Prize Nominee 2023', 'UNESCO Education Advisor', 'Author of 15+ Research Papers']
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      position: 'Chief Academic Officer',
      department: 'academic',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Leading expert in curriculum development and international education standards.',
      expertise: ['Curriculum Design', 'International Education', 'Quality Assurance'],
      education: 'PhD in Educational Psychology, MIT',
      experience: '18+ years',
      linkedin: '#',
      twitter: '#',
      email: 'michael.chen@excellence.edu',
      achievements: ['Professor Emeritus at MIT', 'UNESCO Education Advisor', 'Nobel Prize Nominee 2023']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      position: 'Head of Computer Science',
      department: 'academic',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Technology innovator specializing in AI-driven educational solutions.',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Educational Technology'],
      education: 'PhD in Computer Science, Stanford University',
      experience: '15+ years',
      linkedin: '#',
      twitter: '#',
      email: 'emily.rodriguez@excellence.edu',
      achievements: ['Former Google AI Researcher', '50+ Patents in EdTech', 'IEEE Fellow']
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      position: 'Head of Business Studies',
      department: 'academic',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Business education expert with extensive industry experience and academic credentials.',
      expertise: ['Business Strategy', 'Entrepreneurship', 'Management'],
      education: 'PhD in Business Administration, Harvard Business School',
      experience: '12+ years',
      linkedin: '#',
      twitter: '#',
      email: 'james.wilson@excellence.edu',
      achievements: ['Former McKinsey Consultant', 'Author of 8 Business Books', 'Forbes 30 Under 30']
    },
    // Technology Team
    {
      id: 5,
      name: 'Alex Thompson',
      position: 'Chief Technology Officer',
      department: 'technology',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Full-stack developer and technology architect with passion for educational platforms.',
      expertise: ['Full-Stack Development', 'Cloud Architecture', 'DevOps'],
      education: 'MS in Computer Science, Carnegie Mellon',
      experience: '10+ years',
      linkedin: '#',
      twitter: '#',
      email: 'alex.thompson@excellence.edu',
      achievements: ['Former Amazon Engineer', 'Open Source Contributor', 'Tech Conference Speaker']
    },
    {
      id: 6,
      name: 'Maria Garcia',
      position: 'Lead UX Designer',
      department: 'technology',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'User experience designer focused on creating intuitive and engaging learning interfaces.',
      expertise: ['User Experience Design', 'User Interface Design', 'Design Systems'],
      education: 'MFA in Design, Rhode Island School of Design',
      experience: '8+ years',
      linkedin: '#',
      twitter: '#',
      email: 'maria.garcia@excellence.edu',
      achievements: ['Apple Design Award Winner', 'Design Thinking Expert', 'UX Research Publications']
    },
    // Student Services Team
    {
      id: 7,
      name: 'David Kim',
      position: 'Director of Student Services',
      department: 'student-services',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Student success advocate with expertise in academic counseling and support services.',
      expertise: ['Student Counseling', 'Academic Support', 'Career Guidance'],
      education: 'MA in Counseling Psychology, Columbia University',
      experience: '14+ years',
      linkedin: '#',
      twitter: '#',
      email: 'david.kim@excellence.edu',
      achievements: ['Licensed Counselor', 'Student Success Award', 'Mental Health Advocate']
    },
    {
      id: 8,
      name: 'Lisa Brown',
      position: 'International Student Coordinator',
      department: 'student-services',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'International education specialist helping students from around the world succeed.',
      expertise: ['International Education', 'Cultural Integration', 'Student Support'],
      education: 'MA in International Relations, Georgetown University',
      experience: '9+ years',
      linkedin: '#',
      twitter: '#',
      email: 'lisa.brown@excellence.edu',
      achievements: ['Fulbright Scholar', 'Cultural Exchange Expert', 'Multilingual (5 languages)']
    },
    // Administration Team
    {
      id: 9,
      name: 'Robert Taylor',
      position: 'Chief Financial Officer',
      department: 'administration',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Financial strategist with expertise in educational institution management and budgeting.',
      expertise: ['Financial Planning', 'Budget Management', 'Strategic Finance'],
      education: 'MBA in Finance, Wharton School',
      experience: '16+ years',
      linkedin: '#',
      twitter: '#',
      email: 'robert.taylor@excellence.edu',
      achievements: ['CPA Certified', 'Former Investment Banker', 'Financial Strategy Expert']
    },
    // Marketing Team
    {
      id: 10,
      name: 'Jennifer Lee',
      position: 'Marketing Director',
      department: 'marketing',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Digital marketing expert specializing in educational brand building and student acquisition.',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Content Marketing'],
      education: 'MA in Marketing, Northwestern University',
      experience: '11+ years',
      linkedin: '#',
      twitter: '#',
      email: 'jennifer.lee@excellence.edu',
      achievements: ['Marketing Excellence Award', 'Social Media Expert', 'Brand Building Specialist']
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Meet the passionate educators, innovators, and leaders who make Excellence University a world-class institution.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-500" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Showing {filteredMembers.length} of {teamMembers.length} team members
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      member.department === 'academic' ? 'bg-blue-100 text-blue-800' :
                      member.department === 'technology' ? 'bg-green-100 text-green-800' :
                      member.department === 'student-services' ? 'bg-purple-100 text-purple-800' :
                      member.department === 'administration' ? 'bg-orange-100 text-orange-800' :
                      'bg-pink-100 text-pink-800'
                    }`}>
                      {departments.find(d => d.id === member.department)?.name || member.department}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-violet-600 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{member.bio}</p>
                  
                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Education & Experience */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <FaGraduationCap className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{member.education}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <FaAward className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{member.experience} experience</span>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center space-x-3 mb-4">
                    <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
                      <FaEnvelope className="w-5 h-5" />
                    </a>
                  </div>
                  
                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements</h4>
                    <div className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <FaStar className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-gray-600">{achievement}</span>
                        </div>
                      ))}
                      {member.achievements.length > 2 && (
                        <div className="text-xs text-gray-500">
                          +{member.achievements.length - 2} more achievements
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.slice(1).map((dept) => {
              const memberCount = teamMembers.filter(m => m.department === dept.id).length;
              return (
                <div key={dept.id} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {memberCount} team member{memberCount !== 1 ? 's' : ''}
                  </p>
                  <button className="text-violet-600 hover:text-violet-700 font-semibold text-sm flex items-center justify-center space-x-1 mx-auto">
                    <span>View Team</span>
                    <FaArrowRight className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate educators, innovative technologists, and dedicated professionals to join our mission of transforming education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>View Open Positions</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-colors duration-300">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
