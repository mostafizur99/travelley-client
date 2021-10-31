import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // const facebookProvider = new FacebookAuthProvider();

    // google sign in 
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }

    // Facebook sign in 
    /* const signInUsingFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    } */

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

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordConfirm, setPasswordConfirm] = useState('');
    // const [error, setError] = useState('');

    // const handleNameChange = e => {
    //     setName(e.target.value);
    // }
    // const handleEmailChange = e => {
    //     setEmail(e.target.value)
    // }
    // const handlePasswordChange = e => {
    //     setPassword(e.target.value)
    // }
    // const handlePasswordConfirm = e => {
    //     setPasswordConfirm(e.target.value)
    //     console.log(e.target.value)
    // }

    // registration function 
    /* const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (password !== passwordConfirm) {
            setError('Both password fields must be identic')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        createUserWithEmailAndPassword(auth,
            email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    } */

    // name-field at registraton form
    /* const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    } */

    // reset password at login 
    // const handleResetPassword = () => {
    //     sendPasswordResetEmail(auth, email)
    //         .then(result => { })
    // }



    // log in function 
    // const handleLogIn = (e) => {
    //     e.preventDefault();
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    return {
        // handleNameChange,
        // handleEmailChange,
        // handlePasswordChange,
        // handlePasswordConfirm,
        // handleRegistration,
        // error,
        // handleLogIn,
        // handleResetPassword,
        users,
        isLoading,
        signInUsingGoogle,
        // signInUsingFacebook,
        logOut
    }
};

export default useFirebase;