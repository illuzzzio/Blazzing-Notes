import express from "express";
import nRoutes from "./routes/nRoutes.js"
const app = express();

app.use("/api/notes", nRoutes); // this endpoint is used by router used in nRoutes.js file 

// app.get("/api/notes",(req,res)=>{
//   res.status(200).send("Get request working perfectly");
// })

// app.delete("/api/notes", (req,res)=>{
//   res.status(200).send("Delete request is working totally fine");
// })


// app.post("/api/notes", (req,res)=>{
//   res.status(200).send("Post request is also workign perfectly fine");
// })

// app.put("/api/notes", (req,res)=>{
//   res.status(200).send("Put method is workign perfectly fine")
// })

app.listen(5001,()=>{
  console.log("The server has been created successfully");
})  // this is how we start the server in the express