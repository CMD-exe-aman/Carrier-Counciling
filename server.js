// src/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import bookingRoutes from "./src/routes/bookingRoutes.js";
import { notFound, errorHandler } from "./src/middleware/errorMiddleware.js";



// Load environment variables
dotenv.config();

// Connect to DB
connectDB();

const app = express();

// --- CORS setup ---
const allowedOrigin = process.env.FRONTEND_URL || "*";

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);

// --- Form & JSON body parsers (form handling) ---
app.use(express.json()); // for JSON
app.use(express.urlencoded({ extended: true })); // for HTML form data

// --- Routes ---
app.get("/", (req, res) => {
  res.send("CareerCounsel backend is running");
});

app.use("/api/bookings", bookingRoutes);


app.use("/api/contact", contactRoutes);


// --- Error handlers ---
app.use(notFound);
app.use(errorHandler);

// --- Start server ---
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
