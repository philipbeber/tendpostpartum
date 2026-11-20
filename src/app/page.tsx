import Image from "next/image";
import Link from "next/link";
import { NurtureToast } from "@/components/nurture-toast";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfFN9vCUq8T4pBli2HvL88YBO8Nh9ZW2tE4LzRM-kbesD_F0ihYvIwtu9QR3nsosSprIMSXATgmjCBXGp5vSsRagmoDoQQIwDpt23uMrMvk31z09wkH_wMjQlcg2QGjedz8g-_1gYjEcQvzAQF_lagnIAfJQPgFmOk6hkR44VQFNbse74rBPvlXSd0WijGc61jhRgcQTab4ZYEdEiYk0K2AozM_lTjjr2OujmQOdaAPksUrv3MOPh2t6I9PZOZ6mrEObFi_Dn8urE-";
const portraitImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDHBiKgRzsztXleq-ZkMmlrqK6SVD7riSqTlQuztj-JaVvf5XMCxMx7-wbsTvSXWnqyif_GkW2gdYs7oINp4UI3G44l-x-5FTP4dh-7Pw0DtY-hyTWBhWkhnVy0tM8vwLJFRJNzyP2VTgSAtcBf4mbL0oeWAuvTSYj6MLBAMR8BRytAancUl4uo32fONrxcLQs6TgP6lHdw-Ym-wK58ZOtMKn9jYf9W23nWdcKd3yhkUqTBHf2_UA-xUWMrSGf1TjBdl72wb60PemoS";
const nourishmentImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuASxb2qK27YKDf3g0D9iPiAfdnWfMYtdNExT2iJEw4yk4vlkwUJj8hW-9Zog9ghLblbtdDWf-A46Bkx_cARFgVW4xlkkLI0eBoJZzMmvxk_iNAubA6s5rkAH_MZckQl8LNtvw7Ec87eKgO-D4Qt8gP9yNTfTPNioMM6gILsePFs03rAVkpUdlXfaTYOIRLawe1slTqSMfQLquZC2FEW4GV0B0R5M4siu9b0M0MNVIcyJorNuifXZL3V8gb8s4PRmBd7NyQg47SjbJeC";

const serviceCategories = [
  {
    name: "Practical Support",
    description:
      "Hands-on help so you can focus on bonding with your baby.",
  },
  {
    name: "Emotional Support",
    description:
      "A non-judgmental space for everything you’re feeling.",
  },
  {
    name: "Partner & Family Support",
    description: "Helping the whole family adjust.",
  },
  {
    name: "Guidance & Resources",
    description: "Helping you make sense of information and options.",
  },
  {
    name: "Advocacy & Confidence",
    description: "Helping you trust yourself and advocate for your needs.",
  },
] as const;

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
                Early motherhood is a season of{" "}
                <span className="text-primary italic">receiving</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                I&apos;m here to help you rest, recover, and find your footing
                during this delicate time.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4 md:gap-6">
                <Link
                  href="/contact"
                  className="silk-touch-gradient inline-flex rounded-full px-10 py-4 text-lg font-medium text-on-primary shadow-lg shadow-primary/20"
                >
                  Book Now
                </Link>
                <Link
                  href="/about"
                  className="group flex items-center font-semibold text-primary"
                >
                  About Kim
                  <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">
                    {"arrow_forward"}
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
              A note from my story
            </h2>
            <div className="mx-auto h-px w-24 bg-outline-variant/40" />
            <p
              id="journal"
              className="font-headline text-xl italic leading-relaxed text-on-surface-variant md:text-2xl"
            >
              My first postpartum doula experience was supporting my mom and
              baby brother.
            </p>
            <div className="flex flex-col items-center pt-8">
              <div className="mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-primary-container p-1">
                <Image
                  src={portraitImage}
                  alt="Kim, postpartum doula"
                  width={64}
                  height={64}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-on-surface">Kim</span>
              <span className="text-sm tracking-widest text-outline uppercase">
                Postpartum doula · Seattle, WA
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:mb-20 md:flex-row">
            <div className="max-w-2xl">
              <h2 className="font-headline mb-6 text-4xl text-on-surface md:text-5xl">
                What does a postpartum doula do?
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Support looks different for every family. Here are the areas
                where I show up.
              </p>
            </div>
            <Link
              href="/services"
              className="rounded-full border border-outline/30 px-8 py-4 font-medium text-secondary transition-colors hover:bg-surface-container-high"
            >
              Read all services
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat) => (
              <div
                key={cat.name}
                className="space-y-4 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10 shadow-sm"
              >
                <h3 className="font-headline text-2xl text-on-surface">
                  {cat.name}
                </h3>
                <p className="leading-relaxed text-on-surface-variant">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="silk-touch-gradient inline-flex rounded-full px-12 py-5 text-lg font-medium text-on-primary shadow-xl shadow-primary/20"
            >
              See full offerings
            </Link>
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
                  Work with <span className="italic">me</span>
                </h2>
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  Tell me a little about yourself and your needs (if you know
                  them), and we&apos;ll go from there. Free consultation
                  available to determine fit.
                </p>
                <Link
                  href="/contact"
                  className="silk-touch-gradient mt-6 inline-flex rounded-full px-12 py-5 text-lg font-medium text-on-primary shadow-xl shadow-primary/20"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <NurtureToast title="Postpartum reminder">
        Rest while you can. Your body is doing important work—and you don&apos;t
        have to do this season alone.
      </NurtureToast>
    </>
  );
}
