import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching courses
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (filters = {}, { rejectWithValue }) => {
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      // Return mock data for development
      const mockCourses = [
        {
          id: 1,
          title: 'Complete Web Development Bootcamp',
          instructor: 'Sarah Johnson',
          price: 99.99,
          currency: '$',
          lessons: 45,
          rating: 4.8,
          reviews: 1247,
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Programming & Development',
          subcategory: 'Web Development',
          level: 'Beginner',
          isFree: false
        },
        {
          id: 2,
          title: 'Machine Learning Fundamentals',
          instructor: 'Dr. Michael Chen',
          price: 149.99,
          currency: '$',
          lessons: 32,
          rating: 4.9,
          reviews: 892,
          image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Data Science & AI',
          subcategory: 'Machine Learning',
          level: 'Intermediate',
          isFree: false
        },
        {
          id: 3,
          title: 'Digital Marketing Mastery',
          instructor: 'Emily Rodriguez',
          price: 0,
          currency: '$',
          lessons: 28,
          rating: 4.7,
          reviews: 634,
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Business & Management',
          subcategory: 'Digital Marketing',
          level: 'Beginner',
          isFree: true
        },
        {
          id: 4,
          title: 'UI/UX Design Principles',
          instructor: 'Alex Thompson',
          price: 79.99,
          currency: '$',
          lessons: 24,
          rating: 4.6,
          reviews: 456,
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Design & Creative',
          subcategory: 'UI/UX Design',
          level: 'Beginner',
          isFree: false
        },
        {
          id: 5,
          title: 'Fitness & Nutrition Basics',
          instructor: 'Jessica Martinez',
          price: 0,
          currency: '$',
          lessons: 18,
          rating: 4.5,
          reviews: 321,
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Health & Wellness',
          subcategory: 'Fitness & Nutrition',
          level: 'Beginner',
          isFree: true
        },
        {
          id: 6,
          title: 'Mobile App Development',
          instructor: 'Ryan Kim',
          price: 119.99,
          currency: '$',
          lessons: 42,
          rating: 4.7,
          reviews: 789,
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Programming & Development',
          subcategory: 'Mobile Development',
          level: 'Intermediate',
          isFree: false
        },
        {
          id: 7,
          title: 'Cybersecurity Fundamentals',
          instructor: 'Lisa Anderson',
          price: 129.99,
          currency: '$',
          lessons: 30,
          rating: 4.9,
          reviews: 445,
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Technology & IT',
          subcategory: 'Cybersecurity',
          level: 'Beginner',
          isFree: false
        },
        {
          id: 8,
          title: 'Photography Masterclass',
          instructor: 'Mark Davis',
          price: 0,
          currency: '$',
          lessons: 22,
          rating: 4.6,
          reviews: 298,
          image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Design & Creative',
          subcategory: 'Photography',
          level: 'Beginner',
          isFree: true
        },
        {
          id: 9,
          title: 'Data Analysis with Python',
          instructor: 'Dr. Anna Lee',
          price: 109.99,
          currency: '$',
          lessons: 38,
          rating: 4.8,
          reviews: 623,
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Data Science & AI',
          subcategory: 'Data Analysis',
          level: 'Intermediate',
          isFree: false
        },
        {
          id: 10,
          title: 'Project Management Essentials',
          instructor: 'Tom Brown',
          price: 69.99,
          currency: '$',
          lessons: 26,
          rating: 4.5,
          reviews: 412,
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Business & Management',
          subcategory: 'Project Management',
          level: 'Beginner',
          isFree: false
        },
        {
          id: 11,
          title: 'Spanish Language Course',
          instructor: 'Maria Garcia',
          price: 0,
          currency: '$',
          lessons: 40,
          rating: 4.7,
          reviews: 356,
          image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Academic Subjects',
          subcategory: 'Languages',
          level: 'Beginner',
          isFree: true
        },
        {
          id: 12,
          title: 'Game Development with Unity',
          instructor: 'Chris Taylor',
          price: 139.99,
          currency: '$',
          lessons: 48,
          rating: 4.8,
          reviews: 567,
          image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Programming & Development',
          subcategory: 'Game Development',
          level: 'Intermediate',
          isFree: false
        },
        {
          id: 13,
          title: 'Yoga & Meditation',
          instructor: 'Priya Sharma',
          price: 0,
          currency: '$',
          lessons: 20,
          rating: 4.6,
          reviews: 234,
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Health & Wellness',
          subcategory: 'Yoga & Meditation',
          level: 'Beginner',
          isFree: true
        },
        {
          id: 14,
          title: 'Cloud Computing Basics',
          instructor: 'James Wilson',
          price: 99.99,
          currency: '$',
          lessons: 34,
          rating: 4.7,
          reviews: 445,
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Data Science & AI',
          subcategory: 'Cloud Computing',
          level: 'Beginner',
          isFree: false
        },
        {
          id: 15,
          title: 'Graphic Design Fundamentals',
          instructor: 'Sophie Chen',
          price: 79.99,
          currency: '$',
          lessons: 28,
          rating: 4.5,
          reviews: 378,
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Design & Creative',
          subcategory: 'Graphic Design',
          level: 'Beginner',
          isFree: false
        },
        {
          id: 16,
          title: 'Cooking Essentials',
          instructor: 'Chef Marco',
          price: 0,
          currency: '$',
          lessons: 16,
          rating: 4.4,
          reviews: 189,
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Lifestyle & Hobbies',
          subcategory: 'Cooking & Culinary',
          level: 'Beginner',
          isFree: true
        },
        {
          id: 17,
          title: 'Network Administration',
          instructor: 'Robert Johnson',
          price: 119.99,
          currency: '$',
          lessons: 32,
          rating: 4.6,
          reviews: 267,
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Technology & IT',
          subcategory: 'Network Administration',
          level: 'Intermediate',
          isFree: false
        },
        {
          id: 18,
          title: 'Music Production Basics',
          instructor: 'DJ Alex',
          price: 89.99,
          currency: '$',
          lessons: 24,
          rating: 4.5,
          reviews: 156,
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Design & Creative',
          subcategory: 'Music Production',
          level: 'Beginner',
          isFree: false
        },
        {
          id: 19,
          title: 'Entrepreneurship 101',
          instructor: 'Jennifer Adams',
          price: 0,
          currency: '$',
          lessons: 30,
          rating: 4.7,
          reviews: 423,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Business & Management',
          subcategory: 'Entrepreneurship',
          level: 'Beginner',
          isFree: true
        },
        {
          id: 20,
          title: 'Advanced Mathematics',
          instructor: 'Prof. David Wilson',
          price: 89.99,
          currency: '$',
          lessons: 36,
          rating: 4.8,
          reviews: 567,
          image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Academic Subjects',
          subcategory: 'Mathematics',
          level: 'Advanced',
          isFree: false
        },
        {
          id: 21,
          title: 'Database Management',
          instructor: 'Kevin Park',
          price: 94.99,
          currency: '$',
          lessons: 35,
          rating: 4.6,
          reviews: 312,
          image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Programming & Development',
          subcategory: 'Database Management',
          level: 'Intermediate',
          isFree: false
        },
        {
          id: 22,
          title: 'French Language Course',
          instructor: 'Pierre Dubois',
          price: 0,
          currency: '$',
          lessons: 38,
          rating: 4.5,
          reviews: 289,
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Academic Subjects',
          subcategory: 'Languages',
          level: 'Beginner',
          isFree: true
        },
        {
          id: 23,
          title: 'Mental Health & Wellness',
          instructor: 'Dr. Sarah Williams',
          price: 0,
          currency: '$',
          lessons: 25,
          rating: 4.8,
          reviews: 445,
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Health & Wellness',
          subcategory: 'Mental Health',
          level: 'Beginner',
          isFree: true
        },
        {
          id: 24,
          title: 'System Administration',
          instructor: 'Mike Rodriguez',
          price: 124.99,
          currency: '$',
          lessons: 40,
          rating: 4.7,
          reviews: 398,
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Technology & IT',
          subcategory: 'System Administration',
          level: 'Advanced',
          isFree: false
        },
        {
          id: 25,
          title: 'Travel & Tourism',
          instructor: 'Emma Thompson',
          price: 0,
          currency: '$',
          lessons: 20,
          rating: 4.4,
          reviews: 167,
          image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          category: 'Lifestyle & Hobbies',
          subcategory: 'Travel & Tourism',
          level: 'Beginner',
          isFree: true
        }
      ];
      
      return mockCourses;
    }
  }
);

// Async thunk for fetching course details
export const fetchCourseDetails = createAsyncThunk(
  'courses/fetchCourseDetails',
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/courses/${courseId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch course details');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for enrolling in a course
export const enrollInCourse = createAsyncThunk(
  'courses/enrollInCourse',
  async ({ courseId, userId }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseId, userId }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to enroll in course');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  courses: [],
  currentCourse: null,
  enrolledCourses: [],
  loading: false,
  error: null,
  filters: {
    search: '',
    category: '',
    level: 'all',
    price: 'all',
    rating: 'all',
    duration: 'all',
    language: 'all',
    sortBy: 'newly-published'
  },
  pagination: {
    currentPage: 1,
    coursesPerPage: 12,
    totalPages: 0,
    totalCourses: 0
  }
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.pagination.currentPage = 1; // Reset to first page when filters change
    },
    setSearchQuery: (state, action) => {
      state.filters.search = action.payload;
      state.pagination.currentPage = 1;
    },
    setCategory: (state, action) => {
      state.filters.category = action.payload;
      state.pagination.currentPage = 1;
    },
    setLevel: (state, action) => {
      state.filters.level = action.payload;
      state.pagination.currentPage = 1;
    },
    setPrice: (state, action) => {
      state.filters.price = action.payload;
      state.pagination.currentPage = 1;
    },
    setRating: (state, action) => {
      state.filters.rating = action.payload;
      state.pagination.currentPage = 1;
    },
    setDuration: (state, action) => {
      state.filters.duration = action.payload;
      state.pagination.currentPage = 1;
    },
    setLanguage: (state, action) => {
      state.filters.language = action.payload;
      state.pagination.currentPage = 1;
    },
    setSortBy: (state, action) => {
      state.filters.sortBy = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        search: '',
        category: '',
        level: 'all',
        price: 'all',
        rating: 'all',
        duration: 'all',
        language: 'all',
        sortBy: 'newly-published'
      };
      state.pagination.currentPage = 1;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch courses
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
        state.pagination.totalCourses = action.payload.length;
        state.pagination.totalPages = Math.ceil(action.payload.length / state.pagination.coursesPerPage);
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch course details
      .addCase(fetchCourseDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourseDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCourse = action.payload;
      })
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Enroll in course
      .addCase(enrollInCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(enrollInCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.enrolledCourses.push(action.payload);
      })
      .addCase(enrollInCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const {
  setFilters,
  setSearchQuery,
  setCategory,
  setLevel,
  setPrice,
  setRating,
  setDuration,
  setLanguage,
  setSortBy,
  setCurrentPage,
  clearFilters,
  clearError
} = coursesSlice.actions;

// Selectors
export const selectCourses = (state) => state.courses.courses;
export const selectCurrentCourse = (state) => state.courses.currentCourse;
export const selectEnrolledCourses = (state) => state.courses.enrolledCourses;
export const selectCoursesLoading = (state) => state.courses.loading;
export const selectCoursesError = (state) => state.courses.error;
export const selectCoursesFilters = (state) => state.courses.filters;
export const selectCoursesPagination = (state) => state.courses.pagination;

export default coursesSlice.reducer;
