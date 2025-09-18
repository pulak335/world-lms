'use client';

import { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaChevronDown, FaChevronUp, FaGraduationCap, FaUser, FaCreditCard, FaCog, FaBook, FaArrowRight, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const categories = [
    { id: 'all', name: 'All Categories', icon: FaQuestionCircle },
    { id: 'general', name: 'General', icon: FaBook },
    { id: 'courses', name: 'Courses & Learning', icon: FaGraduationCap },
    { id: 'account', name: 'Account & Profile', icon: FaUser },
    { id: 'billing', name: 'Billing & Payments', icon: FaCreditCard },
    { id: 'technical', name: 'Technical Support', icon: FaCog }
  ];

  const faqs = [
    // General FAQs
    {
      id: 1,
      question: 'What is Excellence University?',
      answer: 'Excellence University is a leading online educational platform that offers world-class courses, degree programs, and certifications. We provide accessible, high-quality education to students worldwide through our innovative learning platform.',
      category: 'general',
      tags: ['about', 'university', 'platform']
    },
    {
      id: 2,
      question: 'How do I get started with Excellence University?',
      answer: 'Getting started is easy! Simply create an account on our website, browse our course catalog, and enroll in courses that interest you. You can start learning immediately after enrollment.',
      category: 'general',
      tags: ['getting started', 'enrollment', 'account']
    },
    {
      id: 3,
      question: 'Is Excellence University accredited?',
      answer: 'Yes, Excellence University is accredited by internationally recognized accrediting bodies. We also partner with OTHM (Ofqual regulated awarding organization) to offer internationally recognized qualifications.',
      category: 'general',
      tags: ['accreditation', 'recognition', 'qualifications']
    },
    {
      id: 4,
      question: 'What makes Excellence University different?',
      answer: 'We offer a unique combination of world-class education, flexible learning options, internationally recognized qualifications, and comprehensive student support. Our platform is designed to provide an exceptional learning experience.',
      category: 'general',
      tags: ['unique', 'features', 'benefits']
    },

    // Courses & Learning FAQs
    {
      id: 5,
      question: 'What types of courses do you offer?',
      answer: 'We offer a wide range of courses including computer science, business administration, engineering, data science, arts, and more. We also provide OTHM Level 3, 4, 5, and Top-up degree programs.',
      category: 'courses',
      tags: ['course types', 'programs', 'subjects']
    },
    {
      id: 6,
      question: 'How long do I have access to my courses?',
      answer: 'You have lifetime access to all courses you purchase. This includes all future updates and additional materials added to the course. You can learn at your own pace without time restrictions.',
      category: 'courses',
      tags: ['access', 'lifetime', 'updates']
    },
    {
      id: 7,
      question: 'Can I get a certificate for completing courses?',
      answer: 'Yes! Upon successful completion of a course, you\'ll receive a digital certificate that you can download, print, and share on professional networks like LinkedIn. Our certificates are internationally recognized.',
      category: 'courses',
      tags: ['certificates', 'completion', 'recognition']
    },
    {
      id: 8,
      question: 'Are there any prerequisites for courses?',
      answer: 'Course prerequisites vary by subject. Most beginner courses have no prerequisites, while advanced courses may require prior knowledge. Check the course description for specific requirements.',
      category: 'courses',
      tags: ['prerequisites', 'requirements', 'beginner']
    },
    {
      id: 9,
      question: 'Can I pause and resume my learning?',
      answer: 'Absolutely! You can pause your learning at any time and resume from where you left off. Your progress is automatically saved, so you never lose your place.',
      category: 'courses',
      tags: ['pause', 'resume', 'progress']
    },
    {
      id: 10,
      question: 'Do you offer live classes or are they all self-paced?',
      answer: 'We offer both self-paced courses and live interactive sessions. Most courses are self-paced for maximum flexibility, but we also provide live webinars, Q&A sessions, and interactive workshops.',
      category: 'courses',
      tags: ['live classes', 'self-paced', 'interactive']
    },

    // Account & Profile FAQs
    {
      id: 11,
      question: 'How do I create an account?',
      answer: 'Creating an account is simple. Click the "Sign Up" button on our website, fill in your personal information, verify your email address, and you\'re ready to start learning!',
      category: 'account',
      tags: ['account creation', 'signup', 'registration']
    },
    {
      id: 12,
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password". Enter your email address and follow the instructions sent to your email. You\'ll receive a secure link to create a new password.',
      category: 'account',
      tags: ['password reset', 'forgot password', 'security']
    },
    {
      id: 13,
      question: 'Can I update my profile information?',
      answer: 'Yes, you can update your profile information at any time. Go to your account settings, make the necessary changes, and save your updates. Keep your information current for the best experience.',
      category: 'account',
      tags: ['profile update', 'account settings', 'information']
    },
    {
      id: 14,
      question: 'How do I delete my account?',
      answer: 'To delete your account, contact our support team at support@excellence.edu. We\'ll guide you through the process and ensure all your data is properly removed from our systems.',
      category: 'account',
      tags: ['account deletion', 'data removal', 'support']
    },

    // Billing & Payments FAQs
    {
      id: 15,
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cryptocurrency (Bitcoin, Ethereum). All payments are processed securely.',
      category: 'billing',
      tags: ['payment methods', 'credit cards', 'paypal']
    },
    {
      id: 16,
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee for all courses. If you\'re not satisfied with your purchase, contact our support team within 30 days for a full refund.',
      category: 'billing',
      tags: ['refund policy', 'money-back guarantee', 'satisfaction']
    },
    {
      id: 17,
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans for eligible courses. You can split your payment into monthly installments. Contact our support team to learn more about available payment options.',
      category: 'billing',
      tags: ['payment plans', 'installments', 'flexible payment']
    },
    {
      id: 18,
      question: 'Are there any hidden fees?',
      answer: 'No, we believe in transparent pricing. The price you see is the price you pay. There are no hidden fees, subscription charges, or additional costs unless clearly stated.',
      category: 'billing',
      tags: ['transparent pricing', 'no hidden fees', 'clear costs']
    },
    {
      id: 19,
      question: 'Do you offer financial aid or scholarships?',
      answer: 'Yes, we offer various financial aid options including scholarships, grants, and payment assistance programs. We also provide military and veteran discounts. Contact our admissions team for more information.',
      category: 'billing',
      tags: ['financial aid', 'scholarships', 'discounts']
    },

    // Technical Support FAQs
    {
      id: 20,
      question: 'What are the technical requirements?',
      answer: 'You need a modern web browser (Chrome, Firefox, Safari, Edge), stable internet connection (minimum 5 Mbps), and JavaScript enabled. Our platform works on desktop, tablet, and mobile devices.',
      category: 'technical',
      tags: ['technical requirements', 'browser', 'internet']
    },
    {
      id: 21,
      question: 'Can I access courses on mobile devices?',
      answer: 'Yes! Our platform is fully responsive and works on all mobile devices including smartphones and tablets. You can download our mobile app from the App Store or Google Play for the best experience.',
      category: 'technical',
      tags: ['mobile access', 'responsive', 'mobile app']
    },
    {
      id: 22,
      question: 'What if I experience technical issues?',
      answer: 'If you experience technical issues, contact our technical support team through the help center, email support@excellence.edu, or use the live chat feature available on our website during business hours.',
      category: 'technical',
      tags: ['technical issues', 'support', 'troubleshooting']
    },
    {
      id: 23,
      question: 'How do I download course materials?',
      answer: 'Course materials can be downloaded from the course dashboard. Look for the download icon next to each resource. Some materials may be available for offline viewing.',
      category: 'technical',
      tags: ['download', 'course materials', 'offline']
    },
    {
      id: 24,
      question: 'Is my data secure on your platform?',
      answer: 'Yes, we take data security seriously. We use industry-standard encryption, secure servers, and follow strict privacy policies. Your personal information is protected and never shared with third parties.',
      category: 'technical',
      tags: ['data security', 'encryption', 'privacy']
    }
  ];

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email Support',
      contact: 'support@excellence.edu',
      description: 'Get help via email within 24 hours',
      availability: '24/7'
    },
    {
      icon: FaPhone,
      title: 'Phone Support',
      contact: '+1 (555) 123-4567',
      description: 'Speak with our support team',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const getCategoryStats = () => {
    const stats = {};
    categories.forEach(cat => {
      if (cat.id === 'all') {
        stats[cat.id] = faqs.length;
      } else {
        stats[cat.id] = faqs.filter(faq => faq.category === cat.id).length;
      }
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Find quick answers to common questions about our platform, courses, and services.
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
                  placeholder="Search FAQs..."
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
                  <option key={category.id} value={category.id}>
                    {category.name} ({categoryStats[category.id]})
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Showing {filteredFAQs.length} of {faqs.length} questions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.id} 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{category.name}</h3>
                  <p className="text-gray-600 text-center mb-4">
                    {categoryStats[category.id]} questions
                  </p>
                  <button className="w-full text-violet-600 hover:text-violet-700 font-semibold flex items-center justify-center space-x-2">
                    <span>Browse Questions</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${
                      faq.category === 'general' ? 'bg-blue-500' :
                      faq.category === 'courses' ? 'bg-green-500' :
                      faq.category === 'account' ? 'bg-purple-500' :
                      faq.category === 'billing' ? 'bg-orange-500' :
                      'bg-gray-500'
                    }`}>
                      {categories.find(c => c.id === faq.category)?.name}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">{faq.question}</h3>
                  </div>
                  {expandedFAQ === faq.id ? (
                    <FaChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed mb-4">{faq.answer}</p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <FaQuestionCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse by category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
