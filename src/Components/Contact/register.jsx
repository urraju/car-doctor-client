import React from "react";
import logo from "../../assets/images/login/login.svg";
import { BsFacebook, BsLinkedin, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import UseAuth from "../ManageAuth/UseAuth";
const Register = () => {
    const {register, user} = UseAuth()
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value;
        const userInfo = {name,email, password}
        console.log(userInfo);
        register(email, password)
        .then(res => console.log(res.user))
        .catch(error => console.log(error.message))
        if(user) {
          form.reset()
        }
    }
  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-20">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="border font-hebo w-1/3 p-10">
          <h1 className="text-center font-semibold text-3xl">Sign Up</h1>
          <div className="mt-8">
            <form onSubmit={handleRegister}>
              <label htmlFor="">
                Name
                <input
                  className="block mb-3 outline-none px-3 py-2 rounded mt-2 border w-full"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your Name"
                />
              </label>
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
                Sign Up
              </button>
              <h1 className="text-sm font-light mt-3 text-center">
                or Sign up with
              </h1>
            </form>

            <div className="flex items-center justify-center gap-3 mt-4">
              <BsFacebook className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
              <BsLinkedin className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
              <BsGoogle className="h-8 w-8 p-2 bg-gray-200 text--600 rounded-full" />
            </div>

            <h1 className="text-center font-light mt-4">
              Already Have an account?{" "}
              <Link to="/login" className="text-[#FF3811]">
                Login
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


