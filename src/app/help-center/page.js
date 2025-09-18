'use client';

import { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaBook, FaVideo, FaPhone, FaEnvelope, FaArrowRight, FaChevronDown, FaChevronUp, FaClock, FaUser, FaGraduationCap, FaCreditCard, FaCog } from 'react-icons/fa';

export default function HelpCenterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const categories = [
    { id: 'all', name: 'All Topics', icon: FaQuestionCircle },
    { id: 'getting-started', name: 'Getting Started', icon: FaBook },
    { id: 'courses', name: 'Courses & Learning', icon: FaGraduationCap },
    { id: 'account', name: 'Account & Profile', icon: FaUser },
    { id: 'billing', name: 'Billing & Payments', icon: FaCreditCard },
    { id: 'technical', name: 'Technical Support', icon: FaCog }
  ];

  const helpArticles = [
    {
      id: 1,
      title: 'How to Create Your Account',
      category: 'getting-started',
      content: 'Learn how to create your Excellence University account and get started with your learning journey.',
      steps: [
        'Visit the Excellence University website',
        'Click on "Sign Up" or "Create Account"',
        'Fill in your personal information',
        'Verify your email address',
        'Complete your profile setup'
      ],
      tags: ['account', 'signup', 'registration']
    },
    {
      id: 2,
      title: 'How to Enroll in a Course',
      category: 'courses',
      content: 'Step-by-step guide to enrolling in courses and accessing your learning materials.',
      steps: [
        'Browse available courses',
        'Select your desired course',
        'Click "Enroll Now"',
        'Complete payment if required',
        'Access your course dashboard'
      ],
      tags: ['enrollment', 'courses', 'learning']
    },
    {
      id: 3,
      title: 'Understanding Course Certificates',
      category: 'courses',
      content: 'Learn about course completion certificates and how to download them.',
      steps: [
        'Complete all course requirements',
        'Achieve passing grade on assessments',
        'Download certificate from course page',
        'Share your achievement on LinkedIn'
      ],
      tags: ['certificates', 'completion', 'achievement']
    },
    {
      id: 4,
      title: 'Managing Your Profile',
      category: 'account',
      content: 'How to update your personal information, profile picture, and account settings.',
      steps: [
        'Go to your account settings',
        'Update personal information',
        'Upload profile picture',
        'Save changes'
      ],
      tags: ['profile', 'settings', 'account']
    },
    {
      id: 5,
      title: 'Payment Methods and Billing',
      category: 'billing',
      content: 'Information about accepted payment methods and billing procedures.',
      steps: [
        'Credit/Debit Cards (Visa, MasterCard, American Express)',
        'PayPal',
        'Bank Transfer',
        'Cryptocurrency (Bitcoin, Ethereum)'
      ],
      tags: ['payment', 'billing', 'methods']
    },
    {
      id: 6,
      title: 'Technical Requirements',
      category: 'technical',
      content: 'System requirements and technical specifications for optimal learning experience.',
      steps: [
        'Modern web browser (Chrome, Firefox, Safari, Edge)',
        'Stable internet connection (minimum 5 Mbps)',
        'Updated operating system',
        'JavaScript enabled'
      ],
      tags: ['technical', 'requirements', 'browser']
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password". Enter your email address and follow the instructions sent to your email. You\'ll receive a secure link to create a new password.',
      category: 'account'
    },
    {
      id: 2,
      question: 'Can I access courses on mobile devices?',
      answer: 'Yes! Our platform is fully responsive and works on all mobile devices including smartphones and tablets. You can download our mobile app from the App Store or Google Play for the best experience.',
      category: 'technical'
    },
    {
      id: 3,
      question: 'What is the refund policy?',
      answer: 'We offer a 30-day money-back guarantee for all courses. If you\'re not satisfied with your purchase, contact our support team within 30 days for a full refund.',
      category: 'billing'
    },
    {
      id: 4,
      question: 'How long do I have access to my courses?',
      answer: 'You have lifetime access to all courses you purchase. This includes all future updates and additional materials added to the course.',
      category: 'courses'
    },
    {
      id: 5,
      question: 'Can I get a certificate for completing courses?',
      answer: 'Yes! Upon successful completion of a course, you\'ll receive a digital certificate that you can download, print, and share on professional networks like LinkedIn.',
      category: 'courses'
    },
    {
      id: 6,
      question: 'How do I contact technical support?',
      answer: 'You can contact our technical support team through the help center, email support@excellence.edu, or use the live chat feature available on our website during business hours.',
      category: 'technical'
    },
    {
      id: 7,
      question: 'Are there any prerequisites for courses?',
      answer: 'Course prerequisites vary by subject. Most beginner courses have no prerequisites, while advanced courses may require prior knowledge. Check the course description for specific requirements.',
      category: 'courses'
    },
    {
      id: 8,
      question: 'Can I pause and resume my learning?',
      answer: 'Absolutely! You can pause your learning at any time and resume from where you left off. Your progress is automatically saved.',
      category: 'courses'
    }
  ];

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@excellence.edu',
      availability: '24/7'
    },
    {
      icon: FaPhone,
      title: 'Phone Support',
      description: 'Speak with our support team',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: FaClock,
      title: 'Live Chat',
      description: 'Chat with support in real-time',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Help <span className="text-yellow-400">Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Find answers to your questions and get the support you need to succeed in your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-2xl">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Showing {filteredArticles.length + filteredFAQs.length} results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Help</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category) => {
              const IconComponent = category.icon;
              const articleCount = helpArticles.filter(a => a.category === category.id).length;
              const faqCount = faqs.filter(f => f.category === category.id).length;
              
              return (
                <div key={category.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{category.name}</h3>
                  <p className="text-gray-600 text-center mb-4">
                    {articleCount} articles • {faqCount} FAQs
                  </p>
                  <button 
                    onClick={() => setSelectedCategory(category.id)}
                    className="w-full text-violet-600 hover:text-violet-700 font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>Browse {category.name}</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Help Articles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${
                    article.category === 'getting-started' ? 'bg-blue-500' :
                    article.category === 'courses' ? 'bg-green-500' :
                    article.category === 'account' ? 'bg-purple-500' :
                    article.category === 'billing' ? 'bg-orange-500' :
                    'bg-gray-500'
                  }`}>
                    {categories.find(c => c.id === article.category)?.name}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.content}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-900">Steps:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                    {article.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full text-violet-600 hover:text-violet-700 font-semibold flex items-center justify-center space-x-2 py-2 border border-violet-200 rounded-lg hover:bg-violet-50 transition-colors">
                  <span>Read Full Article</span>
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <FaBook className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse by category.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${
                      faq.category === 'getting-started' ? 'bg-blue-500' :
                      faq.category === 'courses' ? 'bg-green-500' :
                      faq.category === 'account' ? 'bg-purple-500' :
                      faq.category === 'billing' ? 'bg-orange-500' :
                      'bg-gray-500'
                    }`}>
                      {categories.find(c => c.id === faq.category)?.name}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  {expandedFAQ === faq.id ? (
                    <FaChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <FaQuestionCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse by category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-r from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="text-violet-600 font-semibold mb-2">{method.contact}</div>
                  <div className="text-sm text-gray-500">{method.availability}</div>
                </div>
              );
            })}
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
              <span>Browse Courses</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-colors duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
