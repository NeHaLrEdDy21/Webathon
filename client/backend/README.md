
# Blood Donation Center API

This is the backend API for the Blood Donation Center application, built with:
- Node.js
- Express
- MongoDB
- Mongoose

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (locally installed or MongoDB Atlas account)

## Getting Started

1. Install dependencies:
```bash
cd backend
npm install
```

2. Set up environment variables:
Copy the `.env.example` file to `.env` and update the values as needed:
```bash
cp .env.example .env
```

3. Seed the database:
```bash
npm run seed
```

4. Start the development server:
```bash
npm run dev
```

The server should now be running at http://localhost:5000

## API Endpoints

### Donation Centers
- `GET /api/donation-centers` - Get all donation centers
- `GET /api/donation-centers/:id` - Get donation center by ID
- `GET /api/donation-centers/nearby` - Get donation centers near a location
  - Query params: lat, lng, maxDistance (in meters, optional)

### Health Check
- `GET /health` - Check if the server is running

## Database Schema

### Donation Center
- `name`: String (required)
- `address`: String (required)
- `phone`: String (required)
- `hours`: String (required)
- `location`: GeoJSON Point
- `availability`: String (High, Medium, Low)
- `availabilityColor`: String (For UI display)
- `timestamps`: Created and updated timestamps

## Connecting with Frontend

The frontend expects the API to be available at http://localhost:5000 for development. 
In production, update the API_BASE_URL in the frontend code.
