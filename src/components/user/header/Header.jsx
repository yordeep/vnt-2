import { Paper,Badge } from "@mui/material"
import { useStyles } from "./HeaderCss"
import { Link } from "react-router-dom"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useSelector } from "react-redux";
export default function Header(){
    let classes=useStyles()
    var products=useSelector((state)=>state.items)
    var totalProducts=Object.keys(products)
    return (
        <div>
            <Paper elevation={2} className={classes.paper}>
               <div className={classes.box}>
                <img src="logo.webp" className={classes.logoImg}/>
                 <div className={classes.links}>
                    <Link to="">Home</Link>
                    <Link>Shop</Link>
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link>
                    
                 </div>
                 <div className={classes.icons}>
                   <Link to="my-account"><PersonOutlineIcon style={{color:'black'}}/></Link>
                   
                   <Link to="my-store"> <Badge badgeContent={totalProducts.length} color="primary">
                    <StorefrontIcon style={{color:'black'}}/>
                    </Badge></Link>
                    </div>
                </div>
            </Paper>
        </div>
    )
}