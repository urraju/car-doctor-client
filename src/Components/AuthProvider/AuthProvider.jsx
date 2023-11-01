
import { GithubAuthProvider, GoogleAuthProvider,  createUserWithEmailAndPassword,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase.config'
import axios from 'axios'
 

export const AuthContext = createContext()
const google = new GoogleAuthProvider()
const github = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,google)
    }
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,github)
    }
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email : userEmail}

            setUser(currentUser)
            setLoading(false)

            if(currentUser) {
                
                axios.post('https://car-server-site-rust.vercel.app/jwt' , loggedUser, {withCredentials : true})
                .then(res => {
                    console.log('token respons', res.data);
                })
            }else{
                axios.post('https://car-server-site-rust.vercel.app/logout', loggedUser , {withCredentials : true})
                .then(res => {
                    console.log('success data', res.data);
                })
            }


        })
        return () => unSubscribe()
    },[])

    const info = {
        googleLogin,
        githubLogin,
        register,
        loading,
        logout,
        login,
        user
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider