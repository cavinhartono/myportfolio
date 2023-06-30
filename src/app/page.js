"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Content from "@/components/Content";

export default function Home() {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".customcursor");

      setTimeout(() => {
        cursor.style.left = `${e.pageX - cursor.offsetWidth}px`;
        cursor.style.top = `${e.pageY - cursor.offsetHeight}px`;
      }, 20);
    });
  });

  return (
    <main className="container px-[140px] py-20">
      <Header />
      <Content />
      <div className="-z-10 customcursor absolute top-0 left-0 block w-[500px] h-[500px] bg-blue-200 blur-[240px] transition"></div>
    </main>
  );
}
