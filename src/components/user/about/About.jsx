
import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


function About() {
  return (
    <Box 
    sx={{width:'100%',height:'auto',paddingTop:'10vh',position:'relative',display:'flex',
    justifyContent:'center',alignItems:'center',bgcolor:'',flexDirection:{xs:'column',md:'row',}}}
    >
        

        <Box sx={{height:'100%',bgcolor:'',padding:{xs:'5vw 0vw',sm:'3vw 0vw',md:'3vw 2vw',lg:''},width:{xs:'85%',md:'50%'}}}>

            <Box>
            <h1> VNT - FASHION </h1><br/>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis animi nihil eum officiis suscipit quas necessitatibus fugit sapiente veniam labore architecto facilis temporibus voluptates sunt, quod, excepturi maxime ipsa sint ipsam cupiditate provident dolores, eius at praesentium! Architecto autem totam dolores dicta inventore quasi modi dolorem, alias sed consectetur. Molestiae nam, possimus similique labore corrupti, deleniti ab repudiandae perspiciatis quasi, temporibus quisquam. Voluptatum ab quod qui neque. Nam vitae recusandae magni facilis inventore ipsa, quo adipisci ea, debitis, corrupti sit aliquam voluptatem veniam explicabo deserunt rem molestias accusantium hic officiis vel praesentium eum quaerat expedita. Quidem cumque hic tempora a?
            </p>
            </Box><br/>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cum tempore eligendi. Dolorum, dolorem aperiam, nobis quas eum earum dolores maxime, eaque ipsum nulla adipisci assumenda? Quae vel tempore obcaecati adipisci, accusantium in dolores quos aperiam magni illo expedita nihil provident dicta, ducimus omnis natus repellendus ex nostrum! Ipsa, facilis!
            </p><br/>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci excepturi molestiae mollitia, recusandae repellendus voluptas assumenda nihil error delectus consectetur, corrupti asperiores ipsam nemo laboriosam neque! Nisi fugit, iure magni eius consequatur suscipit inventore neque odio omnis aliquid dolores animi? Quod impedit sed eum ullam necessitatibus. Tempore magni rerum, facilis quo autem voluptatem. Vero autem iste incidunt perspiciatis totam ratione odit cum, blanditiis maiores nostrum dolore quasi eius culpa.
            </p><br/>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cum tempore eligendi. Dolorum, dolorem aperiam, nobis quas eum earum dolores maxime, eaque ipsum nulla adipisci assumenda? Quae vel tempore obcaecati adipisci, accusantium in dolores quos aperiam magni illo expedita nihil provident dicta, ducimus omnis natus repellendus ex nostrum! Ipsa, facilis!
            </p><br/>

            <Box sx={{"& a":{color:'black',padding:'0vw 0.5vw'}}}> 
              <Link><FacebookOutlinedIcon/></Link>
              <Link><TwitterIcon /></Link>
              <Link><InstagramIcon/></Link>
            </Box>
            
        </Box>

        <Box sx={{height:'100%',bgcolor:'',display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'85%',md:'50%',lg:'40%'},padding:'2vw 0vw'}}>
        <img src="https://images.unsplash.com/photo-1516734196005-9fa3de96bfe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RocyUyMHNob3B8ZW58MHx8MHx8fDA%3D" alt="vnt-store" style={{width:'100%'}}/>
        </Box>



    </Box>
  )
}

export default About
