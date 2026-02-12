import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";


const Login = () => {
    const navigate = useNavigate();

  return (

    <div className="min-h-screen flex items-center justify-center relative">

         {/* Close Button */}
        <button
            onClick={() => navigate("/")}
            className="absolute top-6 right-6 text-neutral-400 hover:text-white"
        >
            <X size={28} />
        </button>
        
      <AuthForm defaultMode="login" />
    </div>
  );
};

export default Login;