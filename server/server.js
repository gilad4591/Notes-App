require("dotenv").config();
const express  = require("express");
const mongoose = require("mongoose");
// const cors     = require("cors");
const path     = require("path");
const app      = express();

const PORT     = process.env.PORT || 4747;
const DB_URI   = "mongodb://localhost:27017/"
const DB       = "notesDB";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(DB_URI + DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    connectTimeoutMS: 10000
 });

 const db = mongoose.connection;

 db.once('open', () => console.log(`Connected to ${DB} database`));

 // Create Schema
let NotesSchema = new mongoose.Schema(
    {
       title: String,
       content: String
    },
    { collection: "notes" }
 );

 // Create Model
let NotesModel = db.model("NotesModel", NotesSchema);

// Route to get all notes

app.get("/api/notes", (req, res) => {
    NotesModel.find({}, {__v: 0}, (err, docs) => {
       if (!err) {
          res.json(docs);
       } else {
          res.status(400).json({"error": err});
       }
    });
 });
 
//  Route to get a specific note

app.get("/api/notes/:noteId", (req, res) => {
	  const noteId = req.params.noteId;
    NotesModel.findOne({_id: {noteId}}, {__v: 0}, (err, docs) => {
       if (!err) {
          res.json(docs);
       } else {
          res.status(400).json({"error": err});
       }
    });
 });
 app.delete("/api/notes/delete/:noteId", function(req, res) {
   const noteIdToDelete = req.body.noteId;
  NotesModel.findByIdAndDelete(noteIdToDelete, function(err,result){
     if(!err){
     }else{
        console.log(result);
     }
  });
});


 // Route to add a note
app.post("/api/notes/add", (req, res) => {
    let note = new NotesModel(req.body);
    
    note.save((err, result) => {
       if (!err) {
          delete result._doc.__v;
          res.json(result._doc);
       } else {
          res.status(400).json({"error": err});
       }
    });
 });

 //update note

 app.patch('/api/notes/:noteId', function(req, res){   
   console.log("erer");
   console.log(req.body);
   NotesModel.findByIdAndUpdate(req.body.noteId, req.body.note)
     .then(() => {
       res.json("Note updated.");
     })
     .catch(err => {
       res.status(422).send("Note update failed. Error: " + err);
     });
 });

//  app.post("/api/notes/update", (req, res) => {
//    let note = new NotesModel(req.body);
//    const noteId = req.body.noteId;
//    // const note = {title: req.body.note.title, content: req.body.note.content};
//    // console.log(req.body.note.title);  
    
//     NotesModel.findByIdAndUpdate(noteId, {note}, function(err,result){
//       if(!err){
//          console.log("Updated User : ", result);

//       }else{
//          console.log(err);
//       }
//    });
   
// });

//  app.post("/api/notes/update"), (req,res) => {
   // const noteIdToUpdate = req.body.noteId;
   // let note = new NotesModel(req.body);

   
  
//  }

 app.listen(PORT, () => {
    console.log(app.get("env").toUpperCase() + " Server started on port " + (PORT));
 });

