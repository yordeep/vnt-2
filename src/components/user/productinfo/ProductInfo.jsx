import { useEffect, useState } from "react";
import { postData } from "../../services/ServerServices";
import { useStyles } from "./productinfoCss";
import { useLocation,useNavigate,useParams } from "react-router-dom";
import { Grid } from "@mui/material";


// Redux imports 
import { useDispatch } from 'react-redux';
import { addItem } from '../../slices/cart/cartSlice';



function ProductInfo() {
    let classes = useStyles()
    let location=useLocation()
    const dispatch = useDispatch()
    let navigate=useNavigate()
    const { newProductId } = useParams()
     

    //Defining sTAtes
    const [productId, setProductId] = useState(newProductId ? newProductId : (location.state ? location.state.productid || '' : ''));
    const [categoryId, setCategoryId] = useState(location.state ? location.state.categoryid || '' : '');
    const [relatedProducts,setRelatedProducts] = useState([])
    const [productDetails, setproductDetails] = useState([])

   

    //Defining states

  //Fetching productDetails
  const fetch_product_details = async () => {
    let result = await postData('users/getproductinfo',{productid:productId});
    setproductDetails(Array(result.data));
  };

  const fetch_product_details_again = async (pid) => {
    let result = await postData("users/getproductinfo", {productid: pid})
    setproductDetails(Array(result.data))

  };

  // Fetching Product Details

  //Fething Related Products
  const fetch_related_products = async () => {
    let result = await postData("users/getrelatedproducts",{categoryid:categoryId});
    setRelatedProducts(result.data);
  };

  const handleRelatedProductClick = (pId) => {
    // Navigate to the clicked related product's details page
    setProductId(pId)
   
    navigate(`/${pId}`);
    fetch_product_details_again(pId)
    
    
    
    
    
    

  };

  //Fething related products

  //Side toggle

  const sideToggle = () => {
    return productDetails.map((item) => {
      return (
        <div className={classes.sidebar} key={item._id}>
          <div className={classes.sideimgs}>
            <a href="#1">
              <img src={item.productImage} />
            </a>

            <a href="#2">
              <img src={item.productImage} />
            </a>
          </div>
        </div>
      );
    });
  };
  
  //Side toggle

  useEffect(() => {
    setProductId(location.state ? location.state.productid || '' : '')
    setCategoryId(location.state ? location.state.categoryId || '' : '')
    fetch_product_details()
    fetch_related_products()
}, [setProductId]);


  

const displayProductInfo = () =>{
    return (
        productDetails.map((item)=>{
         
                return <div className={classes.shirtInfo} key={item._id}>
                   <div className={classes.shirtImg}>
                   <img id='1' src={item.productImage} />
                    <img id='2' src={item.productImage} />
                   </div>
                   <div className={classes.desc}>
                   <h1>{item.name}</h1>
                   <h3>{`₹${item.price}.00`}</h3>
                    <p>{item.description}</p>
                    <button className={classes.addBtn} onClick={() =>{dispatch(addItem(item))}} >Add to Cart</button>
                   </div>
                </div>
           
        })
    )
}

const displayRelatedProducts = () => {
    return (
      relatedProducts.map((item) => {
        if (item._id === productId) {
          return <div key={item._id}></div>; 
        } else {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id} className={classes.relatedprod} onClick={() => handleRelatedProductClick(item._id)}>
            <img src={item.productImage}/>
              <div className={classes.productinfo}>
              <h3>{item.description}</h3>
              <p>&#x20B9;{item.price}</p>
            </div>
          </Grid>
        );
      }
    }))
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.container2}>
          {sideToggle()}
          {displayProductInfo()}
        </div>
        <h2>Related Products</h2>
        <div className={classes.relatedProducts}>
          {" "}
          {displayRelatedProducts()}{" "}
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
