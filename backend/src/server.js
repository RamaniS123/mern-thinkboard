import express from "express"; 
import cors from "cors"; 
import dotenv from "dotenv"; 

import notesRoutes from "./routes/notesRoutes.js"; 
import { connectDB } from "./config/db.js"; 
import rateLimiter from "./middleware/rateLimiter.js"; 


dotenv.config(); 


//const express = required("express"); 

// Create an express app
const app = express(); 
const PORT = process.env.PORT || 5001

// middleware
app.use(cors({
  origin:"http://localhost:5173",
})); 

app.use(express.json()); // this middleware will parse JSON bodies: req.body
// checks for rate limiting 
app.use(rateLimiter); 

/*
SIMPLE custom middleware

app.use((req,res,next) => { 
  console.log(`Req method is ${req.method} & Req URL is ${req.url}`); 
  next(); 
})
*/
app.use("/api/notes", notesRoutes); 

// Call the connectDB function 
connectDB().then(() => { 
  // Listen for a port 
  app.listen(PORT, () => { 
  console.log("Server started on PORT:", PORT); 
  }); 
})


// password: 7nMTCgTYU7pffmjU

// connection string: mongodb+srv://ramanisatishkumar2005:7nMTCgTYU7pffmjU@cluster0.od1epdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0