import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box sx={{ mt: 'auto', p: '0.2rem', bgcolor: '#efefef', zIndex:1201 }}>
        <Typography sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
        ©debadityasingh8@gmail.com <a style={{textDecoration: 'none'}} target="_blank" href="https://github.com/debadityasingh8972">Github</a>, <a style={{textDecoration: 'none'}} target="_blank" href="https://www.linkedin.com/in/debaditya-singh-402846198/">Linkedin</a>
        </Typography>
      </Box>
  )
}

export default Footer