"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Content from "@/components/Content";

export default function Home() {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".customcursor");
      let width = cursor.offsetWidth;
      let height = cursor.offsetHeight;

      setTimeout(() => {
        cursor.style.left = `${e.pageX - width}px`;
        cursor.style.top = `${e.pageY - height}px`;
      }, 20);
    });
  });

  return (
    <section className="container px-[140px] py-20">
      <Header />
      <Content />
      <div className="-z-10 customcursor absolute block w-24 h-24 bg-blue-400 blur-3xl"></div>
    </section>
  );
}
