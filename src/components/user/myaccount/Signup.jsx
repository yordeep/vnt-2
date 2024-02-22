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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [town, setTown] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  //States

  //For handling State change
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  //For handling state change

   //Clearing values
   const clearValue=()=>{
    setFirstName('')
    setLastName('')
    setEmailAddress('')
    setPassword('')
    setPhone('')
    setState('')
    setStreetAddress('')
    setTown('')
    setPinCode('')

  }

  //clearing values

  //submit details

  const handleSubmit = async () => {
    var body = {
      firstname: firstName,
      lastname: lastName,

      email: emailAddress,
      phone: phone,
      password: password,
      streetaddress: streetAddress,
      town: town,
      pincode: pinCode,
      state: state,
    };

    console.log("formData", body);
    var result = await postData("user/add_new_user", body);
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
          <h3 style={{ marginBottom: "10px" }}>First name:</h3>
          <TextField
            fullWidth
            variant="outlined"
            label="First name"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h3 style={{ marginBottom: "10px" }}>Last name:</h3>
          <TextField
            fullWidth
            variant="outlined"
            label="Last name"
            onChange={(event) => setLastName(event.target.value)}
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
          <h3 style={{ marginBottom: "10px" }}>Phone:</h3>
          <TextField
            fullWidth
            variant="outlined"
            label="Phone"
            onChange={(event) => setPhone(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <h3 style={{ marginBottom: "10px" }}>Set Password:</h3>
          <TextField
            type="password"
            fullWidth
            variant="outlined"
            label="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <h3 style={{ marginBottom: "10px" }}>Street address:</h3>
          <TextField
            fullWidth
            variant="outlined"
            label="Street address"
            onChange={(event) => setStreetAddress(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <h3 style={{ marginBottom: "10px" }}>Town/City:</h3>
          <TextField
            fullWidth
            variant="outlined"
            label="Town/City"
            onChange={(event) => setTown(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <h3 style={{ marginBottom: "10px" }}>Pin Code:</h3>
          <TextField
            fullWidth
            variant="outlined"
            label="Pin code"
            onChange={(event) => setPinCode(event.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <h3 style={{ marginBottom: "10px" }}>State:</h3>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              label="State"
              onChange={handleStateChange}
            >
              <MenuItem value={"Choose state"}>Choose State----</MenuItem>
              <MenuItem value={"MP"}>Madhya Pradesh</MenuItem>
              <MenuItem value={"rajsthan"}>Rajsthan</MenuItem>
              <MenuItem value={"gujrat"}>Gujrat</MenuItem>
              <MenuItem value={"hariyana"}>Hariyana</MenuItem>
              <MenuItem value={"UP"}>Uttar Pradesh</MenuItem>
            </Select>
          </FormControl>
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
