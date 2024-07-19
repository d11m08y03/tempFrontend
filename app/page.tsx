import Image from "next/image";
import Banner from "./banner";
import NavBar from "./navbar";

export default function Home() {
  return (
    <>
    <div className="flex">
      <NavBar />
      <div className="flex-grow">
          <Banner/>
      </div>
    </div>
    </>
  );
}
