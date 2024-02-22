
import { useStyles } from './FooterCss'
import {Link} from 'react-router-dom'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  let classes = useStyles()
  return (
   <>
   <footer className={classes.footer}>
    <p className={classes.p1}>Important Links</p>

    <div className={classes.links}>
    <Link to="/" className={classes.link}>Privacy Policy</Link>
    <Link to="/" className={classes.link}>Refund and Returns Policy</Link>
    <Link to="/" className={classes.link}>Contact Us</Link>
    <Link to="/" className={classes.link}>Terms & Conditions</Link>
    <Link to="/" className={classes.link}>Shipping Policy</Link>
    </div>



    <div className={classes.socialLinks}>
    <Link className={classes.slink}><FacebookOutlinedIcon/></Link>
    <Link className={classes.slink}><TwitterIcon /></Link>
    <Link className={classes.slink}><InstagramIcon/></Link>
    </div>

    <p className={classes.p2}>@ 2023 VNT Fashion Clothing.</p>
   </footer>
   </>
  )
}

export default Footer
