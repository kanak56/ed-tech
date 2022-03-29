import { AppBar, Box, Button,  Grid,  Toolbar, Typography } from '@mui/material';


import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
 
        <Grid container spacing={2}>
 
  <Grid item xs={6} md={4}>
  <nav >
            <input type="text" name="" id="" placeholder='Search' />
            
        </nav>
  </Grid>
  <Grid item xs={7} md={8}>
 <div style={{display:"flex", justifyContent:'center'}}>
 <Link style={{textDecoration:'none', color:'yellow', fontFamily: 'Lobster', fontSize:'30px'}} to='/'>ED-TECH</Link>
 </div>
  </Grid>
</Grid>
          <Typography sx={{ flexGrow: 1 }} container  spacing={4} >
          
          </Typography >
          <Button color="inherit">
          <Link style={{textDecoration:'none', color:'white'}} to="/">Home</Link></Button>
          <Button color="inherit">
          <Link style={{textDecoration:'none', color:'white'}} to="signUp">SignUp</Link></Button>
          <Button color="inherit">       
              <Link style={{textDecoration:'none', color:'white'}} to='login'>Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
        
    );
};

export default Navbar;