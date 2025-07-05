import mongoose from "mongoose"; 

// 1- create a schema 
// 2- model based off of that schema 

// Schema 
const noteSchema = new mongoose.Schema({ 
  title: { 
    type:String, 
    required: true,
  },
  content: { 
    type:String, 
    required: true,
  }, 
 }, 
 {timestamps: true} // createdAt, updatedAt
); 

// create a note model based on the schema
const Note = mongoose.model("Note", noteSchema)

export default Note