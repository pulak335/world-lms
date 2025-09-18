import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Header state
  isCategoriesDropdownOpen: false,
  
  // Courses page state
  coursesViewMode: 'grid', // 'grid' or 'list'
  
  // Filter sidebar state
  expandedFilters: {
    categories: true,
    level: true,
    price: true,
    rating: false,
    duration: false,
    language: false,
    quick: false
  },
  
  // Loading states
  loading: {
    courses: false,
    auth: false,
    cart: false
  },
  
  // Notifications
  notifications: [],
  
  // Modal states
  modals: {
    login: false,
    register: false,
    courseDetails: false,
    checkout: false
  },
  
  // Theme
  theme: 'light', // 'light' or 'dark'
  
  // Mobile menu
  isMobileMenuOpen: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Header actions
    toggleCategoriesDropdown: (state) => {
      state.isCategoriesDropdownOpen = !state.isCategoriesDropdownOpen;
    },
    closeCategoriesDropdown: (state) => {
      state.isCategoriesDropdownOpen = false;
    },
    
    // Courses page actions
    setCoursesViewMode: (state, action) => {
      state.coursesViewMode = action.payload;
    },
    
    // Filter sidebar actions
    toggleFilter: (state, action) => {
      const filterName = action.payload;
      state.expandedFilters[filterName] = !state.expandedFilters[filterName];
    },
    expandFilter: (state, action) => {
      const filterName = action.payload;
      state.expandedFilters[filterName] = true;
    },
    collapseFilter: (state, action) => {
      const filterName = action.payload;
      state.expandedFilters[filterName] = false;
    },
    expandAllFilters: (state) => {
      Object.keys(state.expandedFilters).forEach(key => {
        state.expandedFilters[key] = true;
      });
    },
    collapseAllFilters: (state) => {
      Object.keys(state.expandedFilters).forEach(key => {
        state.expandedFilters[key] = false;
      });
    },
    
    // Loading states
    setLoading: (state, action) => {
      const { key, value } = action.payload;
      state.loading[key] = value;
    },
    
    // Notifications
    addNotification: (state, action) => {
      const notification = {
        id: Date.now(),
        type: 'info', // 'success', 'error', 'warning', 'info'
        message: '',
        duration: 5000,
        ...action.payload
      };
      state.notifications.push(notification);
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      );
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
    
    // Modal actions
    openModal: (state, action) => {
      const modalName = action.payload;
      state.modals[modalName] = true;
    },
    closeModal: (state, action) => {
      const modalName = action.payload;
      state.modals[modalName] = false;
    },
    closeAllModals: (state) => {
      Object.keys(state.modals).forEach(key => {
        state.modals[key] = false;
      });
    },
    
    // Theme actions
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    
    // Mobile menu actions
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    openMobileMenu: (state) => {
      state.isMobileMenuOpen = true;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    
    // Reset UI state
    resetUI: (state) => {
      return { ...initialState };
    }
  }
});

export const {
  // Header actions
  toggleCategoriesDropdown,
  closeCategoriesDropdown,
  
  // Courses page actions
  setCoursesViewMode,
  
  // Filter sidebar actions
  toggleFilter,
  expandFilter,
  collapseFilter,
  expandAllFilters,
  collapseAllFilters,
  
  // Loading states
  setLoading,
  
  // Notifications
  addNotification,
  removeNotification,
  clearNotifications,
  
  // Modal actions
  openModal,
  closeModal,
  closeAllModals,
  
  // Theme actions
  setTheme,
  toggleTheme,
  
  // Mobile menu actions
  toggleMobileMenu,
  openMobileMenu,
  closeMobileMenu,
  
  // Reset UI state
  resetUI
} = uiSlice.actions;

// Selectors
export const selectIsCategoriesDropdownOpen = (state) => state.ui.isCategoriesDropdownOpen;
export const selectCoursesViewMode = (state) => state.ui.coursesViewMode;
export const selectExpandedFilters = (state) => state.ui.expandedFilters;
export const selectLoading = (state) => state.ui.loading;
export const selectNotifications = (state) => state.ui.notifications;
export const selectModals = (state) => state.ui.modals;
export const selectTheme = (state) => state.ui.theme;
export const selectIsMobileMenuOpen = (state) => state.ui.isMobileMenuOpen;

export default uiSlice.reducer;
