import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1 no-underline">
          <AccordionTrigger className="cursor-pointer no-underline">
            What is Fix My Words?
          </AccordionTrigger>
          <AccordionContent>
            Fix My Words is an AI-powered tool designed to refine, transform,
            and enhance your text instantly. Whether it's grammar correction,
            rephrasing, or tone adjustment, we’ve got you covered!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-pointer">
            Is this tool free to use?
          </AccordionTrigger>
          <AccordionContent>
            Yes! Basic features are free to use. However, advanced AI
            transformations may have limits based on API usage.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What’s coming next?</AccordionTrigger>
          <AccordionContent>
            We're working on more AI features, better personalization, and even
            faster response times! Stay tuned!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
