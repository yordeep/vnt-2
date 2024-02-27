import { Paper,Badge, Box,IconButton } from "@mui/material"
import { useStyles } from "./HeaderCss"
import { Link } from "react-router-dom"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useSelector } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState,useEffect,useRef } from "react";

export default function Header(){
    let classes=useStyles()
    const [sidebarToggle, setsidebarToggle] = useState(false)
    const sidebarRef = useRef(null)
    var products=useSelector((state)=>state.items)
    var totalProducts=Object.keys(products)

    const toggleHandler = () =>{
        setsidebarToggle(!sidebarToggle)
    }
    
    useEffect(() =>{
        const handleClickOutside = (e) =>{
            if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
                setsidebarToggle(false)
            }
        }

        document.addEventListener('mousedown',handleClickOutside)

        return () => {
            document.removeEventListener("mousedown",handleClickOutside)
        }
    },[sidebarRef])

    return (
        <Box>
            <Paper elevation={2} className={classes.paper}>
               <Box className={classes.box} sx={{width:{xs:'90%',md:'80%'}}}>
                <img src="logo.webp" className={classes.logoImg}/>
                 <Box className={classes.links}
                 sx={{
                    display:{xs:'none',md:'flex'}
                 }}
                 >
                    <Link to="">Home</Link>
                    <Link>Shop</Link>
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link>
                    
                 </Box>


                 <Box className={classes.icons}>
                   <Link to="my-account"><PersonOutlineIcon style={{color:'black'}}/></Link>
                   
                   <Link to="my-store"> <Badge badgeContent={totalProducts.length} color="primary">
                    <StorefrontIcon style={{color:'black'}}/>
                    </Badge></Link>
                    <IconButton aria-label="menu" onClick={toggleHandler} sx={{
                        display:{xs:'flex',md:'none'},color:'black'
                        }}><MenuIcon/></IconButton>
                    </Box>
                </Box>
            </Paper>

{/* SideBar for smaller screen size */}

            <Box
            ref={sidebarRef}
            sx={{
                    bgcolor:'#d7d9ff',position:'fixed',zIndex:'5',right:'0',display:sidebarToggle ? 'flex':'none',
                    flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%',width:'40%',
                 }} className={classes.sideBar}>
                  <Box 
                  sx={{
                    bgcolor:'',alignSelf:'end'
                  }}>
                  <IconButton aria-label="close" sx={{
                        color:'black',bgcolor:'#efefef',margin:'0 2vw 0 0'
                    }} onClick={toggleHandler}>
                        <CloseIcon/>
                    </IconButton>
                  </Box>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'start',
                        justifyContent:'center',
                        gap:'2vw',
                        width:'100%',
                        height:'70%',
                        padding:'0vw 2vw',
                        "& a":{color:'black',textDecoration:'none',fontSize:'2.5vmax'},
                    }}>
                    <Link to="" onClick={toggleHandler}>Home</Link>
                    <Link to="" onClick={toggleHandler}>Shop</Link>
                    <Link to="about"  onClick={toggleHandler}>About</Link>
                    <Link to="contact"  onClick={toggleHandler}>Contact</Link>


                    <Box 
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        gap:'2vmax'
                    }}
                    >
                    <Link><FacebookOutlinedIcon /></Link>
                    <Link><TwitterIcon /></Link>
                    <Link><InstagramIcon /></Link>
                    </Box>
                    </Box>


                   
                 </Box>
        </Box>
    )
}