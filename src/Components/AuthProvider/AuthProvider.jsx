
import { GithubAuthProvider, GoogleAuthProvider,  createUserWithEmailAndPassword,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase.config'
 

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
            setUser(currentUser)
            setLoading(false)
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