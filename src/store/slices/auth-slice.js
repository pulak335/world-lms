import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Async thunks for API calls
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      // Replace with your actual API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
      
      if (!response.ok) {
        throw new Error('Login failed')
      }
      
      const data = await response.json()
      return data
    } catch (error) {
      // Return mock data for development
      const mockUser = {
        user: {
          id: 1,
          name: 'John Doe',
          email: credentials.email,
          avatar: '/api/placeholder/100/100',
          role: 'student',
          enrolledCourses: [],
          completedCourses: []
        },
        token: 'mock-jwt-token-' + Date.now()
      };
      return mockUser;
    }
  }
)

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      
      if (!response.ok) {
        throw new Error('Registration failed')
      }
      
      const data = await response.json()
      return data
    } catch (error) {
      // Return mock data for development
      const mockUser = {
        user: {
          id: Date.now(),
          name: userData.name,
          email: userData.email,
          avatar: '/api/placeholder/100/100',
          role: 'student',
          enrolledCourses: [],
          completedCourses: []
        },
        token: 'mock-jwt-token-' + Date.now()
      };
      return mockUser;
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
  isLoading: false,
  error: null,
  loginForm: {
    email: '',
    password: '',
    rememberMe: false
  },
  registerForm: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
      }
    },
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.isAuthenticated = false
      })
      
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.isAuthenticated = false
      })
      
      // Update Profile
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = { ...state.user, ...action.payload }
        state.error = null
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false
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
export const selectIsLoading = (state) => state.auth.isLoading
export const selectError = (state) => state.auth.error
export const selectLoginForm = (state) => state.auth.loginForm
export const selectRegisterForm = (state) => state.auth.registerForm

export default authSlice.reducer
