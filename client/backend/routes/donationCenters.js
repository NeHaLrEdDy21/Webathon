
const express = require('express');
const router = express.Router();
const DonationCenter = require('../models/DonationCenter');

/**
 * @route   GET /api/donation-centers
 * @desc    Get all donation centers
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const centers = await DonationCenter.find().sort({ createdAt: -1 });
    res.json(centers);
  } catch (err) {
    console.error('Error fetching donation centers:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   GET /api/donation-centers/nearby
 * @desc    Get donation centers near a location
 * @access  Public
 */
router.get('/nearby', async (req, res) => {
  try {
    const { lat, lng, maxDistance = 10000 } = req.query; // maxDistance in meters, default 10km
    
    if (!lat || !lng) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }
    
    const centers = await DonationCenter.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          $maxDistance: parseInt(maxDistance)
        }
      }
    });
    
    // Calculate distance for each center
    const centersWithDistance = centers.map(center => {
      const centerObj = center.toObject();
      // Calculate distance in km (rough approximation)
      const distance = calculateDistance(
        parseFloat(lat), 
        parseFloat(lng),
        center.location.coordinates[1],
        center.location.coordinates[0]
      );
      
      return {
        ...centerObj,
        distance: `${distance.toFixed(1)} miles`
      };
    });
    
    res.json(centersWithDistance);
  } catch (err) {
    console.error('Error fetching nearby donation centers:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   GET /api/donation-centers/:id
 * @desc    Get donation center by ID
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    const center = await DonationCenter.findById(req.params.id);
    
    if (!center) {
      return res.status(404).json({ message: 'Donation center not found' });
    }
    
    res.json(center);
  } catch (err) {
    console.error('Error fetching donation center:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * Helper function to calculate distance between two coordinates
 * Using Haversine formula
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3958.8; // Earth radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  
  return d; // Distance in miles
}

function toRad(degrees) {
  return degrees * Math.PI / 180;
}

module.exports = router;
