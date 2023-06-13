import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const baseImgUrl = "http://localhost:5000/uploads/";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user ,refresh} = useSelector((state) => state);

  console.log(user);
  const logoutHandler = async () => {
    try {
      axios.get("users/logout").then((res) => {
        dispatch(refresh());
        navigate("/");
      });
    } catch (err) {
      console.log(err);
    }
  };
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
          src={baseImgUrl + user.details.image}
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
          {user.details.name}
        </Typography>
        <Typography color="text.secondary" align="center" gutterBottom>
          {user.details.email}
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
          onClick={logoutHandler}
        >
          Logout
        </Button>
      </CardContent>
      <Modal open={open} setOpen={setOpen} />
    </Card>
  );
};

export default Profile;
