import React from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from '../../components/layouts/Inputs/Input';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

const navigate = useNavigate();

//Handle Login Form Submit
const hadleLogin = async (e) => {}


  return (
    <AuthLayout>
    <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
    <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
    <p className="text-xs text-slate-700 mt-[5px] mb-6">
      Please enter your details to log in to your account.
    </p> 

    <form onSubmit={hadleLogin}>
      <Input
      value={email}
      onChange={({target}) => setEmail(target.value)}
      label="Email Address"
      placeholder="john@example.com"
      type="text"
      />
    </form>
    </div>
   </AuthLayout>
  )
}
 
export default Login
