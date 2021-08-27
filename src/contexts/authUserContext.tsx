import { createContext, useContext, ReactNode } from 'react'
import {useFirebaseAuth} from '../hooks/useFirebaseAuth';

type authUserContextProviderProps = {
    children: ReactNode
}

const authUserContext = createContext({});

export function AuthUserProvider({ children }: authUserContextProviderProps) {
  const auth = useFirebaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
