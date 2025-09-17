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
          title: 'FGHF',
          instructor: 'John Doe',
          price: 645.00,
          currency: 'CFA',
          lessons: 0,
          rating: 0.0,
          reviews: 0,
          image: '/api/placeholder/300/200',
          category: 'Development',
          subcategory: 'Mobile Development',
          level: 'Beginner',
          isFree: false
        },
        {
          id: 2,
          title: 'test',
          instructor: 'John Doe',
          price: 0,
          currency: 'CFA',
          lessons: 0,
          rating: 0.0,
          reviews: 0,
          image: '/api/placeholder/300/200',
          category: 'Business',
          subcategory: 'Management',
          level: 'Intermediate',
          isFree: true
        },
        {
          id: 3,
          title: 'Title',
          instructor: 'John Doe',
          price: 0,
          currency: 'CFA',
          lessons: 0,
          rating: 0.0,
          reviews: 0,
          image: '/api/placeholder/300/200',
          category: 'Health & Fitness',
          subcategory: 'Nutrition & Diet',
          level: 'Beginner',
          isFree: true
        },
        {
          id: 4,
          title: 'SRTFGHFGH',
          instructor: 'John Doe',
          price: 8.00,
          currency: 'CFA',
          lessons: 0,
          rating: 0.0,
          reviews: 0,
          image: '/api/placeholder/300/200',
          category: 'Academics',
          subcategory: 'Math',
          level: 'Advanced',
          isFree: false
        },
        {
          id: 5,
          title: 'tEst',
          instructor: 'John Doe',
          price: 0,
          currency: 'CFA',
          lessons: 0,
          rating: 0.0,
          reviews: 0,
          image: '/api/placeholder/300/200',
          category: 'Lifestyle',
          subcategory: 'Beauty & Makeup',
          level: 'Beginner',
          isFree: true
        },
        {
          id: 6,
          title: 'Test',
          instructor: 'V Kumar',
          price: 0,
          currency: 'CFA',
          lessons: 0,
          rating: 0.0,
          reviews: 0,
          image: '/api/placeholder/300/200',
          category: 'Academics',
          subcategory: 'Science',
          level: 'Intermediate',
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
    sortBy: 'newly-published'
  },
  pagination: {
    currentPage: 1,
    coursesPerPage: 20,
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
