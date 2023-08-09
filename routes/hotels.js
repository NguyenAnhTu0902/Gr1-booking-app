import express from 'express';
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
  getHotelRooms,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Create
// router.post('/', verifyAdmin, createHotel);
router.post('/', createHotel);

// Update
// router.put('/:id', verifyAdmin, updateHotel);
router.post('/', createHotel);

// Delete
// router.delete('/:id', verifyAdmin, deleteHotel);
router.delete('/:id', deleteHotel);

// Get
router.get('/:id', getHotel);

// Get all
router.get('/', getHotels);
router.get('/count/byCity', countByCity);
router.get('/count/byType', countByType);
router.get('/room/:hotelId', getHotelRooms);

export default router;