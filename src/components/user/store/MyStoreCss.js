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
      width:'90px',
      height:'90px',
      marginLeft:'1.5vw'
    },
    carticon:{
        cursor:'pointer',
    },
    mainContainer:{
       
       paddingTop:'15vh',
       margin:'auto',
    //    backgroundColor:'red',
       height:'100vh',
       
    },
    imgBox:{
        display:'flex',
        alignItems:'center',
    },
    total:{
        // backgroundColor:'green',
        width:'100%',
        height:'30%',
        display:'flex',
        alignItems:'center',
        justifyContent:'end',
        padding:'0vw 15vw'
    },
    innertotal:{
        backgroundColor:'#efefef',
        width:'40%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        border:'none',
        borderRadius:'0.2vw',
        gap:'1vw',
        "& h1":{
            fontSize:'2vw',
            fontWeight:'lighter'
        },
        "& button":{
            width:'100%',
            padding:'1vw 0vw',
            border:'none',
            borderRadius:'0.2vw',
            backgroundColor:'royalblue',
            fontSize:'1.2vw',
            color:'white',
            "&:hover":{
                backgroundColor:'#005ec6'
            }
            
        }
    },
    emptycart:{
        backgroundColor:'#d7d9ff',
        width:'98%',
        height:'10%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:'2vw auto',
        fontSize:'1.5vw',
        border:'0.1vw solid #0101a6',
        borderRadius:'0.5vw',
        
    }
   
})