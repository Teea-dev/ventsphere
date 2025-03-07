import Image from "next/image";
import Nav from "./_global-components/navbar";
import Hero from "./_global-components/hero";
import WhoWeAre from "./_global-components/who we are";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <WhoWeAre/>
    </div>
  );
}
