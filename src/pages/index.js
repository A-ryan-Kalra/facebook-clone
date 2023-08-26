import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import { useEffect, useState } from "react";
import Login from "./login";
import { sessionState } from "../../atoms/modalAtoms";
import { useRecoilState } from "recoil";

export default function Home() {
  const [session, setSession] = useRecoilState(sessionState);
  let token;

  useEffect(() => {
    token = JSON.parse(sessionStorage.getItem("Token"));
    // console.log(token);
    if (!token) {
      <Login />;
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Facebook-Clone</title>
      </Head>
      {session.length === 0 ? (
        <Login />
      ) : (
        <main>
          <Navbar />
          <div className="flex max-w-[1523px] mx-auto min-h-screen ">
            <Sidebar />
            <Feed />
          </div>
        </main>
      )}
    </div>
  );
}
