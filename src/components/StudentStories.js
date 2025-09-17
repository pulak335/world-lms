'use client';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function StudentStories() {
  const stories = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Web Developer',
      company: 'Tech Corp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      story: 'The courses here completely transformed my career. I went from a marketing background to becoming a full-stack developer in just 6 months. The instructors are amazing and the hands-on projects really helped me understand the concepts.',
      course: 'Full Stack Web Development'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Data Scientist',
      company: 'Data Insights Inc',
      image: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      story: 'I was skeptical about online learning, but this platform exceeded all my expectations. The data science course was comprehensive and the community support was incredible. I landed my dream job within 3 months of completing the program.',
      course: 'Data Science Masterclass'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'Design Studio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      story: 'The UX design course was a game-changer for me. The practical approach and real-world projects helped me build a strong portfolio. I now work at a top design agency and couldn\'t be happier with my career choice.',
      course: 'UX/UI Design Fundamentals'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Digital Marketer',
      company: 'Growth Marketing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      story: 'As someone transitioning from traditional marketing to digital, this course was exactly what I needed. The instructors provided real-world insights and the networking opportunities were invaluable. Highly recommended!',
      course: 'Digital Marketing Strategy'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Mobile Developer',
      company: 'App Innovations',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      story: 'The mobile development course was comprehensive and up-to-date with the latest technologies. The mentorship program connected me with industry experts, and I was able to launch my first app within 4 months.',
      course: 'Mobile App Development'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Cloud Engineer',
      company: 'Cloud Solutions',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      story: 'The cloud computing course was exceptional. The hands-on labs and real-world scenarios prepared me perfectly for my current role. The certification I earned opened doors I never thought possible.',
      course: 'Cloud Computing & AWS'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-900 mb-4">
            Student Success Stories
          </h2>
          
          {/* Gradient Line */}
          <div className="flex justify-center space-x-1 mb-6">
            <div className="w-6 h-1 bg-violet-500 rounded-full"></div>
            <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-1 bg-green-500 rounded-full"></div>
            <div className="w-6 h-1 bg-yellow-500 rounded-full"></div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our students have transformed their careers and achieved their goals through our comprehensive learning programs.
          </p>
        </div>

        {/* Student Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <FaQuoteLeft className="w-6 h-6 text-violet-200" />
              </div>

              {/* Student Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-600">{story.role}</p>
                  <p className="text-sm text-violet-600 font-medium">{story.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              {/* Story */}
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{story.story}"
              </blockquote>

              {/* Course */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm text-violet-600 font-medium">
                  Completed: {story.course}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of students who have transformed their careers with our comprehensive courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-violet-600 hover:bg-violet-900 text-white font-medium rounded-lg transition-colors duration-300">
                Browse All Courses
              </button>
              <button className="px-8 py-3 border border-violet-600 text-violet-600 hover:bg-violet-50 font-medium rounded-lg transition-colors duration-300">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
