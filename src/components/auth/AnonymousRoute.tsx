import { Navigate } from 'react-router';
import { useAuth } from '../../stores/auth';

const AnonymousRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();
    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default AnonymousRoute;