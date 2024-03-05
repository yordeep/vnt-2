import { useStyles } from "./MyAccountCss";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { postData } from "../../services/ServerServices";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
export default function MyAccount() {
  let navigate = useNavigate();
  //handling States

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  
  //handling States
  //handling login functionality
  const handleLogin = async () => {
    let body = {
      userName,email,password
    };

    let result = await postData("users/login", body);

    if (result.status) {
        Swal.fire({
          icon: "success",
          title: result.message,
        });
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate('/')
      } else {
        Swal.fire({
          icon: "error",
          title: result.message,
        });
      }

   
  };
  //handling login functionality

  let classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.box}>
        <h1
          style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}
        >
          Login
        </h1>
        <h3>
          Username or email address <span style={{ color: "blue" }}> *</span>
        </h3>
        <TextField
          label="email "
          variant="outlined"
          onChange={(event) => setEmail(event.target.value)}
        />

<TextField
          label="Username "
          variant="outlined"
          onChange={(event) => setuserName(event.target.value)}
        />

        <h3>
          Password <span style={{ color: "blue" }}> *</span>
        </h3>
        <TextField
          label="Password "
          variant="outlined"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button
          variant="contained"
          style={{ marginTop: "25px" }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Link to="/signup">
          {" "}
          <Button variant="contained" style={{ marginTop: "25px" }} fullWidth>
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}
