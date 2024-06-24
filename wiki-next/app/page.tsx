import Image from "next/image";
import WikiLogo from "./ui/wiki-logo";
import { lusitana } from "./ui/fonts";
import AllEntries from "./ui/entries/allEntries";

export default function Home() {
  return (
    <>
      <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} text-2xl`}>
              Home
            </h1>
          </div>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">

            </div>
            <AllEntries/>
      </div>
    </>
  );
}
