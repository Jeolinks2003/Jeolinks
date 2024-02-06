import {Box, Button, Divider, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardDoubleArrowRightRounded from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

const Feedback = () => {
  const classes = useState()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [reachs, setReachs] = useState('')
  const [fullNameError, setFullNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneNoError, setPhoneNoError] = useState(false)
  const [reachsError, setReachsError] = useState(false)
const handleSubmit = (e) => {
  e.preventDefault()

  setFullNameError(false)
  setEmailError(false)
  setPhoneNoError(false)
  setReachsError(false)

  if(fullName == ''){
    setFullNameError(true)
  }
  if (email =='') {
    setEmailError(true)
  }
  if (phoneNo =='') {
    setPhoneNoError(true)
  }
  
  if (reachs =='') {
    setReachsError(true)
  }

  if (fullName && email && phoneNo && reachs) {
    // alert('A name was submitted: ' + this.target.value);
    alert( 'the following details was provided' +  fullName+  email+ phoneNo+ reachs)
  }
}


  return (
    <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit}>
    <Typography variant='h6'>FEEDBACK FORM</Typography>
    <TextField onChange={(e) => setFullName(e.target.value)} error={fullNameError} required label="Please enter your full name" 
    size="small" variant='standard' type='text' color='primary'sx={{ width:'100%',}}/>
    <TextField onChange={(e) => setEmail(e.target.value)} error={emailError} required label="Please enter your email address" 
    size="small" variant='standard' type='text' color='primary'sx={{ width:'100%',}}/>
    <TextField onChange={(e) => setPhoneNo(e.target.value)} error={phoneNoError} required label="Please Enter Your Phone Number"
    size="small" variant='standard' type='number' color='primary'sx={{ width:'100%',}}/>
    <FormLabel >Contact method preference</FormLabel>
    <RadioGroup required onChange={(e) => setReachs(e.target.value)}  error={setReachsError}
    row
    aria-labelledby="group-label"
    name="buttons-group"
    >
    <FormControlLabel value="Phone" control={<Radio />} label="Phone" />
    <FormControlLabel value="Email" control={<Radio />} label="Email" />
    <FormControlLabel value="Do not contact" control={<Radio />} label="Do not contact" />
    </RadioGroup>
    <FormLabel >How can we help?</FormLabel>
    <Divider/>
    <FormLabel>TIP: Use the handle in the bottom-center or bottom-right corner to
    expand the text field.</FormLabel>
    <Button  variant='outlined' color='secondary' type='submit'endIcon={<KeyboardDoubleArrowRightRounded />} sx={{display:'flex', marginTop:'10px'}} > Submit</Button>
  </Box>
  )
}

export default Feedback
