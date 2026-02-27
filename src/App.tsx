import { Route, Routes } from 'react-router';
import './App.css';
import { AuthSync } from './components/auth/AuthSync';
import ProtectedRoute from './components/auth/ProtectedRoute';
import RootLayout from './layouts/RootLayout';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotfoundPage';
import { AuthProvider } from './stores/auth';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <AuthProvider>
      <Toaster/>
      <AuthSync />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<ProtectedRoute><RootLayout /></ProtectedRoute>}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App;
