"use client ";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextAnimate } from "@/components/magicui/text-animate";

export function AccordionDemo() {
  return (
    <div className="w-full px-4 sm:px-6 flex justify-between items-start gap-20 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-40 bg-[#F7F6F2]">
      <div>
        <div className="flex  w-fit rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2">
          <p className="text-[#B1AD4E] text-xs sm:text-sm font-medium">
            WE HAVE ANSWERS
          </p>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col gap-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1F253F] text-wrap leading-tight  max-w-4xl">
            <TextAnimate animation="slideUp" by="word">
              Frequently Asked Questions
            </TextAnimate>
          </h2>
          <div className="flex flex-col gap-10">
            <p className="text-[#6B7280]">
              Explore the most common inquiries to learn more about how we
              support startups like yours.
            </p>
            <p className="text-[#6B7280]">
              For more inquiries, reach us at 
              
              contact@ventsphere.com.
            </p>
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What types of startups do you work with?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How can I apply for funding?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What support do you provide after funding?
          </AccordionTrigger>
          <AccordionContent>
            We offer mentorship, strategic guidance, and access to our network
            of industry experts to help you grow your business successfully.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How long does the funding process take?
          </AccordionTrigger>
          <AccordionContent>
            We offer mentorship, strategic guidance, and access to our network
            of industry experts to help you grow your business successfully.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
