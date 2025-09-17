// Dummy data for development
export const dummyUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'student',
    avatar: '/avatars/john.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'instructor',
    avatar: '/avatars/jane.jpg',
  },
]

export const dummyCourses = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of React development',
    instructor: 'Jane Smith',
    duration: '4 weeks',
    level: 'beginner',
    students: 150,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Master advanced JavaScript concepts',
    instructor: 'John Doe',
    duration: '6 weeks',
    level: 'intermediate',
    students: 89,
    rating: 4.6,
  },
]

export const dummyLessons = [
  {
    id: 1,
    courseId: 1,
    title: 'Getting Started with React',
    content: 'Introduction to React components and JSX',
    duration: '45 minutes',
    order: 1,
  },
  {
    id: 2,
    courseId: 1,
    title: 'State and Props',
    content: 'Understanding React state and props',
    duration: '60 minutes',
    order: 2,
  },
]
