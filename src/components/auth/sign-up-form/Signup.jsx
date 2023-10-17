//import { createAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase"

import { useState } from 'react'

import { Button, Input } from '../../components'

import { useNavigate } from 'react-router-dom'
import { createAuthUserWithEmailAndPassword } from '../../../utils/firebase/firebase'
//import { createAuthUserWithEmailAndPassword } from '../../../utils/firebase/firebase'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export default function Signup() {
  const [ formFields, setFormFields ] = useState(defaultFormFields)
  const { displayName,email,password,confirmPassword } = formFields

  //const navigate = useNavigate();
  
  

  
  const handleOnChange = (e)=>{
    const { name,value } = e.target
    setFormFields({...formFields, [name]:value})
  }

  const resetFormFields =()=>{
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    
    if(password !== confirmPassword){
      console.log("Passwords do not match!!!")
      return;
    }

    try{
      const response = await createAuthUserWithEmailAndPassword(email,password)
      console.log(response)
      
      resetFormFields()

      //navigate("home")

    }catch(error){console.log(error.message)}

  }

  return (
    <div>
      <h2>Sign up</h2>
      <span>Create an account with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label="Display name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleOnChange}
          required />
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          required />
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          required />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          required
        />
        <div>
          <Button type="submit">Sign up</Button>
        </div>
      </form>
    </div>
  )
}
