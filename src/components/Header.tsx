import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Chip,
    Avatar,
    IconButton,
    Tooltip
} from '@mui/material';
import {
    Logout as LogoutIcon,
    Person as PersonIcon,
    AdminPanelSettings as AdminIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
    const { user, logout, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return null;
    }

    return (
        <AppBar position="static" sx={{ bgcolor: '#1DB954' }}>
            <Toolbar>
                <Box
                    component="svg"
                    viewBox="0 0 24 24"
                    sx={{
                        width: 32,
                        height: 32,
                        fill: 'white',
                        mr: 2
                    }}
                >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </Box>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                    Music App
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar sx={{ width: 32, height: 32, bgcolor: 'rgba(255,255,255,0.2)' }}>
                            <PersonIcon />
                        </Avatar>
                        <Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                {user?.username}
                            </Typography>
                            <Chip
                                icon={user?.role === 'admin' ? <AdminIcon /> : <PersonIcon />}
                                label={user?.role}
                                size="small"
                                sx={{
                                    bgcolor: user?.role === 'admin' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    fontSize: '0.7rem',
                                    height: 20
                                }}
                            />
                        </Box>
                    </Box>

                    <Tooltip title="Logout">
                        <IconButton
                            color="inherit"
                            onClick={logout}
                            sx={{ color: 'white' }}
                        >
                            <LogoutIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header; 