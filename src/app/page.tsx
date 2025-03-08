import Image from "next/image";
import Nav from "./_global-components/navbar";
import Hero from "./_global-components/hero";
import WhoWeAre from "./_global-components/who we are";
import WhatWeDo from "./_global-components/what we do";
import Benefit from "./_global-components/benefit";
import Testimonial from "./_global-components/testimonial";
import { AccordionDemo } from "./_global-components/faq";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Benefit />
      <Testimonial />
      <AccordionDemo />
    </div>
  );
}
