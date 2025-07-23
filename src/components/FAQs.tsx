import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full no-prose"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Can current AI systems feel or be conscious?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>
            There is no consensus that current AI systems are phenomenally
            conscious. However, scientists and philosophers are actively
            exploring the conditions under which future AI might develop these
            capacities, and the ethical implications therein.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How does AI welfare differ from AI safety?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>
            AI safety focuses on preventing AI from harming humans. AI welfare
            focuses on preventing harm <em>to</em> AI systems that may deserve
            moral consideration. They are complementary, both aiming for a
            beneficial future with advanced AI.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
