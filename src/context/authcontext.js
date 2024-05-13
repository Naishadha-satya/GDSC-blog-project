import { createContext, useEffect, useState  } from "react";
import axios from "axios";
export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const[currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") )|| null);
    const Login =async(inputs)=> {
        const res=await axios.post("/auth/login",inputs);
        setCurrentUser(res.data);
    };

    const Logout =async(inputs)=> {
        await axios.post("/auth/logout");
        setCurrentUser(null);
    };
useEffect(()=>{
localStorage.setItem("user",JSON.stringify(currentUser));
},[currentUser]);
return(
    <AuthContext.Provider value={{currentUser,Login,Logout}}>{children}</AuthContext.Provider>
);
}