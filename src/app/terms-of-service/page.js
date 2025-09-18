'use client';

import { useState } from 'react';
import { FaFileContract, FaUserCheck, FaGraduationCap, FaCreditCard, FaShieldAlt, FaGavel, FaExclamationTriangle, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: FaFileContract },
    { id: 'acceptance', title: 'Acceptance of Terms', icon: FaUserCheck },
    { id: 'services', title: 'Educational Services', icon: FaGraduationCap },
    { id: 'payments', title: 'Payments & Refunds', icon: FaCreditCard },
    { id: 'user-conduct', title: 'User Conduct', icon: FaShieldAlt },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: FaGavel },
    { id: 'limitations', title: 'Limitations', icon: FaExclamationTriangle }
  ];

  const content = {
    overview: {
      title: 'Terms of Service Overview',
      lastUpdated: 'December 1, 2024',
      content: `
        Welcome to Excellence University! These Terms of Service ("Terms") govern your use of our educational platform, website, mobile applications, and related services (collectively, the "Services").

        By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Services.

        These Terms constitute a legally binding agreement between you and Excellence University. We may update these Terms from time to time, and your continued use of our Services constitutes acceptance of any changes.

        Please read these Terms carefully before using our Services. If you have any questions, please contact us at legal@excellence.edu.
      `,
      keyPoints: [
        'These terms govern your use of our educational platform',
        'By using our services, you agree to these terms',
        'We may update these terms from time to time',
        'Continued use constitutes acceptance of changes',
        'Contact us if you have any questions'
      ]
    },
    acceptance: {
      title: 'Acceptance of Terms',
      content: `
        By accessing, browsing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations.

        Eligibility Requirements:
        - You must be at least 13 years old to use our Services
        - Users under 18 must have parental consent
        - You must provide accurate and complete information
        - You must have the legal capacity to enter into this agreement
        - You must not be prohibited from using our Services under applicable law

        Account Registration:
        - You must create an account to access certain features
        - You are responsible for maintaining account security
        - You must provide accurate and up-to-date information
        - You are responsible for all activities under your account
        - You must notify us immediately of any unauthorized access

        Modifications to Terms:
        - We may modify these Terms at any time
        - Material changes will be communicated via email or platform notification
        - Your continued use constitutes acceptance of modified Terms
        - If you disagree with changes, you may terminate your account
        - Previous versions of Terms are available upon request
      `,
      keyPoints: [
        'You must be at least 13 years old to use our services',
        'Users under 18 need parental consent',
        'You must provide accurate information',
        'You are responsible for account security',
        'We may modify terms with proper notice'
      ]
    },
    services: {
      title: 'Educational Services',
      content: `
        Excellence University provides comprehensive educational services including online courses, degree programs, certifications, and learning resources.

        Course Access:
        - Courses are available 24/7 through our online platform
        - Access duration varies by course type and enrollment
        - Some courses may have prerequisites or requirements
        - Course content may be updated periodically
        - Technical requirements must be met for optimal experience

        Learning Materials:
        - Digital textbooks, videos, and interactive content
        - Assessments, quizzes, and examinations
        - Discussion forums and peer interaction
        - Instructor support and feedback
        - Certificates upon successful completion

        Academic Integrity:
        - All work must be your own original effort
        - Plagiarism and cheating are strictly prohibited
        - Collaboration policies vary by course
        - Academic dishonesty may result in course failure
        - Appeals process available for academic decisions

        Support Services:
        - Technical support for platform issues
        - Academic support for course content
        - Career guidance and counseling
        - Accessibility accommodations available
        - Student success resources and tools
      `,
      keyPoints: [
        'Courses are available 24/7 online',
        'Access duration varies by course type',
        'Academic integrity is strictly enforced',
        'Support services are available',
        'Certificates awarded upon completion'
      ]
    },
    payments: {
      title: 'Payments and Refunds',
      content: `
        Payment terms, pricing, and refund policies for our educational services.

        Pricing and Payment:
        - Course fees are clearly displayed before enrollment
        - Payment is required before course access is granted
        - Accepted payment methods include credit cards, PayPal, and bank transfers
        - Prices may change with advance notice
        - Currency conversion rates apply for international payments

        Refund Policy:
        - 30-day money-back guarantee for all courses
        - Refunds processed within 5-10 business days
        - No refunds for completed courses or downloaded materials
        - Partial refunds may apply for partially completed courses
        - Refund requests must be submitted through official channels

        Subscription Services:
        - Monthly and annual subscription options available
        - Automatic renewal unless cancelled
        - Cancellation effective at end of current billing period
        - No refunds for unused subscription time
        - Subscription benefits may change with notice

        Financial Aid and Scholarships:
        - Various financial aid options available
        - Scholarship programs for qualifying students
        - Payment plans for eligible courses
        - Military and veteran discounts available
        - Corporate and group discounts available
      `,
      keyPoints: [
        'Payment required before course access',
        '30-day money-back guarantee',
        'Refunds processed within 5-10 business days',
        'Subscription services available',
        'Financial aid and scholarships available'
      ]
    },
    'user-conduct': {
      title: 'User Conduct and Responsibilities',
      content: `
        Users must adhere to our community standards and acceptable use policies.

        Acceptable Use:
        - Use Services only for lawful educational purposes
        - Respect other users and maintain professional conduct
        - Follow all platform rules and guidelines
        - Report inappropriate behavior or content
        - Maintain the security and integrity of the platform

        Prohibited Activities:
        - Harassment, bullying, or intimidation of other users
        - Sharing inappropriate, offensive, or illegal content
        - Attempting to hack, disrupt, or damage our systems
        - Violating intellectual property rights
        - Creating multiple accounts to circumvent restrictions

        Content Standards:
        - User-generated content must be respectful and relevant
        - No spam, advertising, or promotional content
        - No personal attacks or discriminatory language
        - No sharing of copyrighted material without permission
        - Content must comply with applicable laws

        Enforcement:
        - Violations may result in warnings or account suspension
        - Serious violations may result in permanent account termination
        - We reserve the right to remove inappropriate content
        - Appeals process available for enforcement actions
        - Cooperation with law enforcement when required
      `,
      keyPoints: [
        'Users must maintain professional conduct',
        'Harassment and inappropriate behavior prohibited',
        'Content must be respectful and relevant',
        'Violations may result in account suspension',
        'Appeals process available for enforcement actions'
      ]
    },
    'intellectual-property': {
      title: 'Intellectual Property Rights',
      content: `
        Intellectual property rights and usage permissions for our educational content and platform.

        Our Intellectual Property:
        - All course content, materials, and platform features are owned by Excellence University
        - Trademarks, logos, and branding are protected intellectual property
        - Software, algorithms, and technical implementations are proprietary
        - User-generated content may be subject to our licensing terms
        - Third-party content is used with proper permissions

        User Rights and Limitations:
        - Users may access and use content for personal educational purposes
        - Commercial use of content requires explicit permission
        - Users may not redistribute, copy, or resell course materials
        - Users retain rights to their original contributions
        - Users grant us license to use their feedback and suggestions

        Copyright Compliance:
        - We respect intellectual property rights of others
        - Users must not infringe on third-party copyrights
        - DMCA takedown procedures are available
        - Users are responsible for their content submissions
        - We may remove content that violates copyright laws

        License Grants:
        - Limited license granted for personal educational use
        - No transfer of ownership rights
        - License terminates upon account closure
        - Certain content may have additional restrictions
        - International users subject to local copyright laws
      `,
      keyPoints: [
        'All course content is owned by Excellence University',
        'Users may use content for personal educational purposes',
        'Commercial use requires explicit permission',
        'Users must respect third-party copyrights',
        'License terminates upon account closure'
      ]
    },
    limitations: {
      title: 'Limitations and Disclaimers',
      content: `
        Important limitations and disclaimers regarding our services and your use of our platform.

        Service Availability:
        - We strive for 99.9% uptime but cannot guarantee uninterrupted service
        - Maintenance windows may temporarily limit access
        - Technical issues may affect platform functionality
        - We are not responsible for third-party service interruptions
        - International users may experience varying service levels

        Educational Outcomes:
        - Course completion does not guarantee employment or career advancement
        - Learning outcomes may vary based on individual effort and circumstances
        - We do not guarantee specific academic or professional results
        - Certificates represent completion, not competency guarantees
        - Industry recognition of credentials may vary

        Limitation of Liability:
        - Our liability is limited to the amount paid for services
        - We are not liable for indirect, incidental, or consequential damages
        - We disclaim warranties beyond what is legally required
        - Users assume responsibility for their learning outcomes
        - Force majeure events may affect service delivery

        Indemnification:
        - Users agree to indemnify us against claims arising from their use
        - Users are responsible for their actions and content
        - We are not liable for user-generated content
        - Users must comply with applicable laws and regulations
        - Disputes subject to binding arbitration
      `,
      keyPoints: [
        'We cannot guarantee uninterrupted service',
        'Course completion does not guarantee employment',
        'Our liability is limited to amount paid',
        'Users assume responsibility for learning outcomes',
        'Disputes subject to binding arbitration'
      ]
    }
  };

  const contactInfo = {
    title: 'Legal Contact Information',
    details: [
      'Legal Department: legal@excellence.edu',
      'General Inquiries: info@excellence.edu',
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
              Terms of <span className="text-yellow-400">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Please read these terms carefully before using our educational platform and services.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-300">
              <FaFileContract className="w-6 h-6" />
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions About Terms?</h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these Terms of Service or need clarification on any provisions, please contact our legal team.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dispute Resolution</h3>
                <p className="text-gray-600 mb-6">
                  Most disputes can be resolved through our customer support team. For legal matters, we offer binding arbitration.
                </p>
                <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center space-x-2">
                  <span>Contact Legal Team</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaExclamationTriangle className="w-8 h-8 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Legal Notices</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-6"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Governing Law</h3>
                  <p className="text-sm text-gray-600">These Terms are governed by the laws of Learning City, LC, without regard to conflict of law principles.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Severability</h3>
                  <p className="text-sm text-gray-600">If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in effect.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Entire Agreement</h3>
                  <p className="text-sm text-gray-600">These Terms, together with our Privacy Policy, constitute the entire agreement between you and Excellence University.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
