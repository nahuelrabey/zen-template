import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Service from "@/components/Services";
import { Footer } from "@/components/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://i.ibb.co/WPCj1rT/Create-Next-App.png"
        />
      </Head>
      <Header />
      <main>
        <Headline />
        <Service />
      </main>
      <Footer />
    </>
  );
}
