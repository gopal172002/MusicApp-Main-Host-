import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { Box, CircularProgress } from '@mui/material';
import Header from './components/Header';

// Lazy load the Dashboard component
const Dashboard = lazy(() => import('./components/Dashboard'));

// Lazy load the Login component
const Login = lazy(() => import('./components/Login'));

const App = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            {isAuthenticated && <Header />}

            <Suspense fallback={
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}>
                    <CircularProgress />
                </Box>
            }>
                <Routes>
                    <Route
                        path="/login"
                        element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/"
                        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
                    />
                </Routes>
            </Suspense>
        </Box>
    );
};

export default App; 