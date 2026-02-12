import { useState } from "react";
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import logoBig from "../assets/logoBig.svg";
import { useNavigate } from "react-router-dom";



const AuthForm = ({ defaultMode = "signup" }) => {
 const navigate = useNavigate();

  const [mode, setMode] = useState(defaultMode);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "signup") {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User signed up:", userCredential.user);
      } 
        // login logic 
      
      if (mode === "login") {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User logged in:", userCredential.user);
      }

       // ✅ redirect AFTER success
    navigate("/");


    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
};

return (
    <div className="bg-neutral-900 max-w-2xl w-full rounded-md  px-8 py-8 text-white">
        <div className="flex flex-col gap-6"> 
            <div className="flex flex-col gap-6">
                {/* Logo */}
                    <div>
                        <img src={logoBig} alt="company logo" />
                    </div>
                    {/* Title */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">
                        {mode === "signup" ? "Create an account" : "Welcome back"}
                        </h2>
                    </div>
            </div>


            <div>  
                {/* Form */}
                <div className="">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">    
                        <div className="flex flex-col gap-3">   
                            <div className="">
                                <input type="email" placeholder="Email Address" 
                                className="w-full py-3 px-1.5 rounded-md bg-neutral-800 outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                            </div>
                                
                            <div  className="">
                                <input type="password" placeholder="Password" 
                                className="w-full py-3 px-1.5 rounded-md bg-neutral-800 outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                 required
                                />
                            </div>
                        </div>  

                       
                            <button 
                            type="submit"
                            disabled={loading}
                            className=" bg-[#703BF7] rounded-3xl py-3 disabled:opacity-50" 
                            >
                                  {loading
                                    ? "Creating account..."
                                    : mode === "signup"
                                    ? "Proceed"
                                    : "Log in"}
                            </button>
                        
                    </form> 

                    {/* Error */}
                    {error && (
                        <p className="text-red-500 text-sm mt-2">
                         {error}
                        </p>
                    )}
                </div>

                <div>
                     {/* Switch mode */}
                    <p className="text-sm mt-4">
                        {mode === "signup" ? (
                        <>
                            Already have an account?{" "}
                            <button type="button" onClick={() => setMode("login")}>
                                Log in
                            </button>
                        </>
                        ) : (
                        <>
                            New here?{" "}
                            <button  type="button" onClick={() => setMode("signup")}>
                                Sign up
                            </button>
                         </>
                        )}
                    </p>
                </div>
            </div>
        </div>

      
    </div>
  );
};

export default AuthForm;
