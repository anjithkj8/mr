import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
       <h1>
        welcome to react
      </h1>
      <input placeholder='email'></input><br></br>
      <input placeholder='password'type='password'></input>
      <br>
      </br>
      <button>login</button>
      <Typography variant='h1'>welcome to react</Typography>
      <TextField label='email'variant='outlined'/>
      <TextField label='password'variant='standard'/><br></br>
      <Button variant='contained' color='primary'>login</Button>
    </div>
  )
}

export default Login
