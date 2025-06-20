import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
    id: string;
    username: string;
    role: 'admin' | 'user';
}

interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const MOCK_USERS: Record<string, { password: string; role: 'admin' | 'user' }> = {
    admin: { password: 'admin123', role: 'admin' },
    user: { password: 'user123', role: 'user' },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check for existing token on mount
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode<User>(token);
                setUser(decoded);
            } catch (error) {
                localStorage.removeItem('token');
            }
        }
    }, []);

    const login = (username: string, password: string) => {
        const mockUser = MOCK_USERS[username];

        if (mockUser && mockUser.password === password) {
            const userData: User = {
                id: Math.random().toString(),
                username,
                role: mockUser.role,
            };

            // Create a mock JWT token
            const token = btoa(JSON.stringify(userData));
            localStorage.setItem('token', token);
            setUser(userData);
        } else {
            throw new Error('Invalid credentials');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 