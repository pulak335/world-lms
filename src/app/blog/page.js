'use client';

import { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaArrowRight, FaFilter, FaBookOpen, FaHeart, FaShare, FaComment, FaEye } from 'react-icons/fa';
import Image from 'next/image';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAuthor, setSelectedAuthor] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'education', name: 'Education' },
    { id: 'technology', name: 'Technology' },
    { id: 'career', name: 'Career Development' },
    { id: 'student-life', name: 'Student Life' },
    { id: 'industry-news', name: 'Industry News' }
  ];

  const authors = [
    { id: 'all', name: 'All Authors' },
    { id: 'sarah-johnson', name: 'Dr. Sarah Johnson' },
    { id: 'michael-chen', name: 'Prof. Michael Chen' },
    { id: 'emily-rodriguez', name: 'Dr. Emily Rodriguez' },
    { id: 'alex-thompson', name: 'Alex Thompson' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Online Education: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends shaping online education and discover what the future holds for digital learning platforms.',
      content: 'The landscape of online education continues to evolve rapidly, driven by technological advancements and changing student needs. In this comprehensive analysis, we explore the key trends that will shape the future of digital learning...',
      category: 'education',
      author: 'sarah-johnson',
      authorName: 'Dr. Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Online Education', 'Future Trends', 'Digital Learning', 'Technology'],
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: 'How AI is Revolutionizing Personalized Learning',
      excerpt: 'Discover how artificial intelligence is transforming the way students learn and educators teach.',
      content: 'Artificial Intelligence is no longer a futuristic concept in education. Today, AI-powered tools are providing personalized learning experiences that adapt to each student\'s unique needs and learning style...',
      category: 'technology',
      author: 'emily-rodriguez',
      authorName: 'Dr. Emily Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      publishDate: '2024-01-20',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['AI', 'Personalized Learning', 'Machine Learning', 'Education Technology'],
      views: 980,
      likes: 67,
      comments: 18,
      featured: true
    },
    {
      id: 3,
      title: 'Building a Successful Career in Tech: A Student\'s Guide',
      excerpt: 'Practical advice for students looking to launch their careers in the technology industry.',
      content: 'The technology industry offers incredible opportunities for students, but breaking into the field requires strategic planning and skill development. Here\'s your comprehensive guide to building a successful tech career...',
      category: 'career',
      author: 'alex-thompson',
      authorName: 'Alex Thompson',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      publishDate: '2024-01-25',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Career Development', 'Technology', 'Job Search', 'Skills'],
      views: 756,
      likes: 45,
      comments: 12,
      featured: false
    },
    {
      id: 4,
      title: 'The Importance of Soft Skills in Today\'s Job Market',
      excerpt: 'Why soft skills are becoming increasingly important for career success in the modern workplace.',
      content: 'While technical skills are essential, soft skills are what set successful professionals apart. In today\'s collaborative work environment, employers value communication, leadership, and emotional intelligence...',
      category: 'career',
      author: 'michael-chen',
      authorName: 'Prof. Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      publishDate: '2024-02-01',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Soft Skills', 'Career Success', 'Professional Development', 'Workplace'],
      views: 634,
      likes: 38,
      comments: 9,
      featured: false
    },
    {
      id: 5,
      title: 'Student Success Stories: From Online Learning to Dream Jobs',
      excerpt: 'Inspiring stories of students who transformed their lives through online education.',
      content: 'Meet the students who turned their dreams into reality through dedication, hard work, and the power of online education. These success stories showcase the transformative impact of quality education...',
      category: 'student-life',
      author: 'sarah-johnson',
      authorName: 'Dr. Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      publishDate: '2024-02-05',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Student Stories', 'Success Stories', 'Online Learning', 'Inspiration'],
      views: 892,
      likes: 72,
      comments: 15,
      featured: false
    },
    {
      id: 6,
      title: 'Industry Report: The Growing Demand for Digital Skills',
      excerpt: 'New research reveals the increasing importance of digital skills across all industries.',
      content: 'Our latest industry report analyzes the growing demand for digital skills and how this trend is reshaping the job market. The findings reveal significant opportunities for students and professionals...',
      category: 'industry-news',
      author: 'emily-rodriguez',
      authorName: 'Dr. Emily Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      publishDate: '2024-02-10',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Industry Report', 'Digital Skills', 'Job Market', 'Research'],
      views: 567,
      likes: 41,
      comments: 7,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesAuthor = selectedAuthor === 'all' || post.author === selectedAuthor;
    
    return matchesSearch && matchesCategory && matchesAuthor;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Insights, tips, and stories from the world of education, technology, and career development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Subscribe to Newsletter</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-colors duration-300">
                Browse Categories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
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
                      post.category === 'education' ? 'bg-blue-500' :
                      post.category === 'technology' ? 'bg-green-500' :
                      post.category === 'career' ? 'bg-purple-500' :
                      post.category === 'student-life' ? 'bg-pink-500' :
                      'bg-gray-500'
                    }`}>
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaBookOpen className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={post.authorImage}
                        alt={post.authorName}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">{post.authorName}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <FaEye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaHeart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaComment className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
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
                  placeholder="Search articles..."
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
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                {authors.map(author => (
                  <option key={author.id} value={author.id}>{author.name}</option>
                ))}
              </select>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600">
                Showing {filteredPosts.length} of {blogPosts.length} articles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Articles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${
                      post.category === 'education' ? 'bg-blue-500' :
                      post.category === 'technology' ? 'bg-green-500' :
                      post.category === 'career' ? 'bg-purple-500' :
                      post.category === 'student-life' ? 'bg-pink-500' :
                      'bg-gray-500'
                    }`}>
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaBookOpen className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={post.authorImage}
                        alt={post.authorName}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs text-gray-600">{post.authorName}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <FaEye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaHeart className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full text-violet-600 hover:text-violet-700 font-semibold text-sm flex items-center justify-center space-x-2 py-2 border border-violet-200 rounded-lg hover:bg-violet-50 transition-colors">
                    <span>Read Article</span>
                    <FaArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <FaBookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later for new content.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-violet-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights, tips, and stories from the world of education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of students who are already transforming their lives through our world-class education programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>Explore Programs</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
