import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NurtureToast } from "@/components/nurture-toast";

export const metadata: Metadata = {
  title: "About",
};

const heroPortrait =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAx5EFEcIJMAEdeYq3xK8I0Ax5hUcilDJB18FcI1c4oQX0lQou_26w5Kbp1WgWdYdpJq3BVowGXJwbmCNqTk_mBDNvDLAO62HYlEHc6V0va9LITz9yGZhcHu4lf1MHsdblG39d681t5CyG-S51-G2JBIIK2Dql2LAwBo_mkelvbGdYZ3c_TI3R-N_ncgNE8_3HF-NygSXoj0B0-IyrQmsrC5t-uj4Vv4ey0Vdh0RGDfR-TRLE26LAHiRgRHQc9aRjnLx70aaPeqPFMz";
const linenDetail =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtqljl0x_aMF1Mze1H_0Yaq6SRugIBWa4FOnmQ3Lka2DQX0s8ph8co0J0axjvuP2iaoonx3GB5vZV5iU69mqPl1jVPe7s8QgBKGQwswPSGm3gBrVnoASKA3nhcL3wJZSKuk5c17OzKYB-7MAxefoufEXbs9V5dy2I8eSITmMiouokxy_25-fGIN4JnCemjuVsu329QoJTbbj5lR212tw81IQH8U9lwBpxAF8o3fu9xy4TYHiUcxSo9KwMMnpj5x2EsFfiz8sFRzjgG";

const training = [
  "Postpartum doula training through Bastyr University",
  "Currently pursuing certification through DONA International",
] as const;

export default function AboutPage() {
  return (
    <>
      <main className="pb-16">
        <section className="mx-auto mb-24 max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 space-y-8 lg:order-1 lg:col-span-5">
              <span className="mb-4 block text-sm font-semibold tracking-widest text-secondary uppercase">
                Who am I?
              </span>
              <h1 className="font-headline text-5xl leading-tight text-on-surface lg:text-7xl">
                Kim
              </h1>
              <p className="font-headline text-xl leading-relaxed text-on-surface-variant">
                Postpartum doula · Seattle, WA
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-sm tracking-widest text-primary uppercase">
                  Tend Postpartum Care
                </span>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 lg:col-span-7">
              <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 rounded-xl bg-surface-container-low" />
              <Image
                src={heroPortrait}
                alt="Kim, postpartum doula"
                width={1200}
                height={600}
                className="h-[400px] w-full rounded-xl object-cover shadow-sm md:h-[600px]"
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-surface-container-low py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <h2 className="font-headline mb-12 text-4xl text-on-surface">
                  My <span className="text-primary italic">path</span> to this
                  work
                </h2>
                <div className="font-headline space-y-8 text-lg leading-relaxed text-on-surface-variant">
                  <p>
                    I&apos;m Kim; mother, daughter, sister, wife, friend,
                    stepmom, middle child, and lifelong nurturer. My call to this
                    work comes from my own postpartum journey. I experienced a
                    postpartum mood disorder and deep isolation, despite having
                    access to support and resources.
                  </p>
                  <p>
                    Postpartum felt like a haze, but I remember clearly the
                    disorienting transition of no longer being who I was, while
                    not yet knowing who I was becoming. I am deeply motivated
                    to help others feel less alone during this transformative
                    time.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex aspect-[4/5] translate-y-12 flex-col justify-end rounded-xl bg-surface-container-lowest p-8">
                  <span className="material-symbols-outlined mb-4 text-4xl text-secondary">
                    auto_awesome
                  </span>
                  <p className="text-sm font-bold text-on-surface">Training</p>
                  <p className="text-xs text-on-surface-variant">
                    Bastyr University &amp; DONA International
                  </p>
                </div>
                <div className="flex aspect-[4/5] flex-col justify-end rounded-xl bg-surface-container-lowest p-8">
                  <span className="material-symbols-outlined mb-4 text-4xl text-secondary">
                    ecg_heart
                  </span>
                  <p className="text-sm font-bold text-on-surface">Heart</p>
                  <p className="text-xs text-on-surface-variant">
                    Rooted in lived experience
                  </p>
                </div>
                <Image
                  src={linenDetail}
                  alt="Soft linen and dried lavender detail"
                  width={400}
                  height={500}
                  className="h-full min-h-[200px] w-full rounded-xl object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="flex aspect-[4/5] -translate-y-8 flex-col items-center justify-center rounded-xl bg-primary p-8 text-center text-on-primary">
                  <p className="font-headline text-xl italic">
                    I look forward to supporting you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
          <div className="mb-20 text-center">
            <h2 className="font-headline mb-4 text-4xl text-on-surface">
              Training &amp; <span className="italic">credentials</span>
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-secondary opacity-30" />
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            <ul className="space-y-4">
              {training.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-lg text-on-surface-variant"
                >
                  <span className="material-symbols-outlined mt-0.5 text-primary text-xl">
                    check_circle
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-8 text-center md:px-8">
          <Link
            href="/contact"
            className="silk-touch-gradient inline-flex rounded-full px-10 py-4 font-medium text-on-primary"
          >
            Book Now
          </Link>
        </section>
      </main>

      <NurtureToast
        title="From Kim"
        icon="tips_and_updates"
        className="-rotate-2 hover:-translate-y-1"
      >
        <span className="text-on-secondary-container">
          I look forward to supporting you.
        </span>
      </NurtureToast>
    </>
  );
}
