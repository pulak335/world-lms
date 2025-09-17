'use client';

export default function TrendingCourses() {
  const courses = [
    {
      id: 1,
      category: 'Marketing',
      title: 'VideoCourse',
      subtitle: 'tEst',
      price: 'FREE',
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      category: 'Marketing',
      title: 'VideoCourse',
      subtitle: 'tEst',
      price: 'FREE',
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      category: 'Marketing',
      title: 'VideoCourse',
      subtitle: 'tEst',
      price: 'FREE',
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 4,
      category: 'Marketing',
      title: 'VideoCourse',
      subtitle: 'tEst',
      price: 'FREE',
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 5,
      category: 'Marketing',
      title: 'VideoCourse',
      subtitle: 'tEst',
      price: 'FREE',
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-900 mb-4">
            Most Trending Courses
          </h2>
          
          {/* Gradient Line */}
          <div className="flex space-x-1">
            <div className="w-6 h-1 bg-violet-500 rounded-full"></div>
            <div className="w-6 h-1 bg-yellow-500 rounded-full"></div>
            <div className="w-6 h-1 bg-teal-500 rounded-full"></div>
          </div>
        </div>

        {/* Course Cards Grid - 5 items in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
            >
              {/* Yellow Top Section */}
              <div className="bg-yellow-100 p-6">
                {/* Category Tag */}
                <span className="inline-block bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {course.category}
                </span>
                
                {/* Course Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors duration-300">
                  {course.title}
                </h3>
                
                {/* Course Subtitle */}
                <p className="text-gray-700 text-sm">
                  {course.subtitle}
                </p>
              </div>
              
              {/* White Bottom Section */}
              <div className="bg-white p-6 flex justify-between items-center">
                {/* Price */}
                <span className="text-lg font-bold text-gray-900">
                  {course.price}
                </span>
                
                {/* Instructor Avatar */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-violet-200">
                  <img
                    src={course.instructorAvatar}
                    alt="Instructor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
