import React from 'react';
import { Suspense, lazy } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Box, CircularProgress, Alert, Paper, Typography } from '@mui/material';
import { MusicNote as MusicIcon } from '@mui/icons-material';

// Lazy load the MusicLibrary component with error handling
const MusicLibrary = lazy(() =>
    import('musicLibrary/MusicLibrary').catch(() => {
        console.error('Failed to load MusicLibrary component');
        return { default: () => <div>Failed to load Music Library</div> };
    })
);

const Dashboard: React.FC = () => {
    const { user } = useAuth();

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <Suspense fallback={
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    gap: 2
                }}>
                    <CircularProgress size={60} />
                    <Typography variant="h6" color="text.secondary">
                        Loading Music Library...
                    </Typography>
                </Box>
            }>
                <Box sx={{ p: 2 }}>
                    {user?.role === 'admin' && (
                        <Alert
                            severity="info"
                            sx={{ mb: 2 }}
                            icon={<MusicIcon />}
                        >
                            <Typography variant="body2">
                                <strong>Admin Mode:</strong> You can add and delete songs.
                                Use the floating action button to add new songs.
                            </Typography>
                        </Alert>
                    )}

                    {user?.role === 'user' && (
                        <Alert
                            severity="success"
                            sx={{ mb: 2 }}
                            icon={<MusicIcon />}
                        >
                            <Typography variant="body2">
                                <strong>User Mode:</strong> You can view, filter, sort, and group songs.
                                All music library features are available for browsing.
                            </Typography>
                        </Alert>
                    )}

                    <Paper sx={{ p: 1, mb: 2, bgcolor: 'rgba(29, 185, 84, 0.1)' }}>
                        <Typography variant="body2" color="text.secondary" align="center">
                            🎵 Welcome to the Music Library! Use the filters above to explore your music collection.
                        </Typography>
                    </Paper>
                </Box>

                <MusicLibrary isAdmin={user?.role === 'admin'} />
            </Suspense>
        </Box>
    );
};

export default Dashboard; 