import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google sign in 
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }



    // Log out function 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUsers({})
            })
            .finally(() => setIsLoading(false));
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    })



    return {

        users,
        isLoading,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;