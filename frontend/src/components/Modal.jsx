import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useUserProfileUpdateMutation } from "../slices/userApiSlice";

function Modal({ open, setOpen }) {
  const [files, setFiles] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
const [update,{loading}]=useUserProfileUpdateMutation()
  const id = userInfo._id;
  console.log(id,files);
  const saveHandler = async() => {
    await update({ id,files }).unwrap();
     setOpen(false) 
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
