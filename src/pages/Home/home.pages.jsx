import { React,useContext }from 'react'

import { UserContext } from '../../context/user.context'

import { useNavigate } from 'react-router-dom'

import './home.styles.css'


export default function HomePage() {
  const { currentUser } = useContext(UserContext)
  //console.log(currentUser)

  const navigate = useNavigate()

  const handleSignOut =()=>{
    navigate("/")
    // try {
    //   if(currentUser){
    //     navigate("/")
    //   }else return;
    // } catch (error) {
    //   console.log(error.message)
    // }
  }

  return (
    <div className="home-container">
      <div className='test-content'>
        <h1>Welcome</h1>
        <p>This is the Hotels management system dashboard.</p>
      </div>
      <div className='test-signout'>
        <div className='test-btn' onClick={handleSignOut}>SignOut</div>
      </div>
      
    </div>
  )
}
