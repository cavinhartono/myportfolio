export default function Content() {
  return (
    <div className="absolute right-0 w-[calc(100%-600px)] py-20 px-[140px] flex flex-col justify-end">
      <main id="home" className="w-full">
        <p className="text-lg text-black-400 text-justify">
          Hi, I&#39;ve created products for companies and businesses website
          with focus on fast, elegant and accessible user experiences. Before
          now, I was Fullstack Developer Intern at Webhade Creative, where I
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
      </main>
      <main id="projects"></main>
    </div>
  );
}
