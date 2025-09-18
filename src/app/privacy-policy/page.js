'use client';

import { useState } from 'react';
import { FaShieldAlt, FaLock, FaEye, FaDatabase, FaUserCheck, FaCookie, FaGavel, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: FaShieldAlt },
    { id: 'data-collection', title: 'Data Collection', icon: FaDatabase },
    { id: 'data-usage', title: 'Data Usage', icon: FaEye },
    { id: 'data-protection', title: 'Data Protection', icon: FaLock },
    { id: 'cookies', title: 'Cookies', icon: FaCookie },
    { id: 'user-rights', title: 'User Rights', icon: FaUserCheck },
    { id: 'legal-basis', title: 'Legal Basis', icon: FaGavel }
  ];

  const content = {
    overview: {
      title: 'Privacy Policy Overview',
      lastUpdated: 'December 1, 2024',
      content: `
        At Excellence University, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our educational platform and services.

        This policy applies to all users of our website, mobile applications, and educational services. By using our services, you agree to the collection and use of information in accordance with this policy.

        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
      `,
      keyPoints: [
        'We collect only necessary information to provide our services',
        'Your data is protected with industry-standard security measures',
        'We never sell your personal information to third parties',
        'You have control over your data and can request its deletion',
        'We comply with international data protection regulations'
      ]
    },
    'data-collection': {
      title: 'Information We Collect',
      content: `
        We collect information you provide directly to us, information we obtain automatically when you use our services, and information from third parties.

        Personal Information:
        - Name, email address, phone number
        - Date of birth and gender
        - Educational background and qualifications
        - Payment and billing information
        - Profile information and preferences

        Usage Information:
        - Course progress and completion data
        - Learning analytics and performance metrics
        - Device information and browser type
        - IP address and location data
        - Interaction with our platform features

        Third-Party Information:
        - Social media profile information (when you connect accounts)
        - Educational records from partner institutions
        - Payment verification from financial institutions
      `,
      keyPoints: [
        'We collect information you voluntarily provide',
        'Usage data helps us improve our services',
        'Third-party data is collected with your consent',
        'We minimize data collection to essential information only',
        'All data collection is transparent and lawful'
      ]
    },
    'data-usage': {
      title: 'How We Use Your Information',
      content: `
        We use the information we collect to provide, maintain, and improve our educational services, communicate with you, and ensure the security of our platform.

        Service Provision:
        - Deliver educational content and courses
        - Track learning progress and provide assessments
        - Issue certificates and credentials
        - Provide customer support and technical assistance
        - Process payments and manage subscriptions

        Communication:
        - Send important updates about your courses
        - Provide customer support and respond to inquiries
        - Send newsletters and educational content (with consent)
        - Notify you of new features and services
        - Send security alerts and account notifications

        Platform Improvement:
        - Analyze usage patterns to improve our services
        - Develop new features and educational content
        - Conduct research and analytics
        - Ensure platform security and prevent fraud
        - Personalize your learning experience
      `,
      keyPoints: [
        'Data is used to provide educational services',
        'We communicate important updates and support',
        'Analytics help us improve our platform',
        'Personalization enhances your learning experience',
        'All usage is for legitimate educational purposes'
      ]
    },
    'data-protection': {
      title: 'Data Security and Protection',
      content: `
        We implement comprehensive security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

        Technical Safeguards:
        - Encryption of data in transit and at rest
        - Secure servers with regular security updates
        - Multi-factor authentication for administrative access
        - Regular security audits and penetration testing
        - Secure backup and disaster recovery procedures

        Administrative Safeguards:
        - Limited access to personal information on a need-to-know basis
        - Regular training for staff on data protection
        - Strict confidentiality agreements for all employees
        - Regular review and update of security policies
        - Incident response procedures for data breaches

        Physical Safeguards:
        - Secure data centers with restricted access
        - Environmental controls and monitoring
        - Secure disposal of physical media
        - Regular maintenance and monitoring of equipment
      `,
      keyPoints: [
        'Industry-standard encryption protects your data',
        'Regular security audits ensure ongoing protection',
        'Limited access prevents unauthorized data exposure',
        'Incident response procedures minimize breach impact',
        'Continuous monitoring detects security threats'
      ]
    },
    cookies: {
      title: 'Cookies and Tracking Technologies',
      content: `
        We use cookies and similar tracking technologies to enhance your experience on our platform, analyze usage patterns, and provide personalized content.

        Types of Cookies:
        - Essential Cookies: Required for basic platform functionality
        - Performance Cookies: Help us understand how you use our platform
        - Functionality Cookies: Remember your preferences and settings
        - Marketing Cookies: Used to deliver relevant advertisements

        Cookie Management:
        - You can control cookies through your browser settings
        - Disabling cookies may affect platform functionality
        - We provide cookie preference settings in your account
        - Third-party cookies are used for analytics and advertising
        - We respect your cookie preferences and choices

        Third-Party Services:
        - Google Analytics for usage statistics
        - Social media platforms for sharing features
        - Payment processors for secure transactions
        - Customer support tools for assistance
        - Marketing platforms for communication
      `,
      keyPoints: [
        'Cookies enhance your platform experience',
        'You can control cookie preferences',
        'Essential cookies are required for functionality',
        'Third-party cookies are used for analytics',
        'We respect your privacy choices'
      ]
    },
    'user-rights': {
      title: 'Your Rights and Choices',
      content: `
        You have several rights regarding your personal information. We are committed to helping you exercise these rights and maintain control over your data.

        Access Rights:
        - Request access to your personal information
        - Receive a copy of your data in a portable format
        - Understand how your data is being used
        - Review your account information and preferences

        Control Rights:
        - Update or correct your personal information
        - Change your communication preferences
        - Opt out of marketing communications
        - Manage your cookie preferences

        Deletion Rights:
        - Request deletion of your personal information
        - Close your account and remove associated data
        - Withdraw consent for data processing
        - Request data portability before deletion

        Objection Rights:
        - Object to processing for marketing purposes
        - Opt out of automated decision-making
        - Request restriction of data processing
        - File complaints with supervisory authorities
      `,
      keyPoints: [
        'You have the right to access your data',
        'You can update or correct your information',
        'You can request deletion of your data',
        'You can object to certain data processing',
        'We provide easy ways to exercise your rights'
      ]
    },
    'legal-basis': {
      title: 'Legal Basis and Compliance',
      content: `
        We process your personal information in accordance with applicable data protection laws and regulations, including GDPR, CCPA, and other international privacy standards.

        Legal Bases for Processing:
        - Consent: When you provide explicit consent for data processing
        - Contract: To fulfill our educational services agreement
        - Legal Obligation: To comply with applicable laws and regulations
        - Legitimate Interest: To improve our services and ensure security

        International Compliance:
        - General Data Protection Regulation (GDPR) - European Union
        - California Consumer Privacy Act (CCPA) - California, USA
        - Personal Information Protection Law (PIPL) - China
        - Personal Data Protection Act (PDPA) - Singapore
        - Data Protection Act 2018 - United Kingdom

        Data Transfers:
        - We ensure adequate protection for international transfers
        - Standard contractual clauses for data transfers
        - Adequacy decisions from supervisory authorities
        - Binding corporate rules for multinational operations
        - Privacy Shield framework (where applicable)
      `,
      keyPoints: [
        'We comply with international privacy laws',
        'Multiple legal bases justify data processing',
        'International transfers are properly protected',
        'We maintain compliance across all jurisdictions',
        'Regular audits ensure ongoing compliance'
      ]
    }
  };

  const contactInfo = {
    title: 'Contact Information',
    details: [
      'Data Protection Officer: privacy@excellence.edu',
      'General Privacy Inquiries: info@excellence.edu',
      'Phone: +1 (555) 123-4567',
      'Address: 123 Education Street, Learning City, LC 12345'
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-yellow-400">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-300">
              <FaShieldAlt className="w-6 h-6" />
              <span>Last Updated: {content.overview.lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation and Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-300 ${
                          activeSection === section.id
                            ? 'bg-violet-100 text-violet-700 border border-violet-200'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {content[activeSection].title}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600"></div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
                    {content[activeSection].content}
                  </div>

                  {content[activeSection].keyPoints && (
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Points:</h4>
                      <ul className="space-y-3">
                        {content[activeSection].keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{contactInfo.title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Questions?</h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please don't hesitate to contact us.
                </p>
                <div className="space-y-3">
                  {contactInfo.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
                <p className="text-gray-600 mb-6">
                  You have the right to access, update, or delete your personal information. You can also opt out of certain communications.
                </p>
                <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center space-x-2">
                  <span>Manage Your Data</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates and Changes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Policy Updates</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Notification</h3>
                  <p className="text-sm text-gray-600">We'll notify you of significant changes via email or platform notification.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Review</h3>
                  <p className="text-sm text-gray-600">We encourage you to review this policy periodically for any updates.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Consent</h3>
                  <p className="text-sm text-gray-600">Continued use of our services constitutes acceptance of updated policies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
