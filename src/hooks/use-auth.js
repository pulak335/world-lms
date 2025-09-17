import { useSelector, useDispatch } from 'react-redux'
import { loginUser, logout, clearError } from '../store/slices/auth-slice'

export const useAuth = () => {
  const dispatch = useDispatch()
  const { user, token, isAuthenticated, isLoading, error } = useSelector(
    (state) => state.auth
  )

  const login = (credentials) => {
    dispatch(loginUser(credentials))
  }

  const logoutUser = () => {
    dispatch(logout())
  }

  const clearAuthError = () => {
    dispatch(clearError())
  }

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout: logoutUser,
    clearError: clearAuthError,
  }
}
