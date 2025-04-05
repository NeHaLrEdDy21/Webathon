
const mongoose = require('mongoose');

const donationCenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  hours: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], 
      default: [0, 0]
    }
  },
  availability: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium'
  },
  availabilityColor: {
    type: String,
    default: 'text-yellow-600'
  }
}, { timestamps: true });

// Add geospatial index to support location-based queries
donationCenterSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('DonationCenter', donationCenterSchema);
