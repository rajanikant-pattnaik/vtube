
'use client';

import { createContext, Dispatch, SetStateAction } from "react";



interface ContextProps {
    id: string,
    setid: Dispatch<SetStateAction<string>>,
    username: string,
    setusername: Dispatch<SetStateAction<string>>,
    email: string,
    setemail: Dispatch<SetStateAction<string>>,
}

const UserContext = createContext<ContextProps>({
    id: '',
    setid: (): string => '',
    username:'',
    setusername:():string=>'',
    email:'',
    setemail:():string=>''
})
export const UserContextProvider=UserContext.Provider;
export default UserContext;

