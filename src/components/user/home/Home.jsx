import { useStyles } from "./HomeCss";
import { Grid } from "@mui/material";
import { useState,useEffect } from "react";
import { getData,ServerUrl } from "../../services/ServerServices";
import { useNavigate } from "react-router-dom";
export default function Home() {
  let classes = useStyles();
  let navigate=useNavigate()
  const [shirts,setShirts]=useState([])
  const [jeans,setJeans]=useState([])
  const [tshirts,setTshirts]=useState([])
  const [jackets,setJackets]=useState([])


  //navigate to productinfo page
  const handleClick=async(pid,cid)=>{
   
    navigate(`/home/productinfo/${pid}`,{state:{productid:pid,categoryid:cid}})   
 
 
  }
  //navigate to productinfo page


  //Fetching all shirts
  const fetch_all_shirts=async()=>{
    let result= await getData('product/fetch_all_shirts')
    setShirts(result.data)
  }

  //Fetching all shirts

  //Fetching all jeans
  const fetch_all_jeans=async()=>{
    let result= await getData('product/fetch_all_jeans')
    setJeans(result.data)
    


  }
  //Fetching all jeans

  //Fetching all tshirts
  const fetch_all_tshirts=async()=>{
    let result= await getData('product/fetch_all_tshirts')
    setTshirts(result.data)
  }
   //Fetching all tshirts

   //Fetching all jackets

   const fetch_all_jackets=async()=>{
    let result= await getData('product/fetch_all_jackets')
    setJackets(result.data)
   }

   //Fetching all jackets

  useEffect(()=>{
      fetch_all_shirts()
      fetch_all_jackets()
      fetch_all_jeans()
      fetch_all_tshirts()
      
      
  },[])



//Display All shirts with map //
const displayAllShirts=()=>{
  return(
  shirts.map((item)=>(
    <Grid item xs={12} sm={6} md={4} lg={3} key={item.productid} onClick={()=>handleClick(item.productid,item.categoryid)} >
    <img src={`${ServerUrl}/images/${item.image}`} style={{width:'100%',height:'65%'}}/>
      <div className={classes.productinfo}>
      <h3>{item.description}</h3>
      <p>&#x20B9;{item.price}</p>
      </div>

    </Grid>
  )

  )
  )
}

//Display All shirts with map//

//Display All Jeans
 
const displayAllJeans=()=>{
  return(
  jeans.map((item)=>(
    <Grid item xs={12} sm={6} md={4} lg={3} key={item.productid} onClick={()=>handleClick(item.productid,item.categoryid)}>
    <img src={`${ServerUrl}/images/${item.image}`} style={{width:'100%',height:'65%'}}/>
      <div className={classes.productinfo}>
      <h3>{item.description}</h3>
      <p>&#x20B9;{item.price}</p>
      </div>

    </Grid>
  )

  )
  )
}
//Display All Jeans

//Display all tshirts
const displayAllTshirts=()=>{
  return(
  tshirts.map((item)=>(
    <Grid item xs={12} sm={6} md={4} lg={3} key={item.productid} onClick={()=>handleClick(item.productid,item.categoryid)}>
    <img src={`${ServerUrl}/images/${item.image}`} style={{width:'100%',height:'65%'}}/>
      <div className={classes.productinfo}>
      <h3>{item.description}</h3>
      <p>&#x20B9;{item.price}</p>
      </div>

    </Grid>
  )

  )
  )
}
//display all tshirts

//Display all jackets
const displayAllJackets=()=>{
  return(
  jackets.map((item)=>(
    <Grid item xs={12} sm={6} md={4} lg={3} key={item.productid} onClick={()=>handleClick(item.productid,item.categoryid)}>
    <img src={`${ServerUrl}/images/${item.image}`} style={{width:'100%',height:'65%'}}/>
      <div className={classes.productinfo}>
      <h3>{item.description}</h3>
      <p>&#x20B9;{item.price}</p>
      </div>

    </Grid>
  )

  )
  )
}
//Display all jackets
  return (
    <div className={classes.maincontainer}>
      <div className={classes.overlay}></div>
      <img
        src="src/assets/background.jpg"
        alt="Your Alt Text"
        className={classes.image}
      />
      <div className={classes.contentBox}>
        <h2 className={classes.headings}>Shirts</h2>
        <Grid container spacing={1}>
          
          {displayAllShirts()}
         


        </Grid>
          
      </div>

      <div className={classes.contentBox}>
        <h2 className={classes.headings}>Jeans</h2>
        <Grid container spacing={1}>
         {displayAllJeans()}


        </Grid>
          
      </div>
      <div className={classes.contentBox}>
        <h2 className={classes.headings}>T-Shirts</h2>
        <Grid container spacing={1}>
         {displayAllTshirts()}
         


        </Grid>
          
      </div>
      <div className={classes.contentBox}>
        <h2 className={classes.headings}>Jackets</h2>
        <Grid container spacing={1}>
         {displayAllJackets()}

         


        </Grid>
          
      </div>
    </div>
  )
}
