import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import usersData from '../../data/users.json'

// Async thunks for API calls
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const { email, password, role } = credentials;
      
      // Find user in JSON data
      let user = null;
      if (role === 'student') {
        user = usersData.students.find(u => u.email === email && u.password === password);
      } else if (role === 'instructor') {
        user = usersData.instructors.find(u => u.email === email && u.password === password);
      }
      
      if (user) {
        // Remove password from user object before returning
        const { password: _, ...userWithoutPassword } = user;
        return {
          success: true,
          user: userWithoutPassword,
          token: `mock-jwt-token-${role}-${Date.now()}`
        };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const { firstName, lastName, email, phone, password, role } = userData;
      
      // Check if user already exists
      const existingUser = role === 'student' 
        ? usersData.students.find(u => u.email === email)
        : usersData.instructors.find(u => u.email === email);
      
      if (existingUser) {
        throw new Error('User already exists with this email');
      }
      
      // Create new user
      const newUser = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        phone,
        role,
        avatar: '/api/placeholder/100/100',
        createdAt: new Date().toISOString(),
        ...(role === 'student' ? {
          enrolledCourses: [],
          completedCourses: [],
          profile: {
            bio: '',
            interests: [],
            location: '',
            website: ''
          },
          stats: {
            totalCourses: 0,
            completedCourses: 0,
            avgQuizScore: 0,
            totalStudyHours: 0
          }
        } : {
          courses: [],
          students: 0,
          rating: 0,
          profile: {
            bio: '',
            specialization: '',
            location: '',
            website: '',
            linkedin: '',
            github: ''
          },
          stats: {
            totalCourses: 0,
            totalStudents: 0,
            avgRating: 0,
            totalRevenue: 0
          },
          qualifications: []
        })
      };
      
      return {
        success: true,
        user: newUser,
        token: `mock-jwt-token-${role}-${Date.now()}`
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      })
      
      if (!response.ok) {
        throw new Error('Profile update failed')
      }
      
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  userRole: null, // 'student' or 'instructor'
  loginForm: {
    email: '',
    password: '',
    rememberMe: false
  },
  registerForm: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    agreeToTerms: false
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      state.userRole = null
      state.error = null
    },
    clearError: (state) => {
      state.error = null
    },
    updateLoginForm: (state, action) => {
      state.loginForm = { ...state.loginForm, ...action.payload }
    },
    updateRegisterForm: (state, action) => {
      state.registerForm = { ...state.registerForm, ...action.payload }
    },
    resetLoginForm: (state) => {
      state.loginForm = {
        email: '',
        password: '',
        rememberMe: false
      }
    },
    resetRegisterForm: (state) => {
      state.registerForm = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: 'student',
        agreeToTerms: false
      }
    },
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.userRole = action.payload.role
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.userRole = action.payload.user.role
        state.error = null
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
        state.userRole = null
      })
      
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.userRole = action.payload.user.role
        state.error = null
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
        state.userRole = null
      })
      
      // Update Profile
      .addCase(updateProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false
        state.user = { ...state.user, ...action.payload }
        state.error = null
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { 
  logout, 
  clearError, 
  updateLoginForm, 
  updateRegisterForm, 
  resetLoginForm, 
  resetRegisterForm, 
  setUser 
} = authSlice.actions

// Selectors
export const selectUser = (state) => state.auth.user
export const selectToken = (state) => state.auth.token
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectLoading = (state) => state.auth.loading
export const selectError = (state) => state.auth.error
export const selectUserRole = (state) => state.auth.userRole
export const selectLoginForm = (state) => state.auth.loginForm
export const selectRegisterForm = (state) => state.auth.registerForm

export default authSlice.reducer
