'use client';

import { useState } from 'react';
import { FaNewspaper, FaCalendarAlt, FaExternalLinkAlt, FaDownload, FaSearch, FaFilter, FaArrowRight, FaQuoteLeft, FaAward, FaGlobe, FaUsers, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';

export default function PressPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'news', name: 'News' },
    { id: 'awards', name: 'Awards' },
    { id: 'partnerships', name: 'Partnerships' },
    { id: 'research', name: 'Research' },
    { id: 'interviews', name: 'Interviews' }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' },
    { id: '2021', name: '2021' }
  ];

  const pressReleases = [
    {
      id: 1,
      title: 'Excellence University Partners with OTHM to Launch International Degree Programs',
      category: 'partnerships',
      date: '2024-01-15',
      summary: 'Excellence University announces strategic partnership with OTHM to offer internationally recognized qualifications across multiple disciplines.',
      content: 'Excellence University has entered into a landmark partnership with OTHM (Ofqual regulated awarding organization) to deliver world-class education programs. This collaboration will provide students with access to internationally recognized qualifications that are valued by employers worldwide...',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Partnership', 'OTHM', 'International Education', 'Qualifications'],
      featured: true
    },
    {
      id: 2,
      title: 'Excellence University Wins "Best Online Education Platform" Award 2024',
      category: 'awards',
      date: '2024-02-20',
      summary: 'Recognition for innovative approach to online learning and student success initiatives.',
      content: 'Excellence University has been honored with the "Best Online Education Platform" award at the Global Education Excellence Awards 2024. This recognition highlights our commitment to providing innovative, accessible, and high-quality education to students worldwide...',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Award', 'Online Education', 'Innovation', 'Recognition'],
      featured: true
    },
    {
      id: 3,
      title: 'New AI-Powered Learning Assistant Launched to Enhance Student Experience',
      category: 'news',
      date: '2024-03-10',
      summary: 'Revolutionary AI technology provides personalized learning support and real-time feedback.',
      content: 'Excellence University has launched an innovative AI-powered learning assistant that provides personalized support to students throughout their educational journey. The new system uses advanced machine learning algorithms to analyze student performance and provide tailored recommendations...',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['AI', 'Technology', 'Innovation', 'Student Experience'],
      featured: false
    },
    {
      id: 4,
      title: 'CEO Dr. Sarah Johnson Featured in Forbes "Women in Education" Series',
      category: 'interviews',
      date: '2024-03-25',
      summary: 'Leadership insights on transforming education through technology and innovation.',
      content: 'Dr. Sarah Johnson, CEO of Excellence University, was recently featured in Forbes magazine\'s "Women in Education" series. In the interview, she discusses her vision for the future of education, the role of technology in learning, and her journey as a female leader in the education technology sector...',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Leadership', 'Women in Tech', 'Forbes', 'Interview'],
      featured: false
    },
    {
      id: 5,
      title: 'Research Study Shows 95% Student Satisfaction Rate',
      category: 'research',
      date: '2024-04-05',
      summary: 'Independent study confirms high levels of student satisfaction and learning outcomes.',
      content: 'A comprehensive research study conducted by independent education researchers has revealed that Excellence University achieves a 95% student satisfaction rate, significantly above industry averages. The study examined various aspects of the student experience, including course quality, instructor support, and learning outcomes...',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Research', 'Student Satisfaction', 'Quality', 'Study'],
      featured: false
    },
    {
      id: 6,
      title: 'Excellence University Expands to 50+ Countries',
      category: 'news',
      date: '2024-04-18',
      summary: 'Global expansion brings world-class education to students in new markets.',
      content: 'Excellence University has announced its expansion to serve students in over 50 countries worldwide. This milestone represents a significant step forward in our mission to democratize quality education and make it accessible to learners regardless of their location...',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Expansion', 'Global Reach', 'Accessibility', 'Growth'],
      featured: false
    }
  ];

  const mediaKit = {
    logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    brandGuidelines: 'Brand Guidelines PDF',
    highResImages: 'High Resolution Images',
    companyFactSheet: 'Company Fact Sheet',
    executiveBios: 'Executive Biographies'
  };

  const testimonials = [
    {
      quote: "Excellence University is revolutionizing how we think about online education. Their innovative approach and commitment to student success sets them apart in the industry.",
      author: "Dr. Michael Thompson",
      title: "Education Technology Expert",
      publication: "EdTech Review"
    },
    {
      quote: "The partnership between Excellence University and OTHM represents a significant step forward in making quality education accessible to students worldwide.",
      author: "Sarah Williams",
      title: "Education Reporter",
      publication: "Global Education News"
    },
    {
      quote: "Their AI-powered learning platform is truly groundbreaking. It's amazing to see how technology can enhance the learning experience while maintaining the human touch.",
      author: "Prof. David Chen",
      title: "AI Research Director",
      publication: "Tech Innovation Weekly"
    }
  ];

  const filteredPress = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || release.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || release.date.startsWith(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const featuredPress = pressReleases.filter(release => release.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Press <span className="text-yellow-400">Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Stay updated with the latest news, awards, and developments from Excellence University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Download Media Kit</span>
                <FaDownload className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-colors duration-300">
                Contact Press Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Press */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured News</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPress.map((release) => (
              <div key={release.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={release.image}
                    alt={release.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${
                      release.category === 'partnerships' ? 'bg-blue-500' :
                      release.category === 'awards' ? 'bg-green-500' :
                      release.category === 'news' ? 'bg-purple-500' :
                      'bg-gray-500'
                    }`}>
                      {categories.find(c => c.id === release.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{release.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{release.summary}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {release.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-violet-600 hover:text-violet-700 font-semibold flex items-center space-x-2">
                    <span>Read More</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search press releases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year.id} value={year.id}>{year.name}</option>
                ))}
              </select>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600">
                Showing {filteredPress.length} of {pressReleases.length} press releases
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Press Releases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Press Releases</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {filteredPress.map((release) => (
              <div key={release.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${
                        release.category === 'partnerships' ? 'bg-blue-500' :
                        release.category === 'awards' ? 'bg-green-500' :
                        release.category === 'news' ? 'bg-purple-500' :
                        release.category === 'research' ? 'bg-orange-500' :
                        'bg-gray-500'
                      }`}>
                        {categories.find(c => c.id === release.category)?.name}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{release.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{release.summary}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {release.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center space-x-2">
                      <span>Read Full Story</span>
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPress.length === 0 && (
            <div className="text-center py-12">
              <FaNewspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No press releases found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later for new releases.</p>
            </div>
          )}
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Media Kit</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(mediaKit).map(([key, value]) => (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaDownload className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value}</h3>
                <button className="text-violet-600 hover:text-violet-700 font-semibold text-sm flex items-center justify-center space-x-1 mx-auto">
                  <span>Download</span>
                  <FaDownload className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What the Media Says</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="w-8 h-8 text-violet-600" />
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-violet-600 text-sm">{testimonial.title}</p>
                  <p className="text-gray-500 text-sm">{testimonial.publication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Press Team */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Press Contact</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            For media inquiries, press releases, or interview requests, please contact our press team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>Contact Press Team</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-colors duration-300">
              Media Inquiries
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
