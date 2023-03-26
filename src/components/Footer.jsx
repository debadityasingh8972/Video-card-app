import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box sx={{ mt: 'auto', p: '0.2rem', bgcolor: '#efefef', zIndex:1201 }}>
        <Typography sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
        © Namanj413@gmail.com <a style={{textDecoration: 'none'}} target="_blank" href="https://github.com/Namanj413">Github</a>, <a style={{textDecoration: 'none'}} target="_blank" href="https://www.linkedin.com/in/namanj413">Linkedin</a>
        </Typography>
      </Box>
  )
}

export default Footer