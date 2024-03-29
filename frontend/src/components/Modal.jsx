import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";


function Modal({ open, setOpen }) {
  const [file, setFiles] = useState("");
  const dispatch=useDispatch()
  const { user } = useSelector((state) => state);
  const id = user.details._id;


  const saveHandler = async () => {
    let {data}=await axios.post(
      "/users/editProfile",
      { file, id },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (data.error) {
      toast.error(data.message)
      
    }else{

      dispatch({type:"refresh"})
      setOpen(false);
    }
  };
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
          <Button onClick={saveHandler}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
