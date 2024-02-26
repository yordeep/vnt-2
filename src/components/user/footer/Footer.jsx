
import { useStyles } from './FooterCss'
import {Link} from 'react-router-dom'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/material';


function Footer() {
  let classes = useStyles()
  return (
   <>
   <Box className={classes.footer} 
   sx={{
    "& p":{
      fontSize:{xs:'1.8vh',sm:'1.6vw',md:'1.2vw'}
    },
   }}
   >
    <p className={classes.p1}>Important Links</p>

    <Box className={classes.links}
    sx={{
      fontSize:{xs:'2.2vh',sm:'2vw',md:'1.5vw'},
      gap:{xs:'2.5vh',sm:'3vw'},
      // bgcolor:'red',
      width:'90%'
    }}
    >
    <Link to="/" className={classes.link}>Privacy Policy</Link>
    <Link to="/" className={classes.link}>Refund and Returns Policy</Link>
    <Link to="/" className={classes.link}>Contact Us</Link>
    <Link to="/" className={classes.link}>Terms & Conditions</Link>
    <Link to="/" className={classes.link}>Shipping Policy</Link>
    </Box>



    <Box className={classes.socialLinks}>
    <Link className={classes.slink}><FacebookOutlinedIcon /></Link>
    <Link className={classes.slink}><TwitterIcon /></Link>
    <Link className={classes.slink}><InstagramIcon /></Link>
    </Box>

    <p className={classes.p2}>@ 2023 VNT Fashion Clothing.</p>
   </Box>
   </>
  )
}

export default Footer
