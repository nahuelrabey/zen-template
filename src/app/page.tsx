import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Service from "@/components/Services";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import type { Metadata } from 'next';
 

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
  openGraph:{
    images:["https://i.ibb.co/WPCj1rT/Create-Next-App.png"]
  }
};
 
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Headline />
        <Service />
      </main>
      <Footer />
    </>
  );
}
