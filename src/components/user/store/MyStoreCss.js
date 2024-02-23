import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
    cart:{
        paddingTop:'10vh',
        // backgroundColor:'crimson',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'start',
        height:'100vh',
    },
    item:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f2f2f2',
        gap:'2vw',
        minWidth:'50%',
        borderRadius:'1vh',
        margin:'2vh 0vh',
        padding:"1vh",
        "& h1":{
            fontSize:'1.5vw',
            fontWeight:'lighter'
        },
        "& h2":{
            fontSize:'1.5vw',
            fontWeight:'lighter'
        },
        

    },
    cartimg:{
      width:'5vw',
    },
    carticon:{
        cursor:'pointer'
    }
})