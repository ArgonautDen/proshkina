import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { UrgentCare } from "@/components/sections/UrgentCare";
import { Lecturing } from "@/components/sections/Lecturing";
import { Contacts } from "@/components/sections/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <UrgentCare />
        <Lecturing />
        <Contacts />
      </main>
    </>
  );
}
