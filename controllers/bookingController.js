// src/controllers/bookingController.js
import Booking from "../models/Booking.js";

// POST /api/bookings
export const createBooking = async (req, res, next) => {
  try {
    const { name, email, phone, grade, preferredCareer, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Name, email and phone are required" });
    }

    const booking = await Booking.create({
      name,
      email,
      phone,
      grade,
      preferredCareer,
      message,
    });

    res.status(201).json({
      success: true,
      data: booking,
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/bookings (for AdminDashboard)
export const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: bookings,
    });
  } catch (err) {
    next(err);
  }
};
