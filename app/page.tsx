import Image from "next/image";
import { Button } from "@/components/ui/button"
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Testimonials from "./_components/Testimonials";
import Footer from "./_components/Footer";
import Announcement from "./_components/Announcement";
import Section from "./_components/Section";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black via-[#19163d] to-black text-white">
      <Announcement/>
      <Header />
      <Hero />
      <Section/>
      <Testimonials />
      <Footer/>
   </div>
  );
}
