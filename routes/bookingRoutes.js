// src/routes/bookingRoutes.js
import express from "express";
import { createBooking, getAllBookings } from "../controllers/bookingController.js";

const router = express.Router();

// form submit from /book page
router.post("/", createBooking);

// list all bookings for admin dashboard
router.get("/", getAllBookings);

export default router;
