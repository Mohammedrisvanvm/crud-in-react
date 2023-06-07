import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useDispatch } from "react-redux";

function Modal({ open, setOpen, id }) {
    const [files, setFiles] = useState("");
    const [errMessage, setErrMessage] = useState(null);
    const dispatch = useDispatch();
  
    async function saveHandler() {
       await axios.post(
        "http://localhost:5000/users/edit-profile",
        { files, id },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ).then((response)=>{
console.log(response);
setOpen(false)
      })
    
    }

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Profile Picture</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select an Image to update Profile Picture
          </DialogContentText>
          <input
            type="file"
            className="mt-4 mb-2"
            accept="image/*"
            onChange={(e) => setFiles(e.target.files[0])}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={saveHandler} >Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;