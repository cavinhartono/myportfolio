import Image from "next/image";
import Header from "@/components/Header";
import Content from "@/components/Content";

export default function Home() {
  return (
    <main className="container px-[140px] py-20">
      <Header />
      <Content />
    </main>
  );
}
