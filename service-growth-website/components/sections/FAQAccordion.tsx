"use client";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={index}
          className="bg-secondary border border-white/10 rounded-[4px] group"
        >
          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
            <span className="text-white font-medium pr-4">{item.question}</span>
            <span className="text-white/50 flex-shrink-0 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
