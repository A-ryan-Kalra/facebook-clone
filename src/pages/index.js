import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import ColorChangingGrid from "../../components/Sidebar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook-Clone</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <ColorChangingGrid />
      </main>
    </div>
  );
}
