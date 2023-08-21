import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook-Clone</title>
      </Head>
      <main>
        <Navbar />
        <div className="  w-[1523px] mx-auto min-h-screen ">
          <Sidebar />
        </div>
      </main>
    </div>
  );
}
