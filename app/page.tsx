import Image from "next/image";
import Hero from "./_components/hero/Hero";
import About from "./_components/about/About";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
      </div>
    </main>
  );
}
