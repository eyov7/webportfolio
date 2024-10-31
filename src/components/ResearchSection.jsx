import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ResearchSection = () => {
  return (
    <section id="ai-ml" className="box">
      <h2 className="text-shadow-glow mb-6">AI/ML Research Work</h2>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold text-shadow-glow">Video Presentation</AccordionTrigger>
          <AccordionContent>
            <div className="p-4 bg-white/10 rounded-lg">
              <iframe
                src="/CV final presentation .pdf"
                width="100%"
                height="400"
                className="rounded-md"
              ></iframe>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold text-shadow-glow">Literature Review Slides</AccordionTrigger>
          <AccordionContent>
            <div className="p-4 bg-white/10 rounded-lg">
              <iframe
                src="/Lit Review for LTH.pptx"
                width="100%"
                height="400"
                className="rounded-md"
              ></iframe>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold text-shadow-glow">Additional Research Presentation 1</AccordionTrigger>
          <AccordionContent>
            <div className="p-4 bg-white/10 rounded-lg">
              <iframe
                src="/CV final presentation .pdf"
                width="100%"
                height="400"
                className="rounded-md"
              ></iframe>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-semibold text-shadow-glow">Additional Research Presentation 2 (Sonic Separability)</AccordionTrigger>
          <AccordionContent>
            <div className="p-4 bg-white/10 rounded-lg">
              <iframe
                src="/Sonic Separability.pdf"
                width="100%"
                height="400"
                className="rounded-md"
              ></iframe>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default ResearchSection;