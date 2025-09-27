export function getAllNotes (req,res){
  res.status(200).send("Get request working perfectly");
}
export async function createNote (req,res){
  res.status(200).send("Post request is also workign perfectly fine");
}

export function delAllNotes(req,res){
  res.status(200).send("Delete request is working totally fine ");
}

export async function updateNotes(req,res){
  res.status(200).send("Put method is workign perfectly fine")
}


