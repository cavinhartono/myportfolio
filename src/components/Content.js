import Image from "next/image";
import Link from "next/link";
import Velsnesia from "@/components/assets/Velsnesia.png";
import Shopcube from "@/components/assets/Shopcube.png";
import Furnitur from "@/components/assets/furnitur.png";
import Footer from "./Footer";

export default function Content() {
  return (
    <div className="absolute right-0 w-[calc(100%-600px)] py-20 px-[140px] flex flex-col justify-end">
      <section id="about" className="w-full max-h-screen">
        <p className="text-lg text-black-400 text-justify">
          Hi, I&#39;ve created products for companies and businesses website
          with <span className="text-black-600">focus on fast, elegant </span>
          and{" "}
          <span className="text-black-600"> accessible user experiences</span>.
          Before now, I was{" "}
          <span className="text-black-600"> Fullstack Developer Intern </span>{" "}
          at
          <span className="text-black-600"> Webhade Creative</span>, where I
          created on Point of Sale website
        </p>
        <p className="text-lg text-black-400 my-4 text-justify">
          Here are a few technologies I&#39;ve been working with recently:
        </p>
        <ul className="flex gap-12 my-4 px-6">
          <ul className="list-disc marker:text-blue-600">
            <li className="text-lg text-black-400">JavaScript</li>
            <li className="text-lg text-black-400">PHP</li>
            <li className="text-lg text-black-400">Java and Golang</li>
          </ul>
          <ul className="list-disc marker:text-blue-600">
            <li className="text-lg text-black-400">React and Vue</li>
            <li className="text-lg text-black-400">Laravel</li>
            <li className="text-lg text-black-400">MySQL and NoSQL </li>
          </ul>
        </ul>
      </section>
      <section id="projects" className="w-full my-6 max-h-screen">
        <ul>
          <li className="w-full flex items-center gap-8">
            <Image
              src={Velsnesia}
              width={500}
              height={500}
              className="w-40 h-24 rounded-lg"
              alt="Project 1"
            />
            <ul>
              <li className="w-full">
                <h2 className="text-lg text-blue-500">Velsnesia</h2>
                <p className="text-md text-black-600">Vue and SASS</p>
              </li>
            </ul>
          </li>
          <li className="w-full flex items-center gap-8 my-6">
            <Image
              src={Shopcube}
              width={500}
              height={500}
              className="w-40 h-24 rounded-lg"
              alt="Project 1"
            />
            <ul>
              <li className="w-full">
                <h2 className="text-lg text-blue-500">Shopcube</h2>
                <p className="text-md text-black-600">Laravel</p>
              </li>
            </ul>
          </li>
          <li className="w-full flex items-center gap-8">
            <Image
              src={Furnitur}
              width={500}
              height={500}
              className="w-40 h-24 rounded-lg"
              alt="Project 1"
            />
            <ul>
              <li className="w-full">
                <h2 className="text-lg text-blue-500">Furnitur</h2>
                <p className="text-md text-black-600">Laravel</p>
              </li>
            </ul>
          </li>
          <li className="w-full text-center my-6 px-2 py-4 border rounded-md hover:border-black-200">
            <Link href="https://www.github.com/cavinhartono">See More</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
