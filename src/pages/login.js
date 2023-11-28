import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../../firebaseConfig";
import { sessionState } from "../../atoms/modalAtoms";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import Home from "@/pages";
import { app } from "../../firebaseConfig";
function Login() {
  const [session, setSession] = useRecoilState(sessionState);
  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();
  const [data, setData] = useState({});
  const router = useRouter();
  const [buttonColor, setButtonColor] = useState("#1777F2");

  function signInwithEmailAndPassword12(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        setSession(response.user);
        sessionStorage.setItem("Token", JSON.stringify(response.user));
        router.push("/");
        router.reload();
      })
      .catch((err) => alert(err));
  }

  function signIn() {
    signInWithPopup(auth, GoogleProvider)
      .then((response) => {
        setSession(response.user);
        sessionStorage.setItem("Token", JSON.stringify(response.user));
        router.push("/");
        router.reload();
      })
      .catch((err) => alert(err));
  }

  function inputHandler(e) {
    let newInput = { [e.target.name]: e.target.value };

    setData({ ...data, ...newInput });
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // console.log("yipee");
    }
  };
  function signUp(e) {
    e.preventDefault();
    setButtonColor("#9CB5D9");

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        setSession(response.user);
        sessionStorage.setItem("Token", JSON.stringify(response.user));
        router.push("/");
        router.reload();
      })
      .catch((err) => {
        alert(err);
        router.reload();
      });
  }

  useEffect(() => {
    let token = JSON.parse(sessionStorage.getItem("Token"));

    if (token) {
      setSession(token);
      // console.log(session);
      router.push("/");
    }
  }, []);

  return (
    <div className="flex justify-center items-center  min-h-screen">
      <div className=" lg:justify-center flex-col lg:flex-row flex lg:w-9/12 lg:h-[70vh]  ">
        <div className="relative flex  flex-col items-start top-[25%]  lg:px-10 pb-10 h-fit max-lg:mx-auto translate-y-[-25%] w-6/12">
          <img
            src="/facebooklogin.svg"
            className="lg:h-24 h-[150px] w-[200px] lg:-ml-[26px]"
            alt=""
          />

          <p className="text-2xl hidden lg:block">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="flex flex-col relative top-[25%] translate-y-[-25%] bg-[#FFFEFE] pb-4 rounded-lg shadow-xl w-[396px]  h-fit">
          <div className="flex-col mt-4 flex gap-3 p-2">
            <form action="" className="flex-col  flex gap-3 ">
              <input
                type="email"
                className="border-2 h-12 rounded-lg px-5 outline-none focus:ring-1 text-[17px] focus:placeholder-[#CFD0D6]"
                placeholder=" any email or phone number"
                name="email"
                onChange={(e) => inputHandler(e)}
              />
              <input
                type="password"
                className="border-2 h-12 rounded-lg px-5 outline-none focus:ring-1 text-[17px] focus:placeholder-[#CFD0D6]"
                placeholder="Password"
                name="password"
                onChange={(e) => inputHandler(e)}
              />
              <input
                type="submit"
                style={{ backgroundColor: buttonColor }}
                className={` border-2 h-12 rounded-lg text-center outline-none focus:ring-2 focus:ring-blue-400 text-lg font-semibold text-[#FFFEFE] cursor-pointer checked:bg-black `}
                value={"Log in"}
                onClick={(e) => signInwithEmailAndPassword12(e)}
              ></input>
            </form>

            <hr className="mt-4  border-gray-300" />
            <button
              className="bg-[#63B82C] hover:bg-[#559e24] text-[12px]  whitespace-nowrap border-2 h-12 w-6/12 mx-auto rounded-full text-center lg:text-[16px] font-semibold text-[#FFFEFE]"
              // onKeyDown={(event) => handleKeyDown(event)}
              onClick={(e) => signUp(e)}
            >
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
