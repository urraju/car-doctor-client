
import React from 'react'
import UseAuth from '../ManageAuth/UseAuth'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRout = ({children}) => {
    const location = useLocation()
    const {user, loading} = UseAuth()
    if(user?.email) {
        return children
    }
    if(loading){
        return <progress className="progress w-full  "></progress>
    }
    return <Navigate to='/login' state={location.pathname} replace></Navigate>
    
}

export default PrivateRout