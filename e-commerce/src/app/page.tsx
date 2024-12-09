
import Hero from "./components/Hero/page";
import Homesec1 from "./components/Home-sec1/page";
import Homesec2 from "./components/Home-sec2/page";
import Homesec3 from "./components/Home-sec3/page";
import Sec4 from "./public/Sec4.png"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Homesec1/>
      <Homesec2/>
      <div className="h-[69px]"></div>
      <Homesec3/>

      {/* Section 4 */}
    <Image src={Sec4} alt="Section 4" className="mt-[67px] mb-[50px] w-[100%]"/>


    </div>
  );
}
