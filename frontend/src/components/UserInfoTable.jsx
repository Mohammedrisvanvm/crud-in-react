import React, { useEffect, useState } from "react";
import { Container, Card, Toast } from "react-bootstrap";
import { toast } from "react-toastify";
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
import { Link, Navigate, useNavigate } from "react-router-dom";

function UserInfoTable() {
  const [userInfo, setUserInfo] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/admin").then((response) => {
      setUserInfo(response.data);
    });
  }, []);
 
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", margin: "50px" }}
      >
        <Button variant="contained" startIcon={<AddIcon />} size="small" onClick={()=>Navigate('/admin/register')}>
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
                  <TableRow key={row._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => Navigate(`/admin/editUser/${row._id}`)}
                      >
                        <EditIcon></EditIcon>
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() =>
                          axios
                            .post("http://localhost:5000/admin/delete", {
                              id: row._id,
                            })
                            .then((response) => {
                              if (response.data.success) {
                                toast.success("user deleted");
                                Navigate(`/admin`)
                              } else {
                                toast.error("user not deleted");
                              }
                            })
                        }
                      >
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
