import { Children, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { DotLoader } from "react-spinners";


const PrivateRoute = ({children}) => {
  
    const {user,loader} = useContext(AuthContext);

    if(loader){
        return <DotLoader />
    }

    if(user){
        return children
    }
    

    return (
        <div>
           
         <Navigate to="/login"></Navigate>   
        </div>
    );
};

export default PrivateRoute;