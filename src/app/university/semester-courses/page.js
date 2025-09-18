'use client';

import { useState } from 'react';
import { FaGraduationCap, FaBookOpen, FaClock, FaUsers, FaCheckCircle, FaArrowRight, FaCalendar, FaAward, FaStar, FaDownload, FaPlay, FaFileText, FaLaptop } from 'react-icons/fa';

export default function SemesterCoursesPage() {
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [activeTab, setActiveTab] = useState('semester'); // 'semester' or 'open-credit'
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedSemesterForCredit, setSelectedSemesterForCredit] = useState(1);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [openCreditStep, setOpenCreditStep] = useState('department'); // 'department', 'semester', 'subjects'

  // Department data for Open Credit System
  const departments = [
    {
      id: 1,
      name: 'Computer Science & Engineering',
      code: 'CSE',
      description: 'Programming, Software Development, Algorithms, Data Structures',
      icon: '💻',
      color: 'blue',
      subjects: [
        { id: 1, name: 'Programming Fundamentals', code: 'CSE101', credits: 3, type: 'Core' },
        { id: 2, name: 'Data Structures', code: 'CSE102', credits: 3, type: 'Core' },
        { id: 3, name: 'Object-Oriented Programming', code: 'CSE201', credits: 3, type: 'Core' },
        { id: 4, name: 'Database Management', code: 'CSE301', credits: 3, type: 'Core' },
        { id: 5, name: 'Web Development', code: 'CSE302', credits: 3, type: 'Elective' },
        { id: 6, name: 'Mobile App Development', code: 'CSE401', credits: 3, type: 'Elective' },
        { id: 7, name: 'Machine Learning', code: 'CSE402', credits: 3, type: 'Elective' },
        { id: 8, name: 'Software Engineering', code: 'CSE501', credits: 3, type: 'Core' }
      ]
    },
    {
      id: 2,
      name: 'Electronics & Communication',
      code: 'ECE',
      description: 'Circuit Design, Digital Electronics, Communication Systems',
      icon: '⚡',
      color: 'purple',
      subjects: [
        { id: 9, name: 'Basic Electronics', code: 'ECE101', credits: 3, type: 'Core' },
        { id: 10, name: 'Digital Electronics', code: 'ECE102', credits: 3, type: 'Core' },
        { id: 11, name: 'Circuit Analysis', code: 'ECE201', credits: 3, type: 'Core' },
        { id: 12, name: 'Communication Systems', code: 'ECE301', credits: 3, type: 'Core' },
        { id: 13, name: 'Microprocessors', code: 'ECE302', credits: 3, type: 'Core' },
        { id: 14, name: 'VLSI Design', code: 'ECE401', credits: 3, type: 'Elective' },
        { id: 15, name: 'Embedded Systems', code: 'ECE402', credits: 3, type: 'Elective' },
        { id: 16, name: 'Signal Processing', code: 'ECE501', credits: 3, type: 'Elective' }
      ]
    },
    {
      id: 3,
      name: 'Mathematics',
      code: 'MATH',
      description: 'Calculus, Algebra, Statistics, Applied Mathematics',
      icon: '📊',
      color: 'green',
      subjects: [
        { id: 17, name: 'Calculus I', code: 'MATH101', credits: 3, type: 'Core' },
        { id: 18, name: 'Calculus II', code: 'MATH102', credits: 3, type: 'Core' },
        { id: 19, name: 'Linear Algebra', code: 'MATH201', credits: 3, type: 'Core' },
        { id: 20, name: 'Statistics', code: 'MATH301', credits: 3, type: 'Core' },
        { id: 21, name: 'Differential Equations', code: 'MATH302', credits: 3, type: 'Core' },
        { id: 22, name: 'Numerical Analysis', code: 'MATH401', credits: 3, type: 'Elective' },
        { id: 23, name: 'Probability Theory', code: 'MATH402', credits: 3, type: 'Elective' },
        { id: 24, name: 'Discrete Mathematics', code: 'MATH501', credits: 3, type: 'Core' }
      ]
    },
    {
      id: 4,
      name: 'Physics',
      code: 'PHY',
      description: 'Mechanics, Thermodynamics, Quantum Physics, Modern Physics',
      icon: '🔬',
      color: 'red',
      subjects: [
        { id: 25, name: 'Mechanics', code: 'PHY101', credits: 3, type: 'Core' },
        { id: 26, name: 'Thermodynamics', code: 'PHY102', credits: 3, type: 'Core' },
        { id: 27, name: 'Electromagnetism', code: 'PHY201', credits: 3, type: 'Core' },
        { id: 28, name: 'Quantum Physics', code: 'PHY301', credits: 3, type: 'Core' },
        { id: 29, name: 'Modern Physics', code: 'PHY302', credits: 3, type: 'Core' },
        { id: 30, name: 'Optics', code: 'PHY401', credits: 3, type: 'Elective' },
        { id: 31, name: 'Solid State Physics', code: 'PHY402', credits: 3, type: 'Elective' },
        { id: 32, name: 'Nuclear Physics', code: 'PHY501', credits: 3, type: 'Elective' }
      ]
    },
    {
      id: 5,
      name: 'Chemistry',
      code: 'CHEM',
      description: 'Organic Chemistry, Inorganic Chemistry, Physical Chemistry',
      icon: '🧪',
      color: 'yellow',
      subjects: [
        { id: 33, name: 'General Chemistry', code: 'CHEM101', credits: 3, type: 'Core' },
        { id: 34, name: 'Organic Chemistry', code: 'CHEM102', credits: 3, type: 'Core' },
        { id: 35, name: 'Inorganic Chemistry', code: 'CHEM201', credits: 3, type: 'Core' },
        { id: 36, name: 'Physical Chemistry', code: 'CHEM301', credits: 3, type: 'Core' },
        { id: 37, name: 'Analytical Chemistry', code: 'CHEM302', credits: 3, type: 'Core' },
        { id: 38, name: 'Biochemistry', code: 'CHEM401', credits: 3, type: 'Elective' },
        { id: 39, name: 'Environmental Chemistry', code: 'CHEM402', credits: 3, type: 'Elective' },
        { id: 40, name: 'Industrial Chemistry', code: 'CHEM501', credits: 3, type: 'Elective' }
      ]
    },
    {
      id: 6,
      name: 'English & Literature',
      code: 'ENG',
      description: 'Language Skills, Literature, Communication, Creative Writing',
      icon: '📚',
      color: 'indigo',
      subjects: [
        { id: 41, name: 'English Composition', code: 'ENG101', credits: 3, type: 'Core' },
        { id: 42, name: 'Literature Survey', code: 'ENG102', credits: 3, type: 'Core' },
        { id: 43, name: 'Technical Writing', code: 'ENG201', credits: 3, type: 'Core' },
        { id: 44, name: 'Creative Writing', code: 'ENG301', credits: 3, type: 'Elective' },
        { id: 45, name: 'Public Speaking', code: 'ENG302', credits: 3, type: 'Elective' },
        { id: 46, name: 'Business Communication', code: 'ENG401', credits: 3, type: 'Elective' },
        { id: 47, name: 'Media Studies', code: 'ENG402', credits: 3, type: 'Elective' },
        { id: 48, name: 'Linguistics', code: 'ENG501', credits: 3, type: 'Elective' }
      ]
    }
  ];

  const semesters = [
    {
      id: 1,
      name: 'First Semester',
      duration: '4 Months',
      credits: '18 Credits',
      subjects: [
        {
          id: 1,
          code: 'MATH101',
          name: 'Mathematics I',
          credits: 3,
          type: 'Core',
          instructor: 'Dr. Sarah Johnson',
          schedule: 'Mon, Wed, Fri 9:00-10:30 AM',
          description: 'Calculus, Algebra, and Trigonometry fundamentals for engineering and science students.',
          prerequisites: 'High School Mathematics',
          objectives: [
            'Understand fundamental calculus concepts',
            'Solve algebraic equations and inequalities',
            'Apply trigonometric functions',
            'Develop problem-solving skills'
          ],
          syllabus: [
            'Limits and Continuity',
            'Derivatives and Applications',
            'Integration Techniques',
            'Trigonometric Functions',
            'Exponential and Logarithmic Functions'
          ],
          assessment: [
            'Midterm Exam: 30%',
            'Final Exam: 40%',
            'Assignments: 20%',
            'Quizzes: 10%'
          ],
          color: 'bg-blue-50 border-blue-200',
          textColor: 'text-blue-800',
          iconColor: 'text-blue-600'
        },
        {
          id: 2,
          code: 'PHYS101',
          name: 'Physics I',
          credits: 3,
          type: 'Core',
          instructor: 'Prof. Michael Chen',
          schedule: 'Tue, Thu 10:00-11:30 AM',
          description: 'Mechanics, Thermodynamics, and Waves - fundamental physics concepts.',
          prerequisites: 'High School Physics',
          objectives: [
            'Understand Newton\'s laws of motion',
            'Apply conservation principles',
            'Analyze wave phenomena',
            'Solve physics problems'
          ],
          syllabus: [
            'Kinematics and Dynamics',
            'Work and Energy',
            'Momentum and Collisions',
            'Rotational Motion',
            'Waves and Oscillations'
          ],
          assessment: [
            'Midterm Exam: 30%',
            'Final Exam: 40%',
            'Laboratory Work: 20%',
            'Homework: 10%'
          ],
          color: 'bg-green-50 border-green-200',
          textColor: 'text-green-800',
          iconColor: 'text-green-600'
        },
        {
          id: 3,
          code: 'CHEM101',
          name: 'Chemistry I',
          credits: 3,
          type: 'Core',
          instructor: 'Dr. Emily Rodriguez',
          schedule: 'Mon, Wed 2:00-3:30 PM',
          description: 'General Chemistry and Organic Chemistry fundamentals.',
          prerequisites: 'High School Chemistry',
          objectives: [
            'Understand atomic structure',
            'Learn chemical bonding',
            'Study organic compounds',
            'Perform laboratory experiments'
          ],
          syllabus: [
            'Atomic Structure',
            'Chemical Bonding',
            'Stoichiometry',
            'Organic Chemistry Basics',
            'Laboratory Techniques'
          ],
          assessment: [
            'Midterm Exam: 30%',
            'Final Exam: 40%',
            'Laboratory Reports: 20%',
            'Class Participation: 10%'
          ],
          color: 'bg-purple-50 border-purple-200',
          textColor: 'text-purple-800',
          iconColor: 'text-purple-600'
        },
        {
          id: 4,
          code: 'ENG101',
          name: 'English Communication',
          credits: 2,
          type: 'Language',
          instructor: 'Prof. David Kim',
          schedule: 'Tue, Thu 1:00-2:00 PM',
          description: 'Business communication and presentation skills development.',
          prerequisites: 'None',
          objectives: [
            'Improve written communication',
            'Develop presentation skills',
            'Enhance business writing',
            'Build confidence in speaking'
          ],
          syllabus: [
            'Business Writing',
            'Presentation Skills',
            'Email Communication',
            'Report Writing',
            'Public Speaking'
          ],
          assessment: [
            'Written Assignments: 40%',
            'Presentations: 30%',
            'Final Project: 20%',
            'Participation: 10%'
          ],
          color: 'bg-orange-50 border-orange-200',
          textColor: 'text-orange-800',
          iconColor: 'text-orange-600'
        },
        {
          id: 5,
          code: 'DRAW101',
          name: 'Engineering Drawing',
          credits: 2,
          type: 'Practical',
          instructor: 'Prof. Lisa Wang',
          schedule: 'Fri 9:00-12:00 PM',
          description: 'Technical drawing and CAD basics for engineering students.',
          prerequisites: 'None',
          objectives: [
            'Learn technical drawing standards',
            'Master CAD software',
            'Create engineering drawings',
            'Understand geometric construction'
          ],
          syllabus: [
            'Drawing Standards',
            'Geometric Construction',
            'Orthographic Projections',
            'CAD Software Basics',
            'Engineering Graphics'
          ],
          assessment: [
            'Drawing Assignments: 50%',
            'CAD Projects: 30%',
            'Final Drawing: 20%'
          ],
          color: 'bg-pink-50 border-pink-200',
          textColor: 'text-pink-800',
          iconColor: 'text-pink-600'
        },
        {
          id: 6,
          code: 'WORK101',
          name: 'Workshop Practice',
          credits: 2,
          type: 'Practical',
          instructor: 'Prof. James Brown',
          schedule: 'Thu 2:00-5:00 PM',
          description: 'Hands-on workshop skills and safety procedures.',
          prerequisites: 'None',
          objectives: [
            'Learn workshop safety',
            'Master basic tools',
            'Develop practical skills',
            'Understand manufacturing processes'
          ],
          syllabus: [
            'Workshop Safety',
            'Hand Tools',
            'Machine Tools',
            'Welding Basics',
            'Quality Control'
          ],
          assessment: [
            'Practical Work: 60%',
            'Safety Test: 20%',
            'Final Project: 20%'
          ],
          color: 'bg-indigo-50 border-indigo-200',
          textColor: 'text-indigo-800',
          iconColor: 'text-indigo-600'
        }
      ]
    },
    {
      id: 2,
      name: 'Second Semester',
      duration: '4 Months',
      credits: '18 Credits',
      subjects: [
        {
          id: 7,
          code: 'MATH102',
          name: 'Mathematics II',
          credits: 3,
          type: 'Core',
          instructor: 'Dr. Sarah Johnson',
          schedule: 'Mon, Wed, Fri 9:00-10:30 AM',
          description: 'Advanced Calculus and Linear Algebra for engineering applications.',
          prerequisites: 'MATH101',
          objectives: [
            'Master advanced calculus',
            'Understand linear algebra',
            'Apply mathematical concepts',
            'Solve engineering problems'
          ],
          syllabus: [
            'Multivariable Calculus',
            'Linear Algebra',
            'Differential Equations',
            'Vector Analysis',
            'Complex Numbers'
          ],
          assessment: [
            'Midterm Exam: 30%',
            'Final Exam: 40%',
            'Assignments: 20%',
            'Quizzes: 10%'
          ],
          color: 'bg-blue-50 border-blue-200',
          textColor: 'text-blue-800',
          iconColor: 'text-blue-600'
        },
        {
          id: 8,
          code: 'PHYS102',
          name: 'Physics II',
          credits: 3,
          type: 'Core',
          instructor: 'Prof. Michael Chen',
          schedule: 'Tue, Thu 10:00-11:30 AM',
          description: 'Electricity, Magnetism, and Modern Physics concepts.',
          prerequisites: 'PHYS101',
          objectives: [
            'Understand electromagnetic fields',
            'Study modern physics',
            'Apply physics principles',
            'Analyze experimental data'
          ],
          syllabus: [
            'Electric Fields',
            'Magnetic Fields',
            'Electromagnetic Waves',
            'Quantum Mechanics',
            'Relativity'
          ],
          assessment: [
            'Midterm Exam: 30%',
            'Final Exam: 40%',
            'Laboratory Work: 20%',
            'Homework: 10%'
          ],
          color: 'bg-green-50 border-green-200',
          textColor: 'text-green-800',
          iconColor: 'text-green-600'
        },
        {
          id: 9,
          code: 'PROG101',
          name: 'Programming in C',
          credits: 3,
          type: 'Programming',
          instructor: 'Dr. Alex Thompson',
          schedule: 'Mon, Wed 2:00-3:30 PM',
          description: 'C programming fundamentals and data structures.',
          prerequisites: 'None',
          objectives: [
            'Master C programming',
            'Understand data structures',
            'Develop algorithms',
            'Debug programs effectively'
          ],
          syllabus: [
            'C Language Basics',
            'Control Structures',
            'Functions and Arrays',
            'Pointers and Memory',
            'Data Structures'
          ],
          assessment: [
            'Programming Assignments: 50%',
            'Midterm Exam: 25%',
            'Final Project: 25%'
          ],
          color: 'bg-teal-50 border-teal-200',
          textColor: 'text-teal-800',
          iconColor: 'text-teal-600'
        },
        {
          id: 10,
          code: 'ELEC101',
          name: 'Basic Electronics',
          credits: 3,
          type: 'Electronics',
          instructor: 'Prof. Maria Garcia',
          schedule: 'Tue, Thu 1:00-2:30 PM',
          description: 'Electronic components and circuits fundamentals.',
          prerequisites: 'PHYS101',
          objectives: [
            'Understand electronic components',
            'Analyze circuits',
            'Design simple circuits',
            'Use measurement equipment'
          ],
          syllabus: [
            'Electronic Components',
            'DC Circuits',
            'AC Circuits',
            'Semiconductor Devices',
            'Circuit Analysis'
          ],
          assessment: [
            'Midterm Exam: 30%',
            'Final Exam: 40%',
            'Laboratory Work: 20%',
            'Assignments: 10%'
          ],
          color: 'bg-yellow-50 border-yellow-200',
          textColor: 'text-yellow-800',
          iconColor: 'text-yellow-600'
        },
        {
          id: 11,
          code: 'ENV101',
          name: 'Environmental Studies',
          credits: 2,
          type: 'General',
          instructor: 'Dr. Robert Lee',
          schedule: 'Fri 10:00-12:00 PM',
          description: 'Environmental science and sustainability principles.',
          prerequisites: 'None',
          objectives: [
            'Understand environmental issues',
            'Learn sustainability principles',
            'Study climate change',
            'Develop environmental awareness'
          ],
          syllabus: [
            'Ecosystems',
            'Climate Change',
            'Pollution Control',
            'Sustainable Development',
            'Environmental Policy'
          ],
          assessment: [
            'Research Paper: 40%',
            'Presentations: 30%',
            'Final Exam: 30%'
          ],
          color: 'bg-emerald-50 border-emerald-200',
          textColor: 'text-emerald-800',
          iconColor: 'text-emerald-600'
        },
        {
          id: 12,
          code: 'LAB101',
          name: 'Lab Practice I',
          credits: 2,
          type: 'Practical',
          instructor: 'Prof. Jennifer White',
          schedule: 'Wed 2:00-5:00 PM',
          description: 'Physics and Chemistry laboratory work.',
          prerequisites: 'PHYS101, CHEM101',
          objectives: [
            'Perform laboratory experiments',
            'Analyze experimental data',
            'Write lab reports',
            'Follow safety procedures'
          ],
          syllabus: [
            'Laboratory Safety',
            'Measurement Techniques',
            'Data Analysis',
            'Report Writing',
            'Experimental Design'
          ],
          assessment: [
            'Lab Reports: 60%',
            'Practical Exam: 30%',
            'Safety Test: 10%'
          ],
          color: 'bg-red-50 border-red-200',
          textColor: 'text-red-800',
          iconColor: 'text-red-600'
        }
      ]
    },
    {
      id: 3,
      name: 'Third Semester',
      duration: '4 Months',
      credits: '18 Credits',
      subjects: [
        {
          id: 13,
          code: 'MATH103',
          name: 'Mathematics III',
          credits: 3,
          type: 'Core',
          instructor: 'Dr. Sarah Johnson',
          schedule: 'Mon, Wed, Fri 9:00-10:30 AM',
          description: 'Differential Equations and Complex Analysis.',
          prerequisites: 'MATH102',
          objectives: [
            'Solve differential equations',
            'Understand complex analysis',
            'Apply mathematical methods',
            'Model real-world problems'
          ],
          syllabus: [
            'Ordinary Differential Equations',
            'Partial Differential Equations',
            'Complex Analysis',
            'Fourier Series',
            'Laplace Transforms'
          ],
          assessment: [
            'Midterm Exam: 30%',
            'Final Exam: 40%',
            'Assignments: 20%',
            'Quizzes: 10%'
          ],
          color: 'bg-blue-50 border-blue-200',
          textColor: 'text-blue-800',
          iconColor: 'text-blue-600'
        },
        {
          id: 14,
          code: 'OOP101',
          name: 'Object-Oriented Programming',
          credits: 3,
          type: 'Programming',
          instructor: 'Dr. Alex Thompson',
          schedule: 'Tue, Thu 10:00-11:30 AM',
          description: 'Java, C++, and OOP concepts and principles.',
          prerequisites: 'PROG101',
          objectives: [
            'Master OOP concepts',
            'Learn Java and C++',
            'Design object-oriented systems',
            'Apply design patterns'
          ],
          syllabus: [
            'OOP Principles',
            'Java Programming',
            'C++ Programming',
            'Design Patterns',
            'Software Engineering'
          ],
          assessment: [
            'Programming Projects: 50%',
            'Midterm Exam: 25%',
            'Final Project: 25%'
          ],
          color: 'bg-teal-50 border-teal-200',
          textColor: 'text-teal-800',
          iconColor: 'text-teal-600'
        },
        {
          id: 15,
          code: 'DATA101',
          name: 'Data Structures',
          credits: 3,
          type: 'Programming',
          instructor: 'Prof. Kevin Park',
          schedule: 'Mon, Wed 2:00-3:30 PM',
          description: 'Algorithms and data structure implementation.',
          prerequisites: 'PROG101',
          objectives: [
            'Implement data structures',
            'Analyze algorithms',
            'Solve computational problems',
            'Optimize program performance'
          ],
          syllabus: [
            'Arrays and Linked Lists',
            'Stacks and Queues',
            'Trees and Graphs',
            'Sorting Algorithms',
            'Search Algorithms'
          ],
          assessment: [
            'Programming Assignments: 50%',
            'Midterm Exam: 25%',
            'Final Project: 25%'
          ],
          color: 'bg-teal-50 border-teal-200',
          textColor: 'text-teal-800',
          iconColor: 'text-teal-600'
        },
        {
          id: 16,
          code: 'DIGI101',
          name: 'Digital Electronics',
          credits: 3,
          type: 'Electronics',
          instructor: 'Prof. Maria Garcia',
          schedule: 'Tue, Thu 1:00-2:30 PM',
          description: 'Logic gates, flip-flops, and digital systems.',
          prerequisites: 'ELEC101',
          objectives: [
            'Understand digital circuits',
            'Design logic circuits',
            'Work with digital systems',
            'Program microcontrollers'
          ],
          syllabus: [
            'Logic Gates',
            'Boolean Algebra',
            'Combinational Circuits',
            'Sequential Circuits',
            'Microcontrollers'
          ],
          assessment: [
            'Midterm Exam: 30%',
            'Final Exam: 40%',
            'Laboratory Work: 20%',
            'Assignments: 10%'
          ],
          color: 'bg-yellow-50 border-yellow-200',
          textColor: 'text-yellow-800',
          iconColor: 'text-yellow-600'
        },
        {
          id: 17,
          code: 'DB101',
          name: 'Database Management',
          credits: 3,
          type: 'Database',
          instructor: 'Dr. Lisa Chen',
          schedule: 'Fri 9:00-12:00 PM',
          description: 'SQL, MySQL, and database design principles.',
          prerequisites: 'PROG101',
          objectives: [
            'Design databases',
            'Write SQL queries',
            'Normalize data',
            'Manage database systems'
          ],
          syllabus: [
            'Database Design',
            'SQL Programming',
            'MySQL Administration',
            'Data Normalization',
            'Database Security'
          ],
          assessment: [
            'Database Projects: 50%',
            'Midterm Exam: 25%',
            'Final Project: 25%'
          ],
          color: 'bg-orange-50 border-orange-200',
          textColor: 'text-orange-800',
          iconColor: 'text-orange-600'
        },
        {
          id: 18,
          code: 'FREN101',
          name: 'French Language',
          credits: 2,
          type: 'Language',
          instructor: 'Prof. Pierre Dubois',
          schedule: 'Mon, Wed 4:00-5:00 PM',
          description: 'Basic French language skills and culture.',
          prerequisites: 'None',
          objectives: [
            'Learn basic French vocabulary',
            'Understand French grammar',
            'Practice conversation',
            'Explore French culture'
          ],
          syllabus: [
            'French Alphabet',
            'Basic Vocabulary',
            'Grammar Rules',
            'Conversation Practice',
            'French Culture'
          ],
          assessment: [
            'Oral Exam: 40%',
            'Written Exam: 30%',
            'Assignments: 20%',
            'Participation: 10%'
          ],
          color: 'bg-pink-50 border-pink-200',
          textColor: 'text-pink-800',
          iconColor: 'text-pink-600'
        }
      ]
    },
    {
      id: 4,
      name: 'Fourth Semester',
      duration: '4 Months',
      credits: '18 Credits',
      subjects: [
        {
          id: 19,
          code: 'WEB101',
          name: 'Web Development',
          credits: 3,
          type: 'Programming',
          instructor: 'Dr. Alex Thompson',
          schedule: 'Mon, Wed, Fri 9:00-10:30 AM',
          description: 'HTML, CSS, JavaScript, and modern web frameworks.',
          prerequisites: 'OOP101',
          objectives: [
            'Build responsive websites',
            'Master frontend technologies',
            'Learn backend development',
            'Deploy web applications'
          ],
          syllabus: [
            'HTML5 and CSS3',
            'JavaScript ES6+',
            'React Framework',
            'Node.js Backend',
            'Database Integration'
          ],
          assessment: [
            'Web Projects: 60%',
            'Midterm Exam: 20%',
            'Final Project: 20%'
          ],
          color: 'bg-teal-50 border-teal-200',
          textColor: 'text-teal-800',
          iconColor: 'text-teal-600'
        },
        {
          id: 20,
          code: 'MOBILE101',
          name: 'Mobile App Development',
          credits: 3,
          type: 'Programming',
          instructor: 'Prof. Kevin Park',
          schedule: 'Tue, Thu 10:00-11:30 AM',
          description: 'React Native and Flutter mobile app development.',
          prerequisites: 'WEB101',
          objectives: [
            'Develop mobile applications',
            'Master cross-platform development',
            'Design mobile interfaces',
            'Publish mobile apps'
          ],
          syllabus: [
            'React Native',
            'Flutter Development',
            'Mobile UI/UX',
            'App Store Publishing',
            'Mobile Testing'
          ],
          assessment: [
            'Mobile App Projects: 60%',
            'Midterm Exam: 20%',
            'Final Project: 20%'
          ],
          color: 'bg-teal-50 border-teal-200',
          textColor: 'text-teal-800',
          iconColor: 'text-teal-600'
        },
        {
          id: 21,
          code: 'MICRO101',
          name: 'Microcontrollers',
          credits: 3,
          type: 'Electronics',
          instructor: 'Prof. Maria Garcia',
          schedule: 'Mon, Wed 2:00-3:30 PM',
          description: 'Arduino, PIC, and embedded systems programming.',
          prerequisites: 'DIGI101',
          objectives: [
            'Program microcontrollers',
            'Design embedded systems',
            'Interface with sensors',
            'Build IoT projects'
          ],
          syllabus: [
            'Arduino Programming',
            'PIC Microcontrollers',
            'Sensor Interfacing',
            'IoT Development',
            'Embedded Systems'
          ],
          assessment: [
            'Hardware Projects: 60%',
            'Midterm Exam: 20%',
            'Final Project: 20%'
          ],
          color: 'bg-yellow-50 border-yellow-200',
          textColor: 'text-yellow-800',
          iconColor: 'text-yellow-600'
        },
        {
          id: 22,
          code: 'ADVDB101',
          name: 'Advanced Database',
          credits: 3,
          type: 'Database',
          instructor: 'Dr. Lisa Chen',
          schedule: 'Tue, Thu 1:00-2:30 PM',
          description: 'NoSQL, MongoDB, and data analytics.',
          prerequisites: 'DB101',
          objectives: [
            'Work with NoSQL databases',
            'Perform data analytics',
            'Design data warehouses',
            'Implement data mining'
          ],
          syllabus: [
            'NoSQL Databases',
            'MongoDB Administration',
            'Data Analytics',
            'Data Warehousing',
            'Data Mining'
          ],
          assessment: [
            'Database Projects: 50%',
            'Analytics Projects: 30%',
            'Final Exam: 20%'
          ],
          color: 'bg-orange-50 border-orange-200',
          textColor: 'text-orange-800',
          iconColor: 'text-orange-600'
        },
        {
          id: 23,
          code: 'BIZ101',
          name: 'Business Communication',
          credits: 2,
          type: 'General',
          instructor: 'Prof. David Kim',
          schedule: 'Fri 10:00-12:00 PM',
          description: 'Professional communication and business ethics.',
          prerequisites: 'ENG101',
          objectives: [
            'Master business writing',
            'Develop negotiation skills',
            'Understand business ethics',
            'Build professional relationships'
          ],
          syllabus: [
            'Business Writing',
            'Negotiation Skills',
            'Business Ethics',
            'Professional Networking',
            'Cross-cultural Communication'
          ],
          assessment: [
            'Business Reports: 40%',
            'Presentations: 30%',
            'Case Studies: 20%',
            'Participation: 10%'
          ],
          color: 'bg-emerald-50 border-emerald-200',
          textColor: 'text-emerald-800',
          iconColor: 'text-emerald-600'
        },
        {
          id: 24,
          code: 'PROJ101',
          name: 'Project Management',
          credits: 2,
          type: 'General',
          instructor: 'Prof. Jennifer White',
          schedule: 'Wed 2:00-5:00 PM',
          description: 'Project planning and management methodologies.',
          prerequisites: 'None',
          objectives: [
            'Plan and manage projects',
            'Use project management tools',
            'Lead project teams',
            'Monitor project progress'
          ],
          syllabus: [
            'Project Planning',
            'Risk Management',
            'Team Leadership',
            'Project Tools',
            'Quality Management'
          ],
          assessment: [
            'Project Plans: 50%',
            'Team Project: 30%',
            'Final Presentation: 20%'
          ],
          color: 'bg-indigo-50 border-indigo-200',
          textColor: 'text-indigo-800',
          iconColor: 'text-indigo-600'
        }
      ]
    }
  ];

  const currentSemester = semesters.find(sem => sem.id === selectedSemester);
  const currentSubject = selectedSubject ? currentSemester?.subjects.find(sub => sub.id === selectedSubject) : null;

  const getSubjectTypeColor = (type) => {
    switch (type) {
      case 'Core': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Programming': return 'bg-green-100 text-green-800 border-green-200';
      case 'Electronics': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Database': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Language': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'General': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Practical': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-violet-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <FaGraduationCap className="w-12 h-12 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                University Semester Courses
              </h1>
            </div>
            
            <div className="flex justify-center space-x-2 mb-6">
              <div className="w-6 h-1 bg-yellow-400 rounded-full"></div>
              <div className="w-6 h-1 bg-violet-400 rounded-full"></div>
              <div className="w-6 h-1 bg-blue-400 rounded-full"></div>
              <div className="w-6 h-1 bg-green-400 rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Explore our comprehensive semester-based curriculum designed to provide you with the knowledge and skills needed for academic and professional success.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('semester')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'semester'
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Semester Courses
            </button>
            <button
              onClick={() => setActiveTab('open-credit')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'open-credit'
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Open Credit System
            </button>
          </div>

          {/* Semester Selector - Only show for semester tab */}
          {activeTab === 'semester' && (
            <div className="flex flex-wrap justify-center gap-4">
              {semesters.map((semester) => (
                <button
                  key={semester.id}
                  onClick={() => setSelectedSemester(semester.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedSemester === semester.id
                      ? 'bg-violet-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {semester.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Semester Courses Content */}
          {activeTab === 'semester' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Semester Overview */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentSemester?.name}
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <FaClock className="w-5 h-5 text-violet-600" />
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold text-gray-900">{currentSemester?.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <FaAward className="w-5 h-5 text-violet-600" />
                    <div>
                      <p className="text-sm text-gray-600">Total Credits</p>
                      <p className="font-semibold text-gray-900">{currentSemester?.credits}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <FaBookOpen className="w-5 h-5 text-violet-600" />
                    <div>
                      <p className="text-sm text-gray-600">Subjects</p>
                      <p className="font-semibold text-gray-900">{currentSemester?.subjects.length} Courses</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Subjects in this Semester:</h3>
                  {currentSemester?.subjects.map((subject) => (
                    <button
                      key={subject.id}
                      onClick={() => setSelectedSubject(subject.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        selectedSubject === subject.id
                          ? 'border-violet-500 bg-violet-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{subject.name}</p>
                          <p className="text-sm text-gray-600">{subject.code}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSubjectTypeColor(subject.type)}`}>
                          {subject.credits} cr
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <button className="w-full px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors duration-300">
                    Enroll in Semester
                  </button>
                  <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors duration-300">
                    Download Syllabus
                  </button>
                </div>
              </div>
            </div>

            {/* Subject Details */}
            <div className="lg:col-span-2">
              {currentSubject ? (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Subject Header */}
                  <div className={`${currentSubject.color} p-6 border-b-2 ${currentSubject.color.includes('blue') ? 'border-blue-200' : currentSubject.color.includes('green') ? 'border-green-200' : 'border-gray-200'}`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className={`text-2xl font-bold ${currentSubject.textColor} mb-2`}>
                          {currentSubject.name}
                        </h2>
                        <p className={`${currentSubject.textColor} opacity-80 mb-3`}>
                          {currentSubject.code} • {currentSubject.credits} Credits • {currentSubject.type}
                        </p>
                        <p className={`${currentSubject.textColor} opacity-90`}>
                          {currentSubject.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2`}>
                          <span className={`text-xl font-bold ${currentSubject.iconColor}`}>
                            {currentSubject.code.slice(-3)}
                          </span>
                        </div>
                        <p className={`text-sm ${currentSubject.textColor} opacity-80`}>
                          {currentSubject.instructor}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subject Content */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Course Information */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Information</h3>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <FaCalendar className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-700">{currentSubject.schedule}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <FaUsers className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-700">{currentSubject.instructor}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <FaBookOpen className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-700">Prerequisites: {currentSubject.prerequisites}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Learning Objectives</h3>
                          <ul className="space-y-2">
                            {currentSubject.objectives.map((objective, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <FaCheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Assessment</h3>
                          <div className="space-y-2">
                            {currentSubject.assessment.map((item, index) => (
                              <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <span className="text-gray-700">{item.split(':')[0]}</span>
                                <span className="font-semibold text-gray-900">{item.split(':')[1]}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Syllabus */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Syllabus</h3>
                          <div className="space-y-2">
                            {currentSubject.syllabus.map((topic, index) => (
                              <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                                <span className="w-6 h-6 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-sm font-semibold">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <button className="w-full px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                            <FaPlay className="w-4 h-4" />
                            <span>Start Learning</span>
                          </button>
                          <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                            <FaDownload className="w-4 h-4" />
                            <span>Download Materials</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <FaBookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a Subject</h3>
                  <p className="text-gray-600">
                    Choose a subject from the sidebar to view detailed information, syllabus, and learning objectives.
                  </p>
                </div>
              )}
            </div>
          </div>
          )}

          {/* Open Credit System Content */}
          {activeTab === 'open-credit' && (
            <div>
              {/* Open Credit Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <FaGraduationCap className="w-8 h-8 text-violet-600" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Open Credit System
                  </h2>
                </div>
                
                <div className="flex justify-center space-x-1 mb-6">
                  <div className="w-6 h-1 bg-violet-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-green-500 rounded-full"></div>
                  <div className="w-6 h-1 bg-yellow-500 rounded-full"></div>
                </div>
                
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  Create your own personalized curriculum by selecting subjects from any department. Build a custom learning path that fits your interests and career goals.
                </p>

                {/* Progress Steps */}
                <div className="flex justify-center items-center space-x-4 mb-8">
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    openCreditStep === 'department' ? 'bg-violet-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <span className="w-6 h-6 rounded-full bg-current flex items-center justify-center text-sm font-bold">1</span>
                    <span>Choose Department</span>
                  </div>
                  <div className={`w-8 h-1 ${openCreditStep === 'semester' || openCreditStep === 'subjects' ? 'bg-violet-500' : 'bg-gray-300'}`}></div>
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    openCreditStep === 'semester' ? 'bg-violet-600 text-white' : openCreditStep === 'subjects' ? 'bg-violet-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <span className="w-6 h-6 rounded-full bg-current flex items-center justify-center text-sm font-bold">2</span>
                    <span>Select Semester</span>
                  </div>
                  <div className={`w-8 h-1 ${openCreditStep === 'subjects' ? 'bg-violet-500' : 'bg-gray-300'}`}></div>
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    openCreditStep === 'subjects' ? 'bg-violet-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <span className="w-6 h-6 rounded-full bg-current flex items-center justify-center text-sm font-bold">3</span>
                    <span>Choose Subjects</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2">
                  {/* Step 1: Department Selection */}
                  {openCreditStep === 'department' && (
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Choose Your Department</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {departments.map(department => (
                          <div
                            key={department.id}
                            onClick={() => {
                              setSelectedDepartment(department);
                              setOpenCreditStep('semester');
                            }}
                            className={`p-6 rounded-lg border-2 cursor-pointer transition-all hover:shadow-lg ${
                              selectedDepartment?.id === department.id
                                ? 'border-violet-500 bg-violet-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-start space-x-4">
                              <div className="text-4xl">{department.icon}</div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 mb-2">{department.name}</h4>
                                <p className="text-sm text-gray-600 mb-3">{department.description}</p>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-700">{department.code}</span>
                                  <span className="text-sm text-gray-500">{department.subjects.length} subjects</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Semester Selection */}
                  {openCreditStep === 'semester' && selectedDepartment && (
                    <div className="space-y-6">
                      {/* Department Info */}
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center space-x-4 mb-4">
                          <button
                            onClick={() => setOpenCreditStep('department')}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <FaArrowRight className="w-4 h-4 text-gray-600 rotate-180" />
                          </button>
                          <div className="text-3xl">{selectedDepartment.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{selectedDepartment.name}</h3>
                            <p className="text-gray-600">{selectedDepartment.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Semester Selector */}
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Select Semester to Browse Subjects</h3>
                        <div className="grid grid-cols-4 gap-3">
                          {semesters.map(semester => (
                            <button
                              key={semester.id}
                              onClick={() => {
                                setSelectedSemesterForCredit(semester.id);
                                setOpenCreditStep('subjects');
                              }}
                              className={`p-3 rounded-lg font-medium transition-colors ${
                                selectedSemesterForCredit === semester.id
                                  ? 'bg-violet-600 text-white'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              Semester {semester.id}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Subject Selection */}
                  {openCreditStep === 'subjects' && selectedDepartment && (
                    <div className="space-y-6">
                      {/* Department and Semester Info */}
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center space-x-4 mb-4">
                          <button
                            onClick={() => setOpenCreditStep('semester')}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <FaArrowRight className="w-4 h-4 text-gray-600 rotate-180" />
                          </button>
                          <div className="text-3xl">{selectedDepartment.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{selectedDepartment.name}</h3>
                            <p className="text-gray-600">Semester {selectedSemesterForCredit} • {selectedDepartment.subjects.length} subjects available</p>
                          </div>
                        </div>
                      </div>

                      {/* Subjects List */}
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Available Subjects - {selectedDepartment.name}
                        </h3>
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                          {selectedDepartment.subjects.map(subject => {
                            const isSelected = selectedSubjects.find(s => s.id === subject.id);
                            return (
                              <div
                                key={subject.id}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                  isSelected
                                    ? 'border-violet-500 bg-violet-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                                onClick={() => {
                                  if (isSelected) {
                                    setSelectedSubjects(prev => prev.filter(s => s.id !== subject.id));
                                  } else {
                                    setSelectedSubjects(prev => [...prev, subject]);
                                  }
                                }}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                      <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                                        subject.type === 'Core' 
                                          ? 'border-blue-500 bg-blue-100 text-blue-800'
                                          : 'border-green-500 bg-green-100 text-green-800'
                                      }`}>
                                        {subject.type}
                                      </span>
                                      <span className="text-sm font-bold text-violet-600 bg-violet-100 px-2 py-1 rounded-full">
                                        {subject.credits} credits
                                      </span>
                                    </div>
                                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                                      <span className="font-medium">{subject.code}</span>
                                    </div>
                                  </div>
                                  <div className="ml-4">
                                    {isSelected ? (
                                      <FaCheckCircle className="w-5 h-5 text-violet-600" />
                                    ) : (
                                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Selection Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl p-6 shadow-lg sticky top-6">
                    {/* Step 1: Department Selection Info */}
                    {openCreditStep === 'department' && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Department</h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-blue-900 mb-2">Available Departments</h4>
                            <p className="text-sm text-blue-800 mb-3">Select a department to view available subjects and create your custom curriculum.</p>
                            <div className="text-sm text-blue-700">
                              <div className="flex justify-between">
                                <span>Total Departments:</span>
                                <span className="font-bold">{departments.length}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Total Subjects:</span>
                                <span className="font-bold">{departments.reduce((sum, dept) => sum + dept.subjects.length, 0)}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h4 className="font-semibold text-green-900 mb-2">Next Steps</h4>
                            <ul className="text-sm text-green-800 space-y-1">
                              <li>• Choose your department</li>
                              <li>• Select semester</li>
                              <li>• Pick subjects</li>
                              <li>• Enroll in courses</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Semester Selection Info */}
                    {openCreditStep === 'semester' && selectedDepartment && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Selected Department</h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-violet-50 rounded-lg">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="text-2xl">{selectedDepartment.icon}</div>
                              <div>
                                <h4 className="font-semibold text-violet-900">{selectedDepartment.name}</h4>
                                <p className="text-sm text-violet-700">{selectedDepartment.code}</p>
                              </div>
                            </div>
                            <p className="text-sm text-violet-800">{selectedDepartment.description}</p>
                          </div>
                          
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-blue-900 mb-2">Department Stats</h4>
                            <div className="text-sm text-blue-800 space-y-1">
                              <div className="flex justify-between">
                                <span>Total Subjects:</span>
                                <span className="font-bold">{selectedDepartment.subjects.length}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Core Subjects:</span>
                                <span className="font-bold">{selectedDepartment.subjects.filter(s => s.type === 'Core').length}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Elective Subjects:</span>
                                <span className="font-bold">{selectedDepartment.subjects.filter(s => s.type === 'Elective').length}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Subject Selection Summary */}
                    {openCreditStep === 'subjects' && selectedDepartment && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Your Custom Curriculum</h3>
                        
                        {/* Department Info */}
                        <div className="p-4 bg-violet-50 rounded-lg mb-4">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="text-2xl">{selectedDepartment.icon}</div>
                            <div>
                              <h4 className="font-semibold text-violet-900">{selectedDepartment.name}</h4>
                              <p className="text-sm text-violet-700">Semester {selectedSemesterForCredit}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Total Credits */}
                        <div className="bg-violet-50 rounded-lg p-4 mb-6">
                          <div className="flex items-center space-x-3">
                            <FaClock className="w-6 h-6 text-violet-600" />
                            <div>
                              <p className="text-sm text-gray-600">Total Credits</p>
                              <p className="text-2xl font-bold text-violet-600">
                                {selectedSubjects.reduce((total, subject) => total + subject.credits, 0)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Selected Subjects */}
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900">Selected Subjects ({selectedSubjects.length})</h4>
                          {selectedSubjects.length === 0 ? (
                            <p className="text-gray-500 text-sm">No subjects selected yet. Choose subjects from the list to build your curriculum.</p>
                          ) : (
                            <div className="space-y-2">
                              {selectedSubjects.map(subject => (
                                <div key={subject.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                  <div>
                                    <span className="text-sm text-gray-900 font-medium">{subject.name}</span>
                                    <p className="text-xs text-gray-600">{subject.code}</p>
                                  </div>
                                  <span className="text-xs font-bold text-violet-600">{subject.credits}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 space-y-3">
                          <button 
                            disabled={selectedSubjects.length === 0}
                            className={`w-full px-4 py-3 font-medium rounded-lg transition-colors duration-300 ${
                              selectedSubjects.length > 0
                                ? 'bg-violet-600 hover:bg-violet-700 text-white'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            Enroll Selected Subjects
                          </button>
                          <button 
                            onClick={() => setSelectedSubjects([])}
                            disabled={selectedSubjects.length === 0}
                            className={`w-full px-4 py-3 border font-medium rounded-lg transition-colors duration-300 ${
                              selectedSubjects.length > 0
                                ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                : 'border-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                          >
                            Clear Selection
                          </button>
                        </div>

                        {/* Credit Requirements Info */}
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                          <h5 className="font-semibold text-blue-900 mb-2">Credit Requirements</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Minimum: 12 credits per semester</li>
                            <li>• Maximum: 24 credits per semester</li>
                            <li>• Core subjects: Required for graduation</li>
                            <li>• Electives: Choose freely</li>
                            <li>• Prerequisites: Must be completed first</li>
                          </ul>
                        </div>

                        {/* Subject Type Distribution */}
                        {selectedSubjects.length > 0 && (
                          <div className="mt-6 p-4 bg-green-50 rounded-lg">
                            <h5 className="font-semibold text-green-900 mb-2">Subject Distribution</h5>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-green-800">Core Subjects</span>
                                <span className="text-sm font-bold text-green-900">
                                  {selectedSubjects.filter(s => s.type === 'Core').length}
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-green-800">Elective Subjects</span>
                                <span className="text-sm font-bold text-green-900">
                                  {selectedSubjects.filter(s => s.type === 'Elective').length}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Semester Courses?
            </h2>
            <div className="flex justify-center space-x-1 mb-6">
              <div className="w-6 h-1 bg-violet-500 rounded-full"></div>
              <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-1 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Structured Learning</h3>
              <p className="text-gray-600">Well-organized semester structure with clear progression and learning objectives.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Faculty</h3>
              <p className="text-gray-600">Learn from experienced professors and industry professionals.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaLaptop className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Resources</h3>
              <p className="text-gray-600">Access to latest technology, labs, and learning materials.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaAward className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Recognition</h3>
              <p className="text-gray-600">Courses designed to meet industry standards and requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
