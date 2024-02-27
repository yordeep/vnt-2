import { makeStyles } from "@mui/styles";
export const useStyles=makeStyles(
    {
        paper:{
            width:'100%',
            height:'80px',
            position:'fixed',
            top:0,
            left:0,
            zIndex:'5',
            backgroundColor:'red'
        },
        box:{
            width:'80%',
            margin:'auto',
            height:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            // backgroundColor:'red'
        },
        links:{
            width:'50%',
            display:'flex',
            
            justifyContent:'space-evenly',
            '& > *': {
                textDecoration: 'none',  // Remove text decoration
                fontSize: '18px',
                color:'black'     
              },
            
        },
        icons:{
            // backgroundColor:'red',
            fontSize:'',
            display:'flex',
            alignItems:'center',
            justifyContent:'',
            gap:'2vmax'

        },
        logoImg:{
            width:'180px'  
        }
    }
)
