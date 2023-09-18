import { useState } from 'react'

import { Button, Input } from '../../components'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export default function Signup() {
  const [ formFields, setFormFields ] = useState(defaultFormFields)
  const { displayName,email,password,confirmPassword } = formFields

  const resetFormFields=()=>{
    setFormFields(defaultFormFields)
  }

  return (
    <div>
      <h2>Sign up</h2>
      <span>Create an account with your email and password</span>
      <form>
        <Input />
        <Input />
        <div>
          <Button>Sign up</Button>
        </div>
      </form>
    </div>
  )
}
