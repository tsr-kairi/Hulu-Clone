import Head from "next/head";
import Hero from "../components/Hero/Index";
import BillBoard from "../components/BillBoard";
import Series from "../components/Series";
import SpotLight from "../components/SpotLight";
import PlanSection from "../components/PlanSection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="h-auto w-full">
      <Head>
        <title>Hulu-Clone</title>
      </Head>
      <Hero />
      <Series />
      <BillBoard />
      <SpotLight />
      <PlanSection />
      <Footer />
    </main>
  );
}
