import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../routes/AuthProvider";


const Navbar = () => {

    const {user, signOutUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const logOutHandler =()=>{
        signOutUser()
        .then(()=>{
            alert("Log Out Success")
            navigate("/login")
        })
        .catch(err=>{
            alert("log Out Fail", err.message)
        })
    }

    return (
        <div className="flex justify-between py-6 px-12">
            <ul className="flex gap-10">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/dashboard">DashBoard</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                 
            </ul>
            {
                user?<>
                <p className="text-2xl">{user.displayName}</p>
                <button onClick={logOutHandler} className="btn">Log-Out</button>
                </>:
                <button onClick={()=> navigate("/login")} className="btn">Log-In</button>
            }
            
            
        </div>
    );
};

export default Navbar;