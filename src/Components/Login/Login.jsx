import React from "react";
import logo from "../../assets/images/login/login.svg";
import { BsFacebook, BsLinkedin, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../ManageAuth/UseAuth";
import axios from "axios";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, user } = UseAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        console.log(res.user);
        const userEmail = {email}
        axios.post(`https://car-server-site-rust.vercel.app//jwt`, userEmail,{
          withCredentials : true
        })
        .then(res => {
          if(res.data.success) {
            navigate(location?.state ? location.state : "/");
          }
        })
         
        
      })
      .catch((error) => console.log(error.message));
      if (user) {
        form.reset();
      }
  };

  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-20">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="border font-hebo w-1/3 p-10">
          <h1 className="text-center font-semibold text-3xl">Login</h1>
          <div className="mt-8">
            <form onSubmit={handleLogin}>
              <label htmlFor="">
                Email
                <input
                  className="block mb-3 outline-none px-3 py-2 rounded mt-2 border w-full"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Your Email"
                />
              </label>
              <label htmlFor="">
                Confirm Password
                <input
                  className="block mb-3 outline-none px-3 py-2 rounded mt-2 border w-full"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Your Password"
                />
              </label>
              <button
                type="submit"
                className="bg-[#FF3811] text-white w-full py-2 rounded"
              >
                Sign in
              </button>
            </form>
            <h1 className="text-sm font-light mt-3 text-center">
              or Sign up with
            </h1>

            <div className="flex items-center justify-center gap-3 mt-4">
              <BsFacebook className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
              <BsLinkedin className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
              <BsGoogle className="h-8 w-8 p-2 bg-gray-200 text--600 rounded-full" />
            </div>

            <h1 className="text-center font-light mt-4">
              Have an account?{" "}
              <Link to="/register" className="text-[#FF3811]">
                Register
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
