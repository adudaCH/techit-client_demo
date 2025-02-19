import React, { createContext, useState, ReactNode } from "react";
import { User } from "../interfaces/User";




interface UserContextType {
user: User | null;

    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<
    | {
        user: User | undefined;
        setUser: React.Dispatch<React.SetStateAction<User>> | undefined;
    
    }
    | undefined
>(undefined); 

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [user, setUser] = useState<User>({
        name: "",
        email:  "",
        password: "",
    }); 

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

