import { createContext, useEffect, useReducer} from "react";
import auth from "./reducers/auth";
import authInitialState from "./initialStates/authInitialState";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(auth, [], () =>{
        const localData = sessionStorage.auth;
        return localData ? JSON.parse(localData): authInitialState;
    });

    useEffect(()=>{
        sessionStorage.auth = JSON.stringify(authState);
    },[authState]);

    return (
        <GlobalContext.Provider
            value={{
                authState,
                authDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};