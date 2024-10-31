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
                src="https://drive.google.com/file/d/1EBDUrAf-_9vkd78ckQznH-EXS4wnqpR1/preview"
                width="100%"
                height="400"
                allow="autoplay"
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
                src="https://docs.google.com/presentation/d/1wc6EHC_ufz7UDcC2w9fDudTtzXiwO4S0VUHWYaUqlx0/embed?start=false&loop=false&delayms=3000"
                width="100%"
                height="400"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
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
                src="https://drive.google.com/file/d/15Cy67bJUltmxy1GBtzsCv2FKjsfdUC4d/preview"
                width="100%"
                height="400"
                allow="autoplay"
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
                src="https://drive.google.com/file/d/1HF29uvqvu6HUlMUfqqCxx7J3t5hFW1BQ/preview"
                width="100%"
                height="400"
                allow="autoplay"
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