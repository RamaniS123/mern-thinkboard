import express from "express"
import {
  getAllNotes,
  getNoteById, 
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";


const router = express.Router(); 

// get route
router.get("/", getAllNotes); 
// get a specific note route
router.get("/:id", getNoteById); 
// post route
router.post("/", createNote)
// update router
router.put("/:id", updateNote);
// delete router 
router.delete("/:id", deleteNote);


export default router; 

