import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook-Clone</title>
      </Head>
      <main>
        <Navbar />
        <div className="flex max-w-[1523px] mx-auto min-h-screen ">
          <Sidebar />
          <Feed />
        </div>
      </main>
    </div>
  );
}
