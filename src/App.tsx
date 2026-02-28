import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import AnonymousRoute from './components/auth/AnonymousRoute';
import { AuthSync } from './components/auth/AuthSync';
import ProtectedRoute from './components/auth/ProtectedRoute';
import RootLayout from './layouts/RootLayout';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotfoundPage';
import { AuthProvider } from './stores/auth';
import { DashboardProvider } from './stores/dashboard';

function App() {
  return (
    <AuthProvider>
      <DashboardProvider>
        <Toaster />
        <AuthSync />
        <Routes>
          <Route path='/' element={<Navigate to="/login" replace />} />
          <Route path='/login' element={
            <AnonymousRoute>
              <LoginPage />
            </AnonymousRoute>
          } />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <RootLayout />
            </ProtectedRoute>
          } >
            <Route index element={<DashboardPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </DashboardProvider>
    </AuthProvider>
  )
}

export default App;