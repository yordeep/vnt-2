import { useStyles } from "./MyStoreCss"; // Make sure this import is correct
import { useDispatch, useSelector } from "react-redux";
import { ServerUrl } from "../../services/ServerServices";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@mui/material/styles";
import { addItem, removeItem,addQuantity,removeQuantity } from "../../slices/cart/cartSlice";
import { Grid, Typography, useMediaQuery,Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const MyStore = () => {
  const classes = useStyles();
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
   //Defining functions
   const calculateSubtotal = (item) => {
    return item.price * item.quantity;
   
  };


   //Defining functions
  const CartPage = ({ items }) => {
    const theme = useTheme();
    // const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const md=useMediaQuery(theme.breakpoints.down("md"))
    const lg=useMediaQuery('(max-width:800px)');


    console.log(items);

    return (
      <div className={classes.mainContainer} style={{width: md?'100%':'90%'}}>
        <Typography variant="h4" align="center" gutterBottom>
          Your Cart
        </Typography>

        <Grid container spacing={2} sx={{ width: "100%", margin: "auto"}}>
          {lg ? (
            // Mobile layout
            items.map((item) => (
              <Grid container key={item.productid} alignItems="center" px="2em">
                <Grid item xs={12} sx={{ textAlign: "center",marginTop:'20px' }}>
                  {/* Image and Close Icon */}
                  <div className={classes.imgBox}>
                    <ClearIcon
                      className={classes.carticon}
                      onClick={() => {
                        dispatch(removeItem(item.id));
                      }}
                    />
                    <img
                      className={classes.cartimg}
                      src={`${ServerUrl}/images/${item.image}`}
                      alt=""
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center",marginTop:'20px' }} >
                  <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <Typography variant="h6" sx={{fontWeight:'600'}}>Product:</Typography>
                  <p style={{fontWeight:'400', fontSize:'1.2rem'}}>{item.product}</p>
                  </div>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <div  style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <Typography variant="h6"  sx={{fontWeight:'600'}}>Price:</Typography>
                <p style={{fontWeight:'400', fontSize:'1.2rem'}}> {item.price}</p>
                  </div>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <div  style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <Typography variant="h6"  sx={{fontWeight:'600'}}>Quantity:</Typography>
                <p style={{fontWeight:'400', fontSize:'1.5rem'}}>       <Button
      variant="outlined"
      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,width:'8em',height:'2em',borderColor:'black',color:'black'}}
      onClick={() =>{dispatch(addItem(item))}}
    >
      <RemoveIcon />
      <Typography variant="h6">1</Typography>
      <AddIcon />
    </Button></p>
                  </div>
                </Grid>
              </Grid>
            ))
          ) : (
            // Desktop layout
            <>
              <Grid item xs={12} sm={2}>
                {/* Blank column for image and close icon */}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="h6">Product</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="h6">Price</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="h6">Quantity</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="h6">Subtotal</Typography>
              </Grid>

              {/* Items */}
              {items.map((item) => (
                <Grid container key={item.productid} alignItems="center" sx={{margin:'2vh 0vh'}}>
                  <Grid item xs={12} sm={2}>
                    <div className={classes.imgBox}> 
                      <ClearIcon
                        className={classes.carticon}
                        onClick={() => (dispatch(removeItem(item.id)))}
                      />
                      <img
                        className={classes.cartimg}
                        src={`${ServerUrl}/images/${item.image}`}
                        alt=""
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    {item.product}
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    {item.price}
                  </Grid>
                  <Grid item xs={12} sm={2}>
                  <Button
      variant="outlined"
      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,width:'8em',borderColor:'black',color:'black'}}
      
    >
      <RemoveIcon onClick = {() => (dispatch(removeQuantity(item.id)))}/>
      <Typography variant="h6">{item.quantity}</Typography>
      <AddIcon  onClick = {() => (dispatch(addQuantity(item.id)))}/>
    </Button>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                  {calculateSubtotal(item)}
                  </Grid>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </div>
    );
  };

  return <CartPage items={items} />;
};




export default MyStore;
