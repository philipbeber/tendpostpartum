import Image from "next/image";
import Link from "next/link";
import { NurtureToast } from "@/components/nurture-toast";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfFN9vCUq8T4pBli2HvL88YBO8Nh9ZW2tE4LzRM-kbesD_F0ihYvIwtu9QR3nsosSprIMSXATgmjCBXGp5vSsRagmoDoQQIwDpt23uMrMvk31z09wkH_wMjQlcg2QGjedz8g-_1gYjEcQvzAQF_lagnIAfJQPgFmOk6hkR44VQFNbse74rBPvlXSd0WijGc61jhRgcQTab4ZYEdEiYk0K2AozM_lTjjr2OujmQOdaAPksUrv3MOPh2t6I9PZOZ6mrEObFi_Dn8urE-";
const portraitImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDHBiKgRzsztXleq-ZkMmlrqK6SVD7riSqTlQuztj-JaVvf5XMCxMx7-wbsTvSXWnqyif_GkW2gdYs7oINp4UI3G44l-x-5FTP4dh-7Pw0DtY-hyTWBhWkhnVy0tM8vwLJFRJNzyP2VTgSAtcBf4mbL0oeWAuvTSYj6MLBAMR8BRytAancUl4uo32fONrxcLQs6TgP6lHdw-Ym-wK58ZOtMKn9jYf9W23nWdcKd3yhkUqTBHf2_UA-xUWMrSGf1TjBdl72wb60PemoS";
const nourishmentImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuASxb2qK27YKDf3g0D9iPiAfdnWfMYtdNExT2iJEw4yk4vlkwUJj8hW-9Zog9ghLblbtdDWf-A46Bkx_cARFgVW4xlkkLI0eBoJZzMmvxk_iNAubA6s5rkAH_MZckQl8LNtvw7Ec87eKgO-D4Qt8gP9yNTfTPNioMM6gILsePFs03rAVkpUdlXfaTYOIRLawe1slTqSMfQLquZC2FEW4GV0B0R5M4siu9b0M0MNVIcyJorNuifXZL3V8gb8s4PRmBd7NyQg47SjbJeC";

export default function HomePage() {
  return (
    <>
      <main className="selection:bg-secondary-container pb-16">
        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="z-10 space-y-8 lg:col-span-7">
              <span className="font-(family-name:--font-plus-jakarta) text-sm font-semibold tracking-widest text-secondary uppercase">
                Postpartum Doula Care
              </span>
              <h1 className="font-headline text-5xl leading-[1.1] text-on-surface md:text-6xl lg:text-7xl">
                Restoring the{" "}
                <span className="text-primary italic">Village</span> in Early
                Motherhood.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                A modern sanctuary designed to hold space for the fourth
                trimester. We provide expert nourishment, emotional guidance,
                and clinical peace of mind so you can focus on healing.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4 md:gap-6">
                <Link
                  href="/contact"
                  className="silk-touch-gradient inline-flex rounded-full px-10 py-4 text-lg font-medium text-on-primary shadow-lg shadow-primary/20"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/about#philosophy"
                  className="group flex items-center font-semibold text-primary"
                >
                  Our Philosophy
                  <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="aspect-4/5 rotate-2 overflow-hidden rounded-[2.5rem] shadow-2xl">
                <Image
                  src={heroImage}
                  alt="Mother holding newborn in a serene, sunlit nursery"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 -z-10 h-48 w-48 rounded-full bg-secondary-container/30 blur-3xl" />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20 md:py-28">
          <div className="mx-auto max-w-4xl space-y-12 px-6 text-center md:px-8">
            <h2 className="font-headline text-4xl leading-tight text-on-surface md:text-5xl">
              Your Modern Sanctuary
            </h2>
            <div className="mx-auto h-px w-24 bg-outline-variant/40" />
            <p
              id="journal"
              className="font-headline text-xl italic leading-relaxed text-on-surface-variant md:text-2xl"
            >
              &ldquo;I believe that the birth of a mother is as significant as
              the birth of a baby. In our fast-paced world, the fourth trimester
              is often overlooked. My mission is to provide the quiet, expert
              support that allows you to feel truly nurtured, heard, and
              held.&rdquo;
            </p>
            <div className="flex flex-col items-center pt-8">
              <div className="mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-primary-container p-1">
                <Image
                  src={portraitImage}
                  alt="Elena Vance, founder"
                  width={64}
                  height={64}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-on-surface">
                Elena Vance
              </span>
              <span className="text-sm tracking-widest text-outline uppercase">
                Founder &amp; Lead Doula
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:mb-20 md:flex-row">
            <div className="max-w-2xl">
              <h2 className="font-headline mb-6 text-4xl text-on-surface md:text-5xl">
                Honoring the <br />
                <span className="italic">Transition</span>
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Postpartum care isn&apos;t a luxury; it&apos;s a foundational
                need. We provide the structural support required for long-term
                maternal wellness.
              </p>
            </div>
            <button
              type="button"
              className="rounded-full border border-outline/30 px-8 py-4 font-medium text-secondary transition-colors hover:bg-surface-container-high"
            >
              Explore Our Research
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-6 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">spa</span>
              </div>
              <h3 className="font-headline text-2xl text-on-surface">
                Physical Recovery
              </h3>
              <p className="leading-relaxed text-on-surface-variant">
                Specialized support for post-surgical healing, nutritional
                replenishment, and pelvic health guidance during the first six
                weeks.
              </p>
            </div>
            <div className="space-y-6 rounded-xl bg-surface-container-high p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <h3 className="font-headline text-2xl text-on-surface">
                Emotional Anchoring
              </h3>
              <p className="leading-relaxed text-on-surface-variant">
                A compassionate presence to navigate the hormonal shifts and
                identity changes that come with new parenthood.
              </p>
            </div>
            <div className="space-y-6 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-container/10 text-tertiary">
                <span className="material-symbols-outlined">auto_stories</span>
              </div>
              <h3 className="font-headline text-2xl text-on-surface">
                Expert Knowledge
              </h3>
              <p className="leading-relaxed text-on-surface-variant">
                Evidence-based guidance on infant feeding, sleep hygiene, and
                newborn care fundamentals tailored to your family&apos;s rhythm.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface-dim/40 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
              <div className="relative order-2 lg:order-1">
                <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src={nourishmentImage}
                    alt="Nourishing soup with fresh herbs on a wooden table"
                    width={900}
                    height={600}
                    className="h-[400px] w-full object-cover md:h-[600px]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-10 -right-10 -z-10 h-64 w-64 -rotate-6 rounded-xl bg-primary-container/20" />
              </div>
              <div className="order-1 space-y-10 lg:order-2">
                <h2 className="font-headline text-4xl text-on-surface md:text-5xl">
                  Our Core <span className="italic">Services</span>
                </h2>
                <div className="space-y-12">
                  {[
                    {
                      n: "01",
                      title: "In-Home Postpartum Support",
                      body: "Daytime and overnight care including light housework, newborn care, and maternal rest stabilization.",
                    },
                    {
                      n: "02",
                      title: "Nourishment & Meal Prep",
                      body: "Curated warming menus designed specifically for postpartum depletion and lactation support.",
                    },
                    {
                      n: "03",
                      title: "Sleep Architecture Consulting",
                      body: "Developing gentle, family-centered sleep patterns that respect biological norms and maternal well-being.",
                    },
                  ].map((item) => (
                    <div key={item.n} className="group cursor-pointer">
                      <div className="flex items-start gap-6">
                        <span className="font-headline text-3xl text-primary opacity-30">
                          {item.n}
                        </span>
                        <div>
                          <h4 className="mb-2 text-2xl transition-colors group-hover:text-primary">
                            {item.title}
                          </h4>
                          <p className="text-on-surface-variant">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="silk-touch-gradient mt-6 inline-flex rounded-full px-12 py-5 text-lg font-medium text-on-primary shadow-xl shadow-primary/20"
                >
                  View All Offerings
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <NurtureToast title="Postpartum Tip">
        Remember to rest while you can. Your only job right now is to heal and
        bond. We&apos;ll handle the rest.
      </NurtureToast>
    </>
  );
}
