import express from "express";
import {getAllNotes} from "../controllers/notesController.js" // this is how we import fucntion
import {createNote} from "../controllers/notesController.js";
import {updateNotes} from "../controllers/notesController.js";
import {delAllNotes} from "../controllers/notesController.js"
// we use .. if we are calling from the differnt directory 
const router = express.Router();

// router.get("/", getAllNotes); // reffer the notesController.js file 

// router.delete("/:id", (req,res)=>{
//   res.status(200).send("Delete request is working totally fine ");
// })
// // in place of /:id use any number while testing the http methods 

// router.post("/", (req,res)=>{
//   res.status(200).send("Post request is also workign perfectly fine");
// })

// router.put("/", (req,res)=>{
//   res.status(200).send("Put method is workign perfectly fine")
// })


router.get("/",getAllNotes);
router.post("/",createNote);
router.delete("/",delAllNotes);
router.put("/",updateNotes);
// All these function inside the http methods are functions listed in the controllers/notesController.js , we are exporting them and import them in this nRoutes.js file 

export default router ;

