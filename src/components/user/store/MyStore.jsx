import React from 'react'
import { useStyles } from './MyStoreCss'
import { useDispatch, useSelector } from 'react-redux'
import { ServerUrl } from '../../services/ServerServices'
import ClearIcon from '@mui/icons-material/Clear';
import { removeItem } from '../../slices/cart/cartSlice'


function MyStore() {

  let classes = useStyles()

  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  console.log(items);

  return (
    <>
    <div className={classes.cart}>
      {
        items.map((item)=>(
        <div className={classes.item} key={item.id}>
          <ClearIcon className={classes.carticon} onClick={()=>{dispatch(removeItem(item.id))}}/>
          <img className={classes.cartimg} src={`${ServerUrl}/images/${item.image}`} alt="" />
          <h1>{item.product}</h1>
          <h2>{`₹${item.price}.00`}</h2>
          {/* <p>{item.description}</p> */}
        </div>
        ))
      }
    </div>
    </>
  )
}

export default MyStore