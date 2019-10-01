import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Dialog,
  Slide,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MaterialTable from "material-table";
import Axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Dashboard = props => {
  const [jobs, setJobs] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    Axios.get("https://nagarro-openings.herokuapp.com/job/latest", {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDg0NmU4MGU3MGNjZjNkMjgwOTgyOTYiLCJpYXQiOjE1Njg5NjIwMjd9.mF15RNWxGArNLaH7vI7yrsgIRSvYjodOQzVvYiNGsU4"
      }
    }).then(response => setJobs(response.data.data));
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
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
      <Container>
        <div style={{ textAlign: "right", margin: "30px 0 15px 0" }}>
          <Button
            onClick={() => setOpenModal(true)}
            color="secondary"
            variant="contained"
          >
            Add Job
          </Button>
        </div>
        <MaterialTable
          columns={[
            { title: "Title", field: "title" },
            { title: "Job Type", field: "jobType" },
            { title: "Positions", field: "noOfPositions", type: "numeric" },
            {
              title: "Posted On",
              field: "createdAt",
              render: rowData => new Date(rowData.createdAt).toDateString()
            },
            {
              title: "Updated On",
              field: "updatedAt",
              render: rowData => new Date(rowData.updatedAt).toDateString()
            }
          ]}
          data={jobs}
          title="Job Openings"
          actions={[
            {
              icon: "edit",
              tooltip: "Edit User",
              onClick: (event, rowData) => {
                // Do save operation
              }
            },
            {
              icon: "delete",
              tooltip: "Delete User",
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
      {/* DIALOGS */}
      <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Add Job</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseModal}
            color="primary"
            variant="contained"
          >
            Add
          </Button>
          <Button
            onClick={handleCloseModal}
            color="secondary"
            variant="contained"
          >
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;
