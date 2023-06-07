import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";

 const Profile = () => {

  const baseImgUrl = "http://localhost:5000/uploads/";
  const value = useSelector((state) => {
    return state.auth;


  });
  console.log(value);
  async function handleLogout() {
    let data = await axios.get("/logout");
    console.log(data);

  }
  const [open, setOpen] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 400,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CardContent>
        <Avatar
          src={baseImgUrl + value.image }
          alt=""
          sx={{
            width: 200,
            height: 200,
            alignSelf: "center",
            marginBottom: 2,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Typography variant="h4" component="div" align="center" gutterBottom>
          {value.name}
        </Typography>
        <Typography color="text.secondary" align="center" gutterBottom>
          {value.email}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setOpen(true)}
          sx={{ marginBottom: 1 }}
        >
          Change Photo
        </Button>
        <Button
          variant="outlined"
          color="error"
          fullWidth
          sx={{ marginBottom: 1 }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </CardContent>
      <Modal open={open}  id={value._id} setOpen={setOpen} />
    </Card>
  );
};

export default Profile;