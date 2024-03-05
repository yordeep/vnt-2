import { useStyles } from "./SignupCss";
import Swal from "sweetalert2";
import { postData } from "../../services/ServerServices";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
export default function Signup() {
  let classes = useStyles();
  let navigate=useNavigate()
  //States

  const [fullName, setfullName] = useState("");
  const [userName, setuserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

   //Clearing values
   const clearValue=()=>{
    setfullName('')
    setuserName('')
    setEmailAddress('')
    setPassword('')
  }

  //clearing values

  //submit details

  const handleSubmit = async () => {
    var body = {
      fullName,
      userName,
      email: emailAddress,
      password: password,
    };

    console.log("formData", body);
    var result = await postData("users/register",body);
    if (result.status) {
      Swal.fire({
        icon: "success",
        title: result.message,
      });
      navigate('/my-account')
    } else {
      Swal.fire({
        icon: "error",
        title: result.message,
      });
    }
    clearValue()
    
  };
  // submit details

 
  return (
    <div className={classes.box}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Sign Up</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h3 style={{ marginBottom: "10px" }}>Full Name:</h3>
          <TextField
            fullWidth
            variant="outlined"
            label="Full Name"
            onChange={(event) => setfullName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h3 style={{ marginBottom: "10px" }}>User Name:</h3>
          <TextField
            fullWidth
            variant="outlined"
            label="User Name"
            onChange={(event) => setuserName(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <h3 style={{ marginBottom: "10px" }}>Email address:</h3>
          <TextField
            type="email"
            fullWidth
            variant="outlined"
            label="Email Address"
            onChange={(event) => setEmailAddress(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <h3 style={{ marginBottom: "10px" }}>Password:</h3>
          <TextField
            type="password"
            fullWidth
            variant="outlined"
            label="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            fullWidth
            style={{ marginTop: "35px" }}
            onClick={handleSubmit}
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
