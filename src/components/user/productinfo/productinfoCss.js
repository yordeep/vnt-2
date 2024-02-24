import { makeStyles } from "@mui/styles"
import ProductInfo from "./ProductInfo"
export const useStyles = makeStyles({
    container:{
        // backgroundColor:'crimson',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        position:'relative',
        paddingTop:'10vh',
        "& h2":{
            fontSize:'3vw',
            marginTop:'1.5vw'
        }
    },
    shirtInfo:{
        width:'70%',
        // backgroundColor:'blueviolet',
        display:'flex',
        alignItems:'start',
        justifyContent:'center',
        gap:'5vw',
        margin:'2vw 0vw',
        "& img":{
            width:'25vw',
        },
        position:'relative'
    },
    shirtImg:{
        display:'flex',
        flexDirection:'column',
        gap:'1vw',
        overflowY:'auto',
        maxHeight:'100vh',
        scrollbarWidth: 'none',
        scrollBehavior:'smooth',
        position:'sticky',
    },
    desc:{
        position:'sticky',
        display:'flex',
        flexDirection:'column',
        alignItems:'start',
        justifyContent:'start',
        gap:'1vw',
        // backgroundColor:"green",
        "& h1":{
            fontSize:'3vw'
        },
        "& h3":{
            fontSize:'2vw',
            fontWeight:'lighter',
            paddingBottom:'1vw'
        },
        "& p":{
            fontSize:'1.5vw',
        },
        
    },
    addBtn:{
        backgroundColor:"#5c7ec1",
        width:'20vw',
        border:'none',
        borderRadius:'0.3vw',
        color:'#fff',
        fontSize:'1.2vw',
        padding:'2vh',
        cursor:"pointer",
        "&:hover":{
            backgroundColor:"#1a76cb"
        }
    },
    container2:{
        width:'100%',
        display:'flex',
        // backgroundColor:'red'  
    },
    sidebar:{
        // backgroundColor:'blue',
        width:'20%',
        
    },
    sideimgs:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:'2vh',
        marginTop:'10vh',
        "& img":{
            width:'13vh',

        },
    },
    relatedProducts:{
        // backgroundColor:'red',
        width:'85%',
        height:'100%',
        margin:'5vw 0vw',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // gap:'1vw',
        fontSize:'1.2rem',
        textWrap:'wrap',
        position:'relative',
        "& img":{
            width:'22vw',
            height:'50vh',
            marginBottom:'0.8vw',
            backgroundColor:'green'
        },
        "& h3":{
            width:'22vw',
            marginBottom:'1vh'
        }
    },
    relatedprod:{
        paddingRight:'2vw'
    }
})
