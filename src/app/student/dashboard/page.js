'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { selectIsAuthenticated, selectUser, selectUserRole } from '../../../store/slices/auth-slice';
import { 
  FaGraduationCap, 
  FaClipboardList, 
  FaQuestionCircle, 
  FaHistory, 
  FaVideoCamera, 
  FaUser, 
  FaKey, 
  FaCreditCard,
  FaPlay,
  FaClock,
  FaStar,
  FaChartBar,
  FaBookOpen,
  FaTrophy,
  FaCalendarAlt,
  FaExclamationCircle,
  FaDollarSign
} from 'react-icons/fa';

export default function StudentDashboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userRole = useSelector(selectUserRole);
  
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const [enrolledCourses] = useState([
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      progress: 75,
      totalLessons: 45,
      completedLessons: 34,
      nextLesson: 'React Hooks Deep Dive',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      instructor: 'Dr. Michael Chen',
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      nextLesson: 'Neural Networks Basics',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      instructor: 'Emily Rodriguez',
      progress: 90,
      totalLessons: 28,
      completedLessons: 25,
      nextLesson: 'Final Project',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]);

  const [assignments] = useState([
    {
      id: 1,
      title: 'Build a Portfolio Website',
      course: 'Web Development',
      dueDate: '2024-01-20',
      status: 'pending',
      grade: null,
      submitted: false
    },
    {
      id: 2,
      title: 'Linear Regression Project',
      course: 'Machine Learning',
      dueDate: '2024-01-18',
      status: 'graded',
      grade: 85,
      submitted: true
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      course: 'Digital Marketing',
      dueDate: '2024-01-16',
      status: 'overdue',
      grade: null,
      submitted: false
    }
  ]);

  const [quizzes] = useState([
    {
      id: 1,
      title: 'HTML & CSS Basics',
      course: 'Web Development',
      attempts: 2,
      maxAttempts: 3,
      bestScore: 85,
      lastAttempt: '2024-01-15',
      status: 'available'
    },
    {
      id: 2,
      title: 'Python Fundamentals',
      course: 'Machine Learning',
      attempts: 1,
      maxAttempts: 2,
      bestScore: 78,
      lastAttempt: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Marketing Strategies',
      course: 'Digital Marketing',
      attempts: 3,
      maxAttempts: 3,
      bestScore: 92,
      lastAttempt: '2024-01-13',
      status: 'completed'
    }
  ]);

  const [liveClasses] = useState([
    {
      id: 1,
      title: 'Advanced React Patterns',
      instructor: 'Sarah Johnson',
      date: '2024-01-20',
      time: '10:00 AM',
      status: 'upcoming',
      joinLink: '#'
    },
    {
      id: 2,
      title: 'Data Visualization',
      instructor: 'Dr. Michael Chen',
      date: '2024-01-22',
      time: '2:00 PM',
      status: 'upcoming',
      joinLink: '#'
    },
    {
      id: 3,
      title: 'SEO Optimization',
      instructor: 'Emily Rodriguez',
      date: '2024-01-18',
      time: '4:00 PM',
      status: 'completed',
      recordingLink: '#'
    }
  ]);

  const [orderHistory] = useState([
    {
      id: 1,
      course: 'Complete Web Development Bootcamp',
      amount: 99.99,
      date: '2024-01-10',
      status: 'completed',
      paymentMethod: 'Credit Card'
    },
    {
      id: 2,
      course: 'Machine Learning Fundamentals',
      amount: 149.99,
      date: '2024-01-08',
      status: 'completed',
      paymentMethod: 'PayPal'
    },
    {
      id: 3,
      course: 'Digital Marketing Mastery',
      amount: 0,
      date: '2024-01-05',
      status: 'completed',
      paymentMethod: 'Free'
    }
  ]);

  const [subscriptions] = useState([
    {
      id: 1,
      name: 'University Semester Courses',
      type: 'Semester Subscription',
      price: 299.99,
      status: 'active',
      startDate: '2024-01-01',
      endDate: '2024-06-30',
      courses: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
    }
  ]);

  useEffect(() => {
    if (!isAuthenticated || userRole !== 'student') {
      router.push('/login');
    }
  }, [isAuthenticated, userRole, router]);

  if (!isAuthenticated || userRole !== 'student') {
    return <div>Loading...</div>;
  }

  const totalCourses = enrolledCourses.length;
  const completedCourses = enrolledCourses.filter(course => course.progress === 100).length;
  const totalAssignments = assignments.length;
  const pendingAssignments = assignments.filter(assignment => assignment.status === 'pending').length;
  const avgQuizScore = quizzes.reduce((sum, quiz) => sum + (quiz.bestScore || 0), 0) / quizzes.length;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'courses', label: 'My Courses' },
    { id: 'assignments', label: 'Assignments' },
    { id: 'quizzes', label: 'Quizzes' },
    { id: 'quiz-attempts', label: 'Quiz Attempts' },
    { id: 'orders', label: 'Order History' },
    { id: 'live-classes', label: 'Live Classes' },
    { id: 'subscriptions', label: 'Subscriptions' },
    { id: 'profile', label: 'Edit Profile' },
    { id: 'password', label: 'Change Password' }
  ];

  const renderTabIcon = (tabId) => {
    switch (tabId) {
      case 'overview': return <FaChartBar className="w-5 h-5" />;
      case 'courses': return <FaGraduationCap className="w-5 h-5" />;
      case 'assignments': return <FaClipboardList className="w-5 h-5" />;
      case 'quizzes': return <FaQuestionCircle className="w-5 h-5" />;
      case 'quiz-attempts': return <FaHistory className="w-5 h-5" />;
      case 'orders': return <FaHistory className="w-5 h-5" />;
      case 'live-classes': return <FaVideoCamera className="w-5 h-5" />;
      case 'subscriptions': return <FaCreditCard className="w-5 h-5" />;
      case 'profile': return <FaUser className="w-5 h-5" />;
      case 'password': return <FaKey className="w-5 h-5" />;
      default: return <FaChartBar className="w-5 h-5" />;
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaGraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Enrolled Courses</p>
              <p className="text-2xl font-bold text-gray-900">{totalCourses}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <FaTrophy className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{completedCourses}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaClipboardList className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Assignments</p>
              <p className="text-2xl font-bold text-gray-900">{pendingAssignments}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-full">
              <FaStar className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Quiz Score</p>
              <p className="text-2xl font-bold text-gray-900">{avgQuizScore.toFixed(0)}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Progress</h3>
          <div className="space-y-4">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{course.title}</h4>
                  <span className="text-sm text-gray-600">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-violet-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {course.completedLessons} of {course.totalLessons} lessons completed
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
          <div className="space-y-3">
            {assignments.filter(a => a.status === 'pending').map((assignment) => (
              <div key={assignment.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{assignment.title}</p>
                  <p className="text-sm text-gray-600">{assignment.course}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{assignment.dueDate}</p>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Due Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-violet-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FaPlay className="w-4 h-4 mr-2" />
                  <span>Next: {course.nextLesson}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaStar className="w-4 h-4 mr-2" />
                  <span>{course.rating} rating</span>
                </div>
              </div>

              <Link 
                href={`/course/${course.id}`}
                className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-700 text-center block"
              >
                Continue Learning
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Assignments</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Assignments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{assignment.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{assignment.dueDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      assignment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      assignment.status === 'graded' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {assignment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {assignment.grade ? `${assignment.grade}%` : '-'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {assignment.status === 'pending' ? (
                      <button className="text-violet-600 hover:text-violet-900">Submit</button>
                    ) : (
                      <button className="text-gray-600 hover:text-gray-900">View</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderQuizzes = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Available Quizzes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{quiz.title}</h3>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                quiz.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {quiz.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <FaGraduationCap className="w-4 h-4 mr-2" />
                <span>{quiz.course}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaHistory className="w-4 h-4 mr-2" />
                <span>{quiz.attempts}/{quiz.maxAttempts} attempts</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaStar className="w-4 h-4 mr-2" />
                <span>Best: {quiz.bestScore}%</span>
              </div>
            </div>

            <div className="flex space-x-2">
              {quiz.status === 'available' && quiz.attempts < quiz.maxAttempts ? (
                <button className="flex-1 bg-violet-600 text-white py-2 px-3 rounded-lg hover:bg-violet-700 text-sm">
                  Take Quiz
                </button>
              ) : (
                <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded-lg hover:bg-gray-700 text-sm">
                  View Results
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderQuizAttempts = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Quiz Attempts History</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Attempts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quiz</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attempt</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {quizzes.map((quiz) => (
                <tr key={quiz.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{quiz.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{quiz.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{quiz.bestScore}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{quiz.attempts}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{quiz.lastAttempt}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-violet-600 hover:text-violet-900">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderOrderHistory = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Order History</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Purchase History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderHistory.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.amount === 0 ? 'Free' : `$${order.amount}`}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.paymentMethod}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-violet-600 hover:text-violet-900">Download Receipt</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderLiveClasses = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Live Classes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveClasses.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{classItem.title}</h3>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                classItem.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                {classItem.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <FaUser className="w-4 h-4 mr-2" />
                <span>{classItem.instructor}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaCalendarAlt className="w-4 h-4 mr-2" />
                <span>{classItem.date}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaClock className="w-4 h-4 mr-2" />
                <span>{classItem.time}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              {classItem.status === 'upcoming' ? (
                <button className="flex-1 bg-violet-600 text-white py-2 px-3 rounded-lg hover:bg-violet-700 text-sm">
                  Join Class
                </button>
              ) : (
                <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded-lg hover:bg-gray-700 text-sm">
                  View Recording
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSubscriptions = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Subscriptions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subscriptions.map((subscription) => (
          <div key={subscription.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{subscription.name}</h3>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                subscription.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {subscription.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <FaCreditCard className="w-4 h-4 mr-2" />
                <span>{subscription.type}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaDollarSign className="w-4 h-4 mr-2" />
                <span>${subscription.price}/semester</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaCalendarAlt className="w-4 h-4 mr-2" />
                <span>{subscription.startDate} - {subscription.endDate}</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Included Courses:</h4>
              <div className="flex flex-wrap gap-2">
                {subscription.courses.map((course, index) => (
                  <span key={index} className="inline-flex px-2 py-1 text-xs bg-violet-100 text-violet-800 rounded-full">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-violet-600 text-white py-2 px-3 rounded-lg hover:bg-violet-700 text-sm">
                Manage Subscription
              </button>
              <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded-lg hover:bg-gray-700 text-sm">
                View Courses
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <FaUser className="w-8 h-8 text-gray-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{user?.firstName} {user?.lastName}</h3>
            <p className="text-gray-600">{user?.email}</p>
            <p className="text-sm text-gray-500">Student since {new Date(user?.createdAt).getFullYear()}</p>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" defaultValue={user?.firstName} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" defaultValue={user?.lastName} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" defaultValue={user?.email} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input type="tel" defaultValue={user?.phone} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Tell us about yourself..."></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="e.g., Web Development, Data Science" />
          </div>
          
          <button type="submit" className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );

  const renderChangePassword = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Change Password</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <button type="submit" className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'courses': return renderCourses();
      case 'assignments': return renderAssignments();
      case 'quizzes': return renderQuizzes();
      case 'quiz-attempts': return renderQuizAttempts();
      case 'orders': return renderOrderHistory();
      case 'live-classes': return renderLiveClasses();
      case 'subscriptions': return renderSubscriptions();
      case 'profile': return renderProfile();
      case 'password': return renderChangePassword();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.firstName}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 flex items-center space-x-2">
                <FaExclamationCircle className="w-4 h-4" />
                <span>Notifications</span>
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-violet-100 text-violet-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {renderTabIcon(tab.id)}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
