"use client";
import { useState, useEffect } from "react";
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
    <section className="container px-[140px] py-20">
      <Header />
      <Content />
      <div className="-z-10 customcursor absolute top-0 left-0 block w-32 h-32 bg-blue-400 blur-3xl transition"></div>
    </section>
  );
}
