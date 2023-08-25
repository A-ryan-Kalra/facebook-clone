import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from "../firebaseConfig";

function Login() {
  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();

  function signIn() {
    signInWithPopup(auth, GoogleProvider)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => alert(err));
  }

  return (
    <div className="flex justify-center items-center  min-h-screen">
      <div className=" justify-center  flex w-9/12 h-[70vh] ">
        <div className="relative flex flex-col items-start top-[25%]  px-10 h-fit translate-y-[-25%] w-6/12">
          <img src="/facebooklogin.svg" className="h-24 -ml-[26px]" alt="" />

          <p className="text-2xl">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="flex flex-col relative top-[25%] translate-y-[-25%] bg-[#FFFEFE] pb-4 rounded-lg shadow-xl w-[396px]  h-fit">
          <div className="flex-col mt-4 flex gap-3 p-2">
            <input
              type="text"
              className="border-2 h-12 rounded-lg px-5 outline-none focus:ring-1 text-[17px] focus:placeholder-[#CFD0D6]"
              placeholder="Email address  or phone number"
            />
            <input
              type="text"
              className="border-2 h-12 rounded-lg px-5 outline-none focus:ring-1 text-[17px] focus:placeholder-[#CFD0D6]"
              placeholder="Password"
            />
            <button className="bg-[#1777F2] border-2 h-12 rounded-lg text-center  text-lg font-semibold text-[#FFFEFE]">
              Log in
            </button>
            <p className="text-center text-[#257BF2] text-sm -tracking-wide underline cursor-pointer">
              Forgotten password?
            </p>
            <hr className="mt-4  border-gray-300" />
            <button className="bg-[#63B82C] hover:bg-[#559e24] text-[12px]  whitespace-nowrap border-2 h-12 w-6/12 mx-auto rounded-full text-center lg:text-[16px] font-semibold text-[#FFFEFE]">
              Create a new account
            </button>
            <button
              className="bg-[#1777F2] text-[12px]  whitespace-nowrap border-2 h-12 w-6/12 mx-auto rounded-full text-center lg:text-[16px] font-semibold text-[#FFFEFE] hover:bg-[#2a6bba]"
              onClick={signIn}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
