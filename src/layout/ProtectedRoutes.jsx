import { Outlet,useLocation,useNavigate } from "react-router-dom";

import React from 'react'

export default function ProtectedRoutes() {
    const location = useLocation()
  return (
    <>Protected routes</>
  )
}
