import Header from "@/components/Header";
import style from "./page.module.scss";
import Image from "next/image";
import Headline from "@/components/Headline";
import Service from "@/components/Services";
export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Headline/>
        <Service/>
      </main>
    </>
  );
}
