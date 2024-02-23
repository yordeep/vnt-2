// import React, { useEffect, useState } from 'react'
// import { getData,ServerUrl } from "../../services/ServerServices"
// import { useStyles } from './productinfoCss'


// function ProductInfo() {
//     let classes = useStyles()
//     const [Shirts, setShirts] = useState([])

//       //Fetching all shirts
//   const fetch_all_shirts=async()=>{
//     let result= await getData('product/fetch_all_shirts')
//     setShirts(result.data)
//   }

  
//   // Fetching all products

//   useEffect(()=>{
//     fetch_all_shirts()
//   },[])


// const displayShirt = () =>{
//     return (
//         Shirts.map((item)=>{
//             if(item.productid == 10){
//                 return <div className={classes.shirtInfo} key={item.productid}>
//                    <div className={classes.shirtImg}>
//                    <img id='1' src={`${ServerUrl}/images/${item.image}`} />
//                     <img id='2' src={`${ServerUrl}/images/${item.image}`} />
//                    </div>
//                    <div className={classes.desc}>
//                    <h1>{item.product}</h1>
//                    <h3>{`₹${item.price}.00`}</h3>
//                     <p>{item.description}</p>
//                     <button className={classes.addBtn}>Add to Cart</button>
//                    </div>
//                 </div>
//             }
//         })
//     )
// }

// const sideToggle = () =>{
//   return (
//     Shirts.map((item)=>{
//         if(item.productid == 10){
//             return <div className = {classes.sidebar} key = {item.productid}>
//                <div className={classes.sideimgs}>

//                <a href='#1'>
//                 <img src={`${ServerUrl}/images/${item.image}`} />
//                 </a>

//                 <a href='#2'>
//                 <img src={`${ServerUrl}/images/${item.image}`} />
//                 </a>
//                </div>
//             </div>
//         }
//     })
// )
// }


//   return (
//     <>
//      <div className={classes.container}>
//       <div className={classes.container2}>
//         {sideToggle()}
//         {displayShirt()}
//       </div>
//         <h2>Related Products</h2>
//      </div>
//     </>
//   )
// }

// export default ProductInfo



import { useEffect, useState } from 'react'
import { postData,ServerUrl } from "../../services/ServerServices";
import { useStyles } from './productinfoCss';
import { useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';



// Redux imports 
import { useDispatch } from 'react-redux';
import { addItem } from '../../slices/cart/cartSlice';



function ProductInfo() {
    let classes = useStyles()
    let location=useLocation()
    const dispatch = useDispatch()
     

    //Defining sTAtes
    const [productDetails,setProductDetails]=useState([])
    const [productId, setProductId] = useState(location.state ? location.state.productid || '' : '');
    const [categoryId, setCategoryId] = useState(location.state ? location.state.categoryid || '' : '');
    const [relatedProducts,setRelatedProducts]=useState([])
    //Defining states

      //Fetching productDetails
  const fetch_product_details=async()=>{
    let result= await postData('product/fetch_productinfo',{productid:productId})
    setProductDetails(result.data)
  }

  
  // Fetching Product Details

  //Fething Related Products
  const fetch_related_products=async()=>{

    let result= await postData('product/fetch_related_products',{categoryid:categoryId})
    setRelatedProducts(result.data)
  }

  //Fething related products

  //Side toggle

  const sideToggle = () =>{
    return (
      productDetails.map((item)=>{
          
              return <div className = {classes.sidebar} key = {item.productid}>
                 <div className={classes.sideimgs}>
  
                 <a href='#1'>
                  <img src={`${ServerUrl}/images/${item.image}`} />
                  </a>
  
                  <a href='#2'>
                  <img src={`${ServerUrl}/images/${item.image}`} />
                  </a>
                 </div>
              </div>
          
      })
  )
  }
  //Side toggle


  useEffect(() => {
    console.log("location state",location.state);
    setProductId(location.state ? location.state.productid || '' : '')
    setCategoryId(location.state ? location.state.categoryId || '' : '')
    fetch_product_details(); 
    fetch_related_products()
}, []);


const displayProductInfo = () =>{
    return (
        productDetails.map((item)=>{
         
                return <div className={classes.shirtInfo} key={item.productid}>
                   <div className={classes.shirtImg}>
                   <img id='1' src={`${ServerUrl}/images/${item.image}`} />
                    <img id='2' src={`${ServerUrl}/images/${item.image}`} />
                   </div>
                   <div className={classes.desc}>
                   <h1>{item.product}</h1>
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
        if (item.productid === productId) {
          return <div key={item.productid}></div>; // You can return an empty div or handle this case as needed
        } else {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.productid} className={classes.relatedprod}>
            <img src={`${ServerUrl}/images/${item.image}`}/>
              <div className={classes.productinfo}>
              <h3>{item.description}</h3>
              <p>&#x20B9;{item.price}</p>
              </div>
        
            </Grid>
          );
        }
      })
    );
  };

  return (
    <>
    
     <div className={classes.container}>
      <div className={classes.container2}>
        {sideToggle()}
        {displayProductInfo()}
      </div>
        <h2>Related Products</h2>
       <div className={classes.relatedProducts}>  {displayRelatedProducts()} </div>
     </div>
    </>
  )
}

export default ProductInfo