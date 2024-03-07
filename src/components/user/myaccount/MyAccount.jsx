import { useStyles } from "./MyAccountCss";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { postData } from "../../services/ServerServices";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function MyAccount() {
  let navigate = useNavigate();

  // Handling States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null); 

  // Getting logged in user 
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, [setUser]);

  // Handling login functionality
  const handleLogin = async () => {
    let body = { userName, email, password };

    let result = await postData("users/login", body);

    localStorage.setItem("user", JSON.stringify(result.data.user));
    setUser(result.data.user);

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: result.message,
      });
      navigate('/');
    } else {
      Swal.fire({
        icon: "error",
        title: result.message,
      });
    }
  };

  const handleLogout = async () => {
    let result =  await postData("users/logout")
    localStorage.clear()

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: result.message,
      });
      navigate('/');
    } else {
      Swal.fire({
        icon: "error",
        title: result.message,
      });
    }
  }

  let classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.box}>
        {user ? (
          <Box sx={{width:'fit-content',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'',gap:'3vmax'}}>
          <h2> User Name : {user.userName}</h2>
          <h2> Full Name : {user.fullName}</h2>
          <h2> Email : {user.email}</h2>

          <Button
              variant="contained"
              style={{ marginTop: "25px" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          
          </Box>
        ) : (
          <Box sx={{width:'fit-content',height:'auto',bgcolor:'',display:'flex',flexDirection:'column',justifyContent:'center',gap:'2vmax'}} >
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}>
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
              onChange={(event) => setUserName(event.target.value)}
            />
            <h3>
              Password <span style={{ color: "blue" }}> *</span>
            </h3>
            <TextField
              label="Password "
              variant="outlined"
              type="password"
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
              <Button variant="contained" style={{ marginTop: "25px" }} fullWidth>
                Sign Up
              </Button>
            </Link>
          </Box>
        )}
      </div>
    </div>
  );
}
