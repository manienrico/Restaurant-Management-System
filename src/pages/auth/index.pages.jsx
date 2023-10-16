import React from 'react'

import './index.styles.css'
import { SignInForm,SignUpForm } from '../../components/components'

export default function AuthenticationPage() {
  return (
    <div className='auth-container'>
        <main>
            <SignInForm />
            <SignUpForm />
        </main>
    </div>
  )
}
