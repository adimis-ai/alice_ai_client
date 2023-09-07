import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 

const LoginButton = () => {
  //2.
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div>
        <div className="relative min-h-screen grid bg-[#1A232E]">
            <div className="gradient-01 z-0 absolute"></div>
            <div className="gradient-02 z-0 absolute"></div>
          <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
            <div
              className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative"
              style={{
                backgroundImage:
                  "url(https://3.bp.blogspot.com/-jpu8UGjJiaw/Xqi6qD09yyI/AAAAAAAAOi4/v_geG2os4sYGigNUSjNMf7mpBKkXeko5gCLcBGAsYHQ/w1920-d/cyberpunk-wallpaper-hd.jpg)"
              }}
            >
            </div>
            <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none sm:flex-col sm:justify-center">
              <div className="max-w-xl w-full space-y-12">
                <div className="lg:text-left text-center">
                  <h2 className="mt-6  font-bold text-gray-100">
                  </h2>
                  <h2 className="mt-6 text-left font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:text-8xl sm:text-left lg:text-left">
                    Get any of your Problem Solved
                  </h2>
                  <p className="mt-10 text-4xl text-pink-200 text-left">Get Stated today.</p>
                </div>
                <div className="flex flex-row justify-center items-center space-x-3" />
                <div className="">
                <button
                  onClick={() => loginWithRedirect()}
                  type="submit"
                  className="mt-10 sm:mt-auto lg:w-3/5 w-full flex justify-center text-gray-100 p-4 rounded-xl tracking-wide font-bold  focus:outline-none focus:shadow-outline hover:bg-black/80 hover:text-blue-200 shadow-xl shadow-pink-500/20 bg-black/20 cursor-pointer transition ease-in duration-300"
                >
                  Get Started
                </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

//3.
export default LoginButton;