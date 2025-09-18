'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { selectIsAuthenticated, selectUser, selectUserRole } from '../../../store/slices/auth-slice';
import { 
  FaVideo, 
  FaUsers, 
  FaQuestionCircle, 
  FaClipboardList, 
  FaChartBar, 
  FaVideoCamera, 
  FaBullhorn, 
  FaComments, 
  FaDollarSign, 
  FaUser, 
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlay,
  FaPause,
  FaUpload,
  FaCalendarAlt,
  FaClock,
  FaStar,
  FaGraduationCap
} from 'react-icons/fa';

export default function InstructorDashboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userRole = useSelector(selectUserRole);
  
  const [activeTab, setActiveTab] = useState('overview');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [showLiveClassModal, setShowLiveClassModal] = useState(false);

  // Mock data
  const [courses] = useState([
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      students: 1247,
      rating: 4.8,
      price: 99.99,
      status: 'published',
      videos: 45,
      assignments: 8,
      quizzes: 12
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      students: 892,
      rating: 4.9,
      price: 149.99,
      status: 'published',
      videos: 32,
      assignments: 6,
      quizzes: 8
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      students: 634,
      rating: 4.7,
      price: 0,
      status: 'draft',
      videos: 28,
      assignments: 5,
      quizzes: 7
    }
  ]);

  const [recentEnrollments] = useState([
    { id: 1, student: 'John Doe', course: 'Web Development', date: '2024-01-15', status: 'active' },
    { id: 2, student: 'Jane Smith', course: 'Machine Learning', date: '2024-01-14', status: 'active' },
    { id: 3, student: 'Mike Johnson', course: 'Web Development', date: '2024-01-13', status: 'completed' },
    { id: 4, student: 'Sarah Wilson', course: 'Digital Marketing', date: '2024-01-12', status: 'active' }
  ]);

  const [assignments] = useState([
    { id: 1, title: 'Build a Portfolio Website', course: 'Web Development', submissions: 45, dueDate: '2024-01-20', status: 'active' },
    { id: 2, title: 'Linear Regression Project', course: 'Machine Learning', submissions: 32, dueDate: '2024-01-18', status: 'active' },
    { id: 3, title: 'Social Media Campaign', course: 'Digital Marketing', submissions: 28, dueDate: '2024-01-16', status: 'graded' }
  ]);

  const [quizzes] = useState([
    { id: 1, title: 'HTML & CSS Basics', course: 'Web Development', attempts: 89, avgScore: 85, status: 'active' },
    { id: 2, title: 'Python Fundamentals', course: 'Machine Learning', attempts: 67, avgScore: 78, status: 'active' },
    { id: 3, title: 'Marketing Strategies', course: 'Digital Marketing', attempts: 45, avgScore: 82, status: 'completed' }
  ]);

  const [liveClasses] = useState([
    { id: 1, title: 'Advanced React Patterns', date: '2024-01-20', time: '10:00 AM', attendees: 45, status: 'scheduled' },
    { id: 2, title: 'Data Visualization', date: '2024-01-22', time: '2:00 PM', attendees: 32, status: 'scheduled' },
    { id: 3, title: 'SEO Optimization', date: '2024-01-18', time: '4:00 PM', attendees: 28, status: 'completed' }
  ]);

  const [notices] = useState([
    { id: 1, title: 'New Course Upload Guidelines', content: 'Please follow the updated guidelines for course content...', date: '2024-01-15', priority: 'high' },
    { id: 2, title: 'Platform Maintenance', content: 'Scheduled maintenance on Sunday 2AM-4AM...', date: '2024-01-14', priority: 'medium' },
    { id: 3, title: 'Payment Processing Update', content: 'New payment processing system is now live...', date: '2024-01-13', priority: 'low' }
  ]);

  const [questions] = useState([
    { id: 1, student: 'John Doe', course: 'Web Development', question: 'How do I implement authentication in React?', date: '2024-01-15', status: 'unanswered' },
    { id: 2, student: 'Jane Smith', course: 'Machine Learning', question: 'What is the difference between supervised and unsupervised learning?', date: '2024-01-14', status: 'answered' },
    { id: 3, student: 'Mike Johnson', course: 'Web Development', question: 'Can you explain the concept of closures in JavaScript?', date: '2024-01-13', status: 'unanswered' }
  ]);

  useEffect(() => {
    if (!isAuthenticated || userRole !== 'instructor') {
      router.push('/login');
    }
  }, [isAuthenticated, userRole, router]);

  if (!isAuthenticated || userRole !== 'instructor') {
    return <div>Loading...</div>;
  }

  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
  const totalRevenue = courses.reduce((sum, course) => sum + (course.price * course.students), 0);
  const avgRating = courses.reduce((sum, course) => sum + course.rating, 0) / courses.length;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaChartBar },
    { id: 'courses', label: 'My Courses', icon: FaGraduationCap },
    { id: 'students', label: 'Students', icon: FaUsers },
    { id: 'quizzes', label: 'Quizzes', icon: FaQuestionCircle },
    { id: 'assignments', label: 'Assignments', icon: FaClipboardList },
    { id: 'live-classes', label: 'Live Classes', icon: FaVideoCamera },
    { id: 'notices', label: 'Notices', icon: FaBullhorn },
    { id: 'questions', label: 'Q&A', icon: FaComments },
    { id: 'payout', label: 'Payout', icon: FaDollarSign },
    { id: 'profile', label: 'Profile', icon: FaUser }
  ];

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
              <p className="text-sm font-medium text-gray-600">Total Courses</p>
              <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <FaUsers className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaStar className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-900">{avgRating.toFixed(1)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-full">
              <FaDollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Enrollments</h3>
          <div className="space-y-3">
            {recentEnrollments.slice(0, 5).map((enrollment) => (
              <div key={enrollment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{enrollment.student}</p>
                  <p className="text-sm text-gray-600">{enrollment.course}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{enrollment.date}</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    enrollment.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {enrollment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Questions</h3>
          <div className="space-y-3">
            {questions.slice(0, 5).map((question) => (
              <div key={question.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">{question.student}</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    question.status === 'answered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {question.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{question.course}</p>
                <p className="text-sm text-gray-700">{question.question}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
        <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 flex items-center space-x-2">
          <FaPlus className="w-4 h-4" />
          <span>Create Course</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  course.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {course.status}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FaUsers className="w-4 h-4 mr-2" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaStar className="w-4 h-4 mr-2" />
                  <span>{course.rating} rating</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaVideo className="w-4 h-4 mr-2" />
                  <span>{course.videos} videos</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-violet-600 text-white py-2 px-3 rounded-lg hover:bg-violet-700 text-sm flex items-center justify-center space-x-1">
                  <FaEye className="w-3 h-3" />
                  <span>View</span>
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded-lg hover:bg-gray-700 text-sm flex items-center justify-center space-x-1">
                  <FaEdit className="w-3 h-3" />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Student Management</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Enrollments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrolled</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentEnrollments.map((enrollment) => (
                <tr key={enrollment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{enrollment.student}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{enrollment.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{enrollment.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      enrollment.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {enrollment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-violet-600 hover:text-violet-900 mr-3">View</button>
                    <button className="text-gray-600 hover:text-gray-900">Message</button>
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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Quiz Management</h2>
        <button 
          onClick={() => setShowQuizModal(true)}
          className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 flex items-center space-x-2"
        >
          <FaPlus className="w-4 h-4" />
          <span>Create Quiz</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{quiz.title}</h3>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                quiz.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
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
                <FaUsers className="w-4 h-4 mr-2" />
                <span>{quiz.attempts} attempts</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaChartBar className="w-4 h-4 mr-2" />
                <span>{quiz.avgScore}% avg score</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-violet-600 text-white py-2 px-3 rounded-lg hover:bg-violet-700 text-sm">
                View Results
              </button>
              <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded-lg hover:bg-gray-700 text-sm">
                Edit Quiz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Assignment Management</h2>
        <button 
          onClick={() => setShowAssignmentModal(true)}
          className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 flex items-center space-x-2"
        >
          <FaPlus className="w-4 h-4" />
          <span>Create Assignment</span>
        </button>
      </div>

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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submissions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
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
                    <div className="text-sm text-gray-900">{assignment.submissions}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{assignment.dueDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      assignment.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {assignment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-violet-600 hover:text-violet-900 mr-3">Grade</button>
                    <button className="text-gray-600 hover:text-gray-900">View</button>
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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Live Classes</h2>
        <button 
          onClick={() => setShowLiveClassModal(true)}
          className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 flex items-center space-x-2"
        >
          <FaPlus className="w-4 h-4" />
          <span>Schedule Class</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveClasses.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{classItem.title}</h3>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                classItem.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                {classItem.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <FaCalendarAlt className="w-4 h-4 mr-2" />
                <span>{classItem.date}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaClock className="w-4 h-4 mr-2" />
                <span>{classItem.time}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaUsers className="w-4 h-4 mr-2" />
                <span>{classItem.attendees} attendees</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-violet-600 text-white py-2 px-3 rounded-lg hover:bg-violet-700 text-sm">
                {classItem.status === 'scheduled' ? 'Start Class' : 'View Recording'}
              </button>
              <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded-lg hover:bg-gray-700 text-sm">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNotices = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Notice Board</h2>
      
      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className={`bg-white rounded-lg shadow p-6 border-l-4 ${
            notice.priority === 'high' ? 'border-red-500' : 
            notice.priority === 'medium' ? 'border-yellow-500' : 'border-green-500'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{notice.title}</h3>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                notice.priority === 'high' ? 'bg-red-100 text-red-800' : 
                notice.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
              }`}>
                {notice.priority}
              </span>
            </div>
            <p className="text-gray-600 mb-2">{notice.content}</p>
            <p className="text-sm text-gray-500">{notice.date}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderQuestions = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Questions & Answers</h2>
      
      <div className="space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{question.student}</h3>
                <p className="text-sm text-gray-600">{question.course}</p>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                question.status === 'answered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {question.status}
              </span>
            </div>
            <p className="text-gray-700 mb-4">{question.question}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">{question.date}</p>
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 text-sm">
                {question.status === 'answered' ? 'View Answer' : 'Answer Question'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPayout = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Payout Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Earnings Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Earnings</span>
              <span className="font-semibold">${totalRevenue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Available Balance</span>
              <span className="font-semibold">${(totalRevenue * 0.8).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Platform Fee (20%)</span>
              <span className="font-semibold">${(totalRevenue * 0.2).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bank Account</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter bank account details" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">PayPal Email</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter PayPal email" />
            </div>
            <button className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-700">
              Update Payment Method
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payout History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-01-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$2,450.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Bank Transfer</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-01-01</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$1,890.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PayPal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <FaUser className="w-8 h-8 text-gray-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{user?.firstName} {user?.lastName}</h3>
            <p className="text-gray-600">{user?.email}</p>
            <p className="text-sm text-gray-500">Instructor since {new Date(user?.createdAt).getFullYear()}</p>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="e.g., Web Development, Machine Learning" />
          </div>
          
          <button type="submit" className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'courses': return renderCourses();
      case 'students': return renderStudents();
      case 'quizzes': return renderQuizzes();
      case 'assignments': return renderAssignments();
      case 'live-classes': return renderLiveClasses();
      case 'notices': return renderNotices();
      case 'questions': return renderQuestions();
      case 'payout': return renderPayout();
      case 'profile': return renderProfile();
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
              <h1 className="text-2xl font-bold text-gray-900">Instructor Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.firstName}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 flex items-center space-x-2">
                <FaUpload className="w-4 h-4" />
                <span>Upload Video</span>
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
                const Icon = tab.icon;
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
                    <Icon className="w-5 h-5" />
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
