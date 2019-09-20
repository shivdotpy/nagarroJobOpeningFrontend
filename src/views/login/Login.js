import React from "react";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Card,
  CardActions,
  Button,
  TextField
} from "@material-ui/core";
import nagarroBanner from "../../assets/nagarroBanner.png";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10%"
      }}
    >
      <Card style={{ maxWidth: "400px" }}>
        <CardActionArea>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img src={nagarroBanner} />
          </div>

          <CardContent>
            <TextField id="standard-name" label="Email" fullWidth={true} />
            <TextField id="standard-name" label="Password" fullWidth={true} />
          </CardContent>
        </CardActionArea>
        <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button size="small" color="primary" variant="contained">
            Login
          </Button>
          <Button size="small" color="secondary" variant="contained">
            Signup
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
