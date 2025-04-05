
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const DonationCenter = require('./models/DonationCenter');

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blooddonation';

// Sample donation centers data
const donationCenters = [
  {
    name: "Central Blood Bank",
    address: "123 Main Street, San Francisco, CA 94158",
    phone: "(415) 555-1234",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-3pm",
    location: {
      type: "Point",
      coordinates: [-122.3929, 37.7749] // longitude, latitude for San Francisco
    },
    availability: "High",
    availabilityColor: "text-green-600"
  },
  {
    name: "City Medical Center",
    address: "456 Market Street, San Francisco, CA 94103",
    phone: "(415) 555-5678",
    hours: "Mon-Sun: 7am-7pm",
    location: {
      type: "Point",
      coordinates: [-122.4004, 37.7915]
    },
    availability: "Medium",
    availabilityColor: "text-yellow-600"
  },
  {
    name: "Community Blood Center",
    address: "789 Mission Street, San Francisco, CA 94105",
    phone: "(415) 555-9012",
    hours: "Mon-Fri: 9am-5pm",
    location: {
      type: "Point",
      coordinates: [-122.4194, 37.7749]
    },
    availability: "Low",
    availabilityColor: "text-red-600"
  },
  {
    name: "University Hospital",
    address: "321 University Avenue, Palo Alto, CA 94301",
    phone: "(650) 555-3456",
    hours: "Mon-Sun: 8am-8pm",
    location: {
      type: "Point",
      coordinates: [-122.1430, 37.4419] // Palo Alto
    },
    availability: "High",
    availabilityColor: "text-green-600"
  },
  {
    name: "East Bay Donation Center",
    address: "555 Broadway, Oakland, CA 94607",
    phone: "(510) 555-7890",
    hours: "Tue-Sat: 9am-5pm",
    location: {
      type: "Point",
      coordinates: [-122.2711, 37.8044] // Oakland
    },
    availability: "Medium",
    availabilityColor: "text-yellow-600"
  }
];

// Connect to MongoDB and seed data
async function seedData() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await DonationCenter.deleteMany({});
    console.log('Cleared existing donation centers');
    
    // Insert new data
    const result = await DonationCenter.insertMany(donationCenters);
    console.log(`Successfully seeded ${result.length} donation centers`);
    
    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
}

// Run the seed function
seedData();
