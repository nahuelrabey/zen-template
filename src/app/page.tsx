import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Service from "@/components/Services";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Headline/>
        <Service/>
      </main>
      <Footer/>
    </>
  );
}
