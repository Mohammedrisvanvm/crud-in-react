import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";

function UserInfoTable() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/admin").then((response) => {
      console.log(response.data);
      setUserInfo(response.data);
    });
  }, [setUserInfo]);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", margin: "50px" }}
      >
        <Button variant="contained" startIcon={<AddIcon />} size="small">
          Create User
        </Button>
      </div>
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userInfo.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <DeleteIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <Button variant="contained" startIcon={<LogoutIcon />} size="small">
          Logout
        </Button>
      </div>
    </>
  );
}

export default UserInfoTable;
