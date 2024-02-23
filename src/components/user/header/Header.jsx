import { Paper,Badge } from "@mui/material"
import { useStyles } from "./HeaderCss"
import { Link } from "react-router-dom"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
export default function Header(){
    let classes=useStyles()
    return (
        <div>
            <Paper elevation={2} className={classes.paper}>
               <div className={classes.box}>
                <img src="logo.webp" className={classes.logoImg}/>
                 <div className={classes.links}>
                    <Link to="">Home</Link>
                    <Link>Shop</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                    
                 </div>
                 <div className={classes.icons}>
                   <Link to="my-account"><PersonOutlineIcon style={{color:'black'}}/></Link>
                   <Link to="my-account">
                    <Badge badgeContent={4} color="primary">
                    <StorefrontIcon style={{color:'black'}}/>
                    </Badge>
                    </Link>
                    </div>
                </div>
            </Paper>
        </div>
    )
}