import React from "react";

const Login = () => {
  return (
    <div className="w-[80%] mx-auto grid grid-cols-2 items-center justify-center my-[50px]">
      <div className=" p-[60px]">
        <h3>Welcome Back 👋</h3>
        <p className="max-w-[350px]">
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>
        <div className="flex flex-col gap-2  max-w-[300px] ">
          <h6>Email</h6>
          <input
            type="text"
            placeholder="Email"
            className="border-gray-400 border-[1.5px] p-1 rounded-[5px] "
          />
          <h6>Password</h6>
          <input
            type="password"
            placeholder="Password"
            className="border-gray-400 border-[1.5px] p-1 rounded-[5px] "
          />
          <span className="text-end text-blue-500">Forgot Password?</span>
          <button className=" bg-gray-800 rounded p-1 text-white">
            Sign in
          </button>
          <div className="grid [grid-template-columns:40%_10%_40%] items-center justify-center gap-[10px] mt-3">
            <hr />
            or
            <hr />
          </div>
          <div className="mt-4">
            <button className=" bg-gray-200 rounded p-1 w-full flex items-center justify-center gap-2">
              <img src="../public/Images/Google.png" alt="" />
              Sign in with Google
            </button>
          </div>
          <div className=" mt-2">
            <button className=" bg-gray-200 rounded p-1 w-full flex items-center justify-center gap-2 ">
              <img src="../public/Images/Facebook.png" alt="" />
              Sign in with Facebook
            </button>
          </div>
          <p className="text-center mt-4">Do you have account?<a href="">Signup</a></p>
        </div>
      </div>
      <div>
        <img src="../public/Images/Art.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
