import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Alert,
    Divider,
    Paper,
    Grid
} from '@mui/material';
import {
    MusicNote as MusicIcon,
    AdminPanelSettings as AdminIcon,
    Person as UserIcon
} from '@mui/icons-material';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(username, password);
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                p: 2
            }}
        >
            <Card sx={{ maxWidth: 500, width: '100%', mx: 2 }}>
                <CardContent sx={{ p: 4 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                        <Box
                            component="svg"
                            viewBox="0 0 24 24"
                            sx={{
                                width: 60,
                                height: 60,
                                fill: '#1DB954',
                                mb: 2
                            }}
                        >
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </Box>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#1DB954' }}>
                            Music App
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Sign in to access your music library
                        </Typography>
                    </Box>

                    {error && (
                        <Alert severity="error" sx={{ mb: 3 }}>
                            {error}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            margin="normal"
                            required
                            autoFocus
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            required
                        />
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                                mt: 3,
                                mb: 3,
                                bgcolor: '#1DB954',
                                '&:hover': {
                                    bgcolor: '#1ed760'
                                }
                            }}
                        >
                            Sign In
                        </Button>
                    </form>

                    <Divider sx={{ my: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            Demo Credentials
                        </Typography>
                    </Divider>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 2, bgcolor: 'rgba(29, 185, 84, 0.1)' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <AdminIcon sx={{ color: '#1DB954', mr: 1 }} />
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        Admin
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    Full access to all features
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                    Username: admin
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                    Password: admin123
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 2, bgcolor: 'rgba(0, 0, 0, 0.04)' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <UserIcon sx={{ color: 'text.secondary', mr: 1 }} />
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        User
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    View and filter songs only
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                    Username: user
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                    Password: user123
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                            This is a demo application showcasing Micro Frontend Architecture
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Login; 