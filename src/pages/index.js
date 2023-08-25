import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import { useState } from "react";
import Login from "../../components/Login";

export default function Home() {
  const [session, setSession] = useState(false);

  return (
    <div>
      <Head>
        <title>Facebook-Clone</title>
      </Head>
      {!session ? (
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
