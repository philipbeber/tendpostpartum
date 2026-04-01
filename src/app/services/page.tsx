import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
};

const heroSide =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPBLULsca6lpKxV6FSETn74b2Ord4uXs-Ri0CQDC36-WGUUT91vTx9DBeV7f0kcWtcx_lAMdg_24dOrtc_J90N1jmU3BWFNOy2uy4RLryy3R0XVwi4NQa7eimUGTigyS0-eVDRu_FPczW9WefR7UyaAiETZo5GUIZq7NiSC4yyDgf4gXNSuif1QQOel6BGgCUe2C1t1N9UZplJXa0raoUb3Jj_rjNgq14AAtW_I_ZUfZZJocGo1xuJ4tmSqT9hbHw6AJRLFAD01hyL";

const categories = [
  {
    name: "Practical Support",
    description: "Hands-on help so you can focus on bonding with your baby.",
    offerings: [
      "Light household support (laundry, dishes, tidying)",
      "Simple meal prep and planning",
      "Newborn and sibling care so you can rest or shower",
      "Guidance around sleep and daily rhythms",
    ],
  },
  {
    name: "Emotional Support",
    description: "A non-judgmental space for everything you’re feeling.",
    offerings: [
      "Processing birth, feeding journeys, and transitions",
      "Support through highs, lows, and everything in between",
      "Guidance through identity shifts, overwhelm, and mood changes",
      "Reassurance that your experience is normal",
    ],
  },
  {
    name: "Partner & Family Support",
    description: "Helping the whole family adjust.",
    offerings: [
      "Guidance on sharing responsibilities",
      "Support navigating relationship changes",
      "Tools for communication and teamwork",
    ],
  },
  {
    name: "Guidance & Resources",
    description: "Helping you make sense of information and options.",
    offerings: [
      "Evidence-based answers on sleep, feeding, and development",
      "Guidance through transitions (solids, sleep changes)",
      "Referrals to trusted local providers",
    ],
  },
  {
    name: "Advocacy & Confidence",
    description: "Helping you trust yourself and advocate for your needs.",
    offerings: [
      "Support with pediatric visits and childcare decisions",
      "Preparation for workplace conversations",
      "Boundary-setting with family and others",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="selection:bg-secondary-fixed-dim selection:text-on-secondary-fixed pb-16">
      <header className="mx-auto mb-20 grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:mb-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <h1 className="font-headline text-5xl leading-tight text-primary md:text-7xl">
            What does a postpartum doula do?
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            I&apos;m here to help you rest, recover, and find your footing during
            this delicate time—through practical help, emotional support, and
            steady guidance.
          </p>
        </div>
        <div className="relative md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl">
            <Image
              src={heroSide}
              alt="Tender moment of mother and newborn in warm light"
              width={640}
              height={800}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl space-y-16 px-6 md:space-y-20 md:px-8">
        {categories.map((cat, i) => (
          <div
            key={cat.name}
            className="grid grid-cols-1 gap-10 rounded-[2rem] border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm md:p-12 lg:grid-cols-12 lg:gap-12"
          >
            <div className="lg:col-span-4">
              <p className="mb-2 text-xs font-bold tracking-[0.2em] tabular-nums text-primary uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-headline text-3xl text-on-surface md:text-4xl">
                {cat.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
                {cat.description}
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {cat.offerings.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="material-symbols-outlined shrink-0 text-primary text-xl">
                      check_circle
                    </span>
                    <span className="text-on-surface leading-relaxed">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center md:px-8 md:py-32">
        <div className="rounded-[3rem] border border-outline-variant/10 bg-surface-container-lowest p-12 shadow-sm md:p-24">
          <h3 className="font-headline mb-8 text-4xl text-primary md:text-5xl">
            Work with me
          </h3>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Tell me a little about yourself and your needs (if you know them),
            and we&apos;ll go from there. Free consultation available to
            determine fit.
          </p>
          <Link
            href="/contact"
            className="silk-touch-gradient inline-flex rounded-full px-12 py-5 text-lg font-medium text-on-primary shadow-lg transition-all hover:shadow-xl active:scale-95"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
