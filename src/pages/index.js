import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook-Clone</title>
      </Head>
      <main>
        <Navbar />
      </main>
    </div>
  );
}
