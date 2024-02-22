
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({

    footer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:'2vw',
        backgroundColor:'#d7d9ff;',
        padding:'10vh 0vh',
        position:'absolute',
        width:'100%',
    },
    p1:{
        fontSize:'1vw',
    },
    links:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'2vw',
        marginBottom:'5vh',
        fontSize:'2.5vh'
    },
    link:{
        textDecoration:'none',
        color:'#000',
        fontWeight:'bolder',
    },
    socialLinks:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'2vw'
    },
    slink:{
        border:'0.1vh solid gray',
        borderRadius:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'0.6vw',
        color:'#000'
    },
    p2:{
        fontSize:'1vw'
    } 
})