import { AppBar, Button, linkClasses, Toolbar, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
            <Toolbar>

                <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1}}>

                    <Link to="/" style={{color:'white',textDecoration:'none'}}>React</Link>
    
          </Typography>
          <Button color="inherit">
            <Link to="signup" style={{color:'white'}}>signup</Link></Button><br></br>
          <Button color="inherit"><Link to="/login" style={{color:'white'}}>login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>      

  )
}

export default Home


