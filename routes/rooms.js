import express from 'express';
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from '../controllers/room.js';

const router = express.Router();

// Create
router.post('/:hotelId', createRoom);

// Update
router.put('/:id', updateRoom);

// Delete
router.delete('/:id/:hotelId', deleteRoom);

// Get
router.get('/:id', getRoom);

// Get all
router.get('/', getRooms);

export default router;