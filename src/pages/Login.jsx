import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../routes/AuthProvider";


const Login = () => {
  const {logInUser, signWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate()
 
    const logInHandler= e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
          
        logInUser(email, password)
        .then(data=>{
          console.log(data.user)
          e.target.reset()
          navigate("/")
          
        })
        .catch(err=>{
          console.log(err)
        })
    }

    const googleLogin=()=>{
      signWithGoogle()
      .then(()=>{
        navigate("/")
      })
      .catch(err=>{
        console.log(err)
      })
    }

    return (
        <div className="flex flex-col justify-center items-center p-12">
            <h1 className="text-2xl mb-6 font-medium text-center">Log In Now</h1>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
             <form onSubmit={logInHandler} className="card-body">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input type="email" name="email" placeholder="email" className="input input-bordered" required />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                 <label className="label">
                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                 </label>
               </div>
               <div className="form-control mt-6">
                 <button className="btn btn-primary">Log-in</button>
               </div>
               <div className="form-control mt-6">
                 <p className="">Do not Have an Account?  
                    <Link to="/register"><span className="text-blue-600 underline"> Register Now</span></Link>
                 </p>
               </div>
               <div className="form-control mt-6">
                 <button onClick={googleLogin} className="border-2 p-3 rounded-xl">LogIn With Google</button>
               </div>
             </form>
           </div>
            
        </div>
    );
};

export default Login;