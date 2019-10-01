import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MaterialTable from "material-table";
import Axios from "axios";

const Dashboard = props => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    Axios.get("https://nagarro-openings.herokuapp.com/job/latest", {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDg0NmU4MGU3MGNjZjNkMjgwOTgyOTYiLCJpYXQiOjE1Njg5NjIwMjd9.mF15RNWxGArNLaH7vI7yrsgIRSvYjodOQzVvYiNGsU4"
      }
    }).then(response => setJobs(response.data.data));
  }, []);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Nagarro
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "5%" }}>
        <MaterialTable
          columns={[
            { title: "Title", field: "title" },
            { title: "Job Type", field: "jobType" },
            { title: "Positions", field: "noOfPositions", type: "numeric" },
            { title: "Posted On", field: "createdAt" },
            { title: "Updated On", field: "updatedAt" }
          ]}
          data={jobs}
          title="Job Openings"
          actions={[
            {
              icon: "add",
              tooltip: "Save User",
              onClick: (event, rowData) => {
                // Do save operation
              }
            },
            {
              icon: "edit",
              tooltip: "Save User",
              onClick: (event, rowData) => {
                // Do save operation
              }
            },
            {
              icon: "delete",
              tooltip: "Save User",
              onClick: (event, rowData) => {
                // Do save operation
              }
            }
          ]}
          options={{
            actionsColumnIndex: -1
          }}
        />
      </Container>
    </div>
  );
};

export default Dashboard;
