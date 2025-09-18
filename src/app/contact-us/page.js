'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowRight, FaCheckCircle, FaUser, FaGraduationCap, FaQuestionCircle } from 'react-icons/fa';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'info@excellence.edu',
      description: 'We respond within 24 hours',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: '123 Education Street',
      description: 'Learning City, LC 12345',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const departments = [
    {
      icon: FaGraduationCap,
      title: 'Academic Support',
      email: 'academic@excellence.edu',
      phone: '+1 (555) 123-4568',
      description: 'Course-related questions, academic guidance, and learning support.'
    },
    {
      icon: FaUser,
      title: 'Student Services',
      email: 'students@excellence.edu',
      phone: '+1 (555) 123-4569',
      description: 'Account management, enrollment, and student life support.'
    },
    {
      icon: FaQuestionCircle,
      title: 'Technical Support',
      email: 'support@excellence.edu',
      phone: '+1 (555) 123-4570',
      description: 'Technical issues, platform problems, and troubleshooting.'
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="text-yellow-400">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              We're here to help! Get in touch with our team for any questions, support, or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-violet-600 font-semibold mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        <option value="general">General Inquiry</option>
                        <option value="academic">Academic Support</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="admissions">Admissions</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Enter message subject"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Enter your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">123 Education Street, Learning City</p>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>
                <div className="space-y-6">
                  {departments.map((dept, index) => {
                    const IconComponent = dept.icon;
                    return (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-violet-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">{dept.title}</h4>
                            <p className="text-gray-600 text-sm mb-2">{dept.description}</p>
                            <div className="space-y-1">
                              <p className="text-sm text-violet-600">{dept.email}</p>
                              <p className="text-sm text-violet-600">{dept.phone}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Follow Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Stay connected with us on social media for updates, tips, and community discussions.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 bg-gray-800 ${social.color} rounded-full flex items-center justify-center transition-colors duration-300`}
                  aria-label={social.label}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gradient-to-r from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Answers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Check out our Help Center for instant answers to common questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                question: 'How do I reset my password?',
                answer: 'Go to the login page and click "Forgot Password" to receive reset instructions.'
              },
              {
                question: 'What are your business hours?',
                answer: 'We\'re available Monday-Friday, 9AM-6PM EST for phone and chat support.'
              },
              {
                question: 'How long does email support take?',
                answer: 'We typically respond to emails within 24 hours during business days.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto">
              <span>Visit Help Center</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
