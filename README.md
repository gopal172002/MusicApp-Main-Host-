# Music App - Micro Frontend Architecture

This is a music application built using React and Micro Frontend Architecture. The application consists of two parts:
1. Main App (Host) - Contains the authentication and container logic
2. Music Library (Remote) - A micro frontend that handles the music library functionality

## Features

- Clean and modern UI for displaying music library
- Filter, sort, and group by features for Album, Artist, and Title
- Role-based authentication (admin/user)
- Micro Frontend Architecture using Module Federation
- Responsive design using Material-UI

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Running Locally

1. Clone both repositories:
```bash
# Main App (Host)
git clone <main-app-repo-url>
cd music-app-host

# Music Library (Remote)
git clone <music-library-repo-url>
cd music-library
```

2. Install dependencies for both applications:
```bash
# In both directories
npm install
```

3. Start both applications:
```bash
# Start Music Library (Remote) first
cd music-library
npm run dev

# In a new terminal, start Main App (Host)
cd music-app-host
npm run dev
```

The applications will be available at:
- Main App: http://localhost:5173
- Music Library: http://localhost:5001

## Demo Credentials

Two user roles are available for testing:

1. Admin User
   - Username: admin
   - Password: admin123
   - Can add and delete songs

2. Regular User
   - Username: user
   - Password: user123
   - Can only view and filter songs

## Architecture

### Micro Frontend Architecture

The application uses Module Federation to split the codebase into two parts:

1. Main App (Host)
   - Handles authentication and routing
   - Contains the container logic
   - Dynamically loads the Music Library micro frontend

2. Music Library (Remote)
   - Implements the music library functionality
   - Exposes components to the host application
   - Handles song management features

### Authentication

- Uses a simple in-memory JWT approach
- Tokens are stored in localStorage
- Role-based access control for different features

## Deployment

The application is deployed on Vercel:

1. Main App: [Main App URL]
2. Music Library: [Music Library URL]

### Deployment Process

1. Push changes to the main branch
2. Vercel automatically builds and deploys both applications
3. The main app is configured to load the music library from its deployment URL

## Technologies Used

- React 18
- TypeScript
- Vite
- Module Federation
- Material-UI
- React Router
- JWT for authentication
