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
        },
        box:{
            width:'90%',
            margin:'auto',
            height:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-evenly'
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
            width:'15%',
            display:'flex',
            
            justifyContent:'space-evenly',
            '& > *':{
                fontSize:'18px'
            }
        },
        logoImg:{
            width:'200px'

            
            
        }
    }
)
