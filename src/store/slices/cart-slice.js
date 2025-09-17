import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
  isOpen: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const course = action.payload;
      const existingItem = state.items.find(item => item.id === course.id);
      
      if (existingItem) {
        // Course already in cart, don't add duplicate
        return;
      }
      
      state.items.push({
        id: course.id,
        title: course.title,
        instructor: course.instructor,
        price: course.price,
        currency: course.currency,
        image: course.image,
        isFree: course.isFree
      });
      
      // Recalculate totals
      state.itemCount = state.items.length;
      state.total = state.items.reduce((sum, item) => sum + item.price, 0);
    },
    
    removeFromCart: (state, action) => {
      const courseId = action.payload;
      state.items = state.items.filter(item => item.id !== courseId);
      
      // Recalculate totals
      state.itemCount = state.items.length;
      state.total = state.items.reduce((sum, item) => sum + item.price, 0);
    },
    
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
    
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    
    openCart: (state) => {
      state.isOpen = true;
    },
    
    closeCart: (state) => {
      state.isOpen = false;
    },
    
    updateCartItemQuantity: (state, action) => {
      const { courseId, quantity } = action.payload;
      const item = state.items.find(item => item.id === courseId);
      
      if (item && quantity > 0) {
        // For courses, we typically don't allow quantity > 1
        // But keeping this for potential future use
        item.quantity = quantity;
        
        // Recalculate totals
        state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
  updateCartItemQuantity
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartItemCount = (state) => state.cart.itemCount;
export const selectIsCartOpen = (state) => state.cart.isOpen;
export const selectIsInCart = (courseId) => (state) => 
  state.cart.items.some(item => item.id === courseId);

export default cartSlice.reducer;
