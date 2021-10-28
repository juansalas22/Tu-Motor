import { getAuth, signInWithPopup, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';

import { startLoading, finishLoading } from './ui';
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch( startLoading() );
        
        const auth = getAuth();
        signInWithEmailAndPassword( auth, email, password )
            .then( ({ user }) => {
                dispatch(login( user.uid, user.displayName ));
            })
            .catch( e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })
            .finally(()=>{
                dispatch( finishLoading() );
            })

        
        
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)

export const startLogout = () => {
    return async( dispatch ) => {
        const auth = getAuth();
        await signOut(auth);

        dispatch( logout() );
    }
}


export const logout = () => ({
    type: types.logout
})

