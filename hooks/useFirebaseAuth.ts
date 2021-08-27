import { useEffect, useState } from 'react'
import Firebase from '../services/firebase'

export function useFirebaseAuth(){
    const [authUser, setAuthUser] = useState<Firebase.User|null>();
    const [loading, setLoading] = useState<Boolean>(true);

  const authStateChanged = async (authState:Firebase.User|null) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return;
    }

    setLoading(true)
    setAuthUser(authState);    
    setLoading(false);
  };

  useEffect(() =>{
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged)

    return () => unsubscribe()
  }, [])

  return {
    authUser,
    loading
  };

}