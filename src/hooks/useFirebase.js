import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google Sign in
    const signInUsingGoogle = () => {
        setIsLoading(false)
        return signInWithPopup(auth, googleProvider)
    }

    // Logout
    const logOut = () => {
        signOut(auth).then(() => {
            setUser(null)
        }).catch(error => {
            setError(error.message)
        })
    }

    // observe user state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
            setIsLoading(false)
        })
    }, [])

    return {
        user,
        error,
        setUser,
        setError,
        auth,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signInUsingGoogle,
        logOut,
        setIsLoading,
        isLoading
    }
}

export default useFirebase;