import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <Box 
    sx={{
      padding:'10vh 0 0 0',position:'relative',height:'auto',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',gap:'2vw',
      flexDirection:{xs:'column',md:'row'}
    }}>



      <Box sx={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'85%',md:'50%',lg:'40%'},padding:'2vw 0vw'}}>
        <img src="https://images.unsplash.com/photo-1516734196005-9fa3de96bfe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RocyUyMHNob3B8ZW58MHx8MHx8fDA%3D" alt="vnt-store" style={{width:'100%'}}/>
        </Box>

        <Box 
      sx={{
        width:{xs:'85%',md:'50%',lg:'40%'},
        height:'100%',display:'flex',
        alignItems:'start',
        alignSelf:{sx:'center',md:'start'},
        gap:'2vmax',
        justifyContent:'center',flexDirection:'column',margin:'2vw 0vw'
      }}
      >

      <h1>Contact</h1>
      <p>For any queries regarding VNT - FASHION please main us at</p>
      <Link to="">help@vnt-fashion.com</Link>

      </Box>
    </Box>
  )
}

export default Contact