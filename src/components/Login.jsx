import React, { useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import axios from 'axios';
import { server } from "../server";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/");
    }
  }, [])
  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post(
      `${server}/user/login-user`,
      {
        email,
        password,
      },
      { withCredentials: true }
    )
    .then((res) => {
      toast.success("Login Success!");
      navigate("/");
      window.location.reload(true); 
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    })
  };
  return (
    <>
    <Navbar/>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={e => handleSubmit(e)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
                  value={email}

                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <a href="/ResetPassword" className="font-semibold text-pink-500 hover:text-gray-900">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-pink-500 hover:bg-pink-300">Sign in</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
         not a user
          <Link to="/Signup" className="text-pink-500 pl-2  hover:text-pink-300">
                Signup
              </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
