"use client";

import { useState } from "react";

const items = [
  {
    q: "When is the best time to book doula support?",
    a: "Most families reach out during their second trimester (around 20-28 weeks) to ensure availability, especially for birth support. For postpartum care, booking 2-3 months before your due date is ideal.",
  },
  {
    q: "Do you offer virtual consultations?",
    a: "Yes, we offer comprehensive virtual postpartum planning and breastfeeding support for families outside of our primary service area.",
  },
  {
    q: "What is the booking process like?",
    a: "After you submit an inquiry, we'll schedule a complimentary 20-minute discovery call to discuss your needs and see if we're a good match. If you decide to move forward, we'll send over a contract and deposit request to secure your dates.",
  },
  {
    q: "Can I gift a consultation to a friend?",
    a: 'Absolutely. We offer "The Gift of Care" packages which are popular baby shower contributions. Contact us directly to arrange a gift certificate.',
  },
];

export function ContactFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <button
            key={item.q}
            type="button"
            onClick={() => setOpen(isOpen ? null : i)}
            className="w-full cursor-pointer rounded-2xl bg-surface-container-low p-6 text-left transition-colors hover:bg-surface-container"
          >
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-xl font-medium text-on-surface">{item.q}</h4>
              <span
                className={`material-symbols-outlined shrink-0 text-outline transition-transform ${isOpen ? "rotate-180" : ""} text-secondary`}
              >
                expand_more
              </span>
            </div>
            {isOpen ? (
              <p className="mt-4 leading-relaxed text-on-surface-variant">
                {item.a}
              </p>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
