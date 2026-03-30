import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NurtureToast } from "@/components/nurture-toast";

export const metadata: Metadata = {
  title: "About the Doula",
};

const heroPortrait =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAx5EFEcIJMAEdeYq3xK8I0Ax5hUcilDJB18FcI1c4oQX0lQou_26w5Kbp1WgWdYdpJq3BVowGXJwbmCNqTk_mBDNvDLAO62HYlEHc6V0va9LITz9yGZhcHu4lf1MHsdblG39d681t5CyG-S51-G2JBIIK2Dql2LAwBo_mkelvbGdYZ3c_TI3R-N_ncgNE8_3HF-NygSXoj0B0-IyrQmsrC5t-uj4Vv4ey0Vdh0RGDfR-TRLE26LAHiRgRHQc9aRjnLx70aaPeqPFMz";
const linenDetail =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtqljl0x_aMF1Mze1H_0Yaq6SRugIBWa4FOnmQ3Lka2DQX0s8ph8co0J0axjvuP2iaoonx3GB5vZV5iU69mqPl1jVPe7s8QgBKGQwswPSGm3gBrVnoASKA3nhcL3wJZSKuk5c17OzKYB-7MAxefoufEXbs9V5dy2I8eSITmMiouokxy_25-fGIN4JnCemjuVsu329QoJTbbj5lR212tw81IQH8U9lwBpxAF8o3fu9xy4TYHiUcxSo9KwMMnpj5x2EsFfiz8sFRzjgG";

export default function AboutPage() {
  return (
    <>
      <main className="pb-16">
        <section className="mx-auto mb-24 max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 space-y-8 lg:order-1 lg:col-span-5">
              <span className="mb-4 block text-sm font-semibold tracking-widest text-secondary uppercase">
                Meet Your Doula
              </span>
              <h1 className="font-headline text-5xl leading-tight text-on-surface lg:text-7xl">
                Elena <br />
                <span className="italic">Wilder</span>
              </h1>
              <p className="font-headline text-xl leading-relaxed text-on-surface-variant">
                A witness to the transformation. Dedicated to the quiet,
                profound moments of the fourth trimester.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-sm tracking-widest text-primary uppercase">
                  Established 2016
                </span>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 lg:col-span-7">
              <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 rounded-xl bg-surface-container-low" />
              <Image
                src={heroPortrait}
                alt="Elena Wilder, postpartum doula"
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
                  The path to <br />
                  <span className="text-primary italic">nurturance.</span>
                </h2>
                <div className="font-headline space-y-8 text-lg leading-relaxed text-on-surface-variant">
                  <p>
                    My journey into postpartum work didn&apos;t begin in a
                    classroom, but in the soft, shadowed hours of my own
                    transition into motherhood. I realized that while our culture
                    celebrates the arrival of a child, it often overlooks the
                    rebirth of the mother.
                  </p>
                  <p>
                    After a decade in editorial design, I felt called to apply
                    that same eye for detail and rhythm to the domestic space. I
                    saw a need for a &ldquo;Modern Sanctuary&rdquo;—a type of
                    care that blends evidence-based expertise with the warmth of
                    a familiar presence.
                  </p>
                  <p>
                    Today, I serve families as they navigate the delicate weeks
                    of recovery, ensuring that the transition into parenthood is
                    marked by grace rather than exhaustion.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex aspect-[4/5] translate-y-12 flex-col justify-end rounded-xl bg-surface-container-lowest p-8">
                  <span className="material-symbols-outlined mb-4 text-4xl text-secondary">
                    auto_awesome
                  </span>
                  <p className="text-sm font-bold text-on-surface">700+</p>
                  <p className="text-xs text-on-surface-variant">
                    Hours of Family Support
                  </p>
                </div>
                <div className="flex aspect-[4/5] flex-col justify-end rounded-xl bg-surface-container-lowest p-8">
                  <span className="material-symbols-outlined mb-4 text-4xl text-secondary">
                    ecg_heart
                  </span>
                  <p className="text-sm font-bold text-on-surface">Certified</p>
                  <p className="text-xs text-on-surface-variant">
                    Postpartum Professional
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
                    &ldquo;Care is the highest form of attention.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="philosophy"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 md:px-8 md:py-28"
        >
          <div className="mb-20 text-center">
            <h2 className="font-headline mb-4 text-4xl text-on-surface">
              Philosophy of <span className="italic">Care</span>
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-secondary opacity-30" />
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="rounded-xl bg-surface-container-lowest p-10 transition-shadow hover:shadow-[0_8px_32px_rgba(27,28,23,0.04)]">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container">
                <span className="material-symbols-outlined text-on-secondary-container">
                  self_care
                </span>
              </div>
              <h3 className="font-headline mb-4 text-2xl text-on-surface">
                Radical Empathy
              </h3>
              <p className="leading-relaxed text-on-surface-variant">
                I enter every home without judgment, creating a non-judgmental
                container where you can be exactly who you are in your recovery.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-lowest p-10 transition-shadow hover:shadow-[0_8px_32px_rgba(27,28,23,0.04)]">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container">
                <span className="material-symbols-outlined text-on-primary">
                  clinical_notes
                </span>
              </div>
              <h3 className="font-headline mb-4 text-2xl text-on-surface">
                Evidence-Based
              </h3>
              <p className="leading-relaxed text-on-surface-variant">
                My support is rooted in the latest physiological research on
                maternal recovery, breastfeeding, and infant development.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-lowest p-10 transition-shadow hover:shadow-[0_8px_32px_rgba(27,28,23,0.04)]">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-fixed-dim">
                <span className="material-symbols-outlined text-on-tertiary-fixed-variant">
                  psychology
                </span>
              </div>
              <h3 className="font-headline mb-4 text-2xl text-on-surface">
                Intuitive Ritual
              </h3>
              <p className="leading-relaxed text-on-surface-variant">
                Healing isn&apos;t just physical. We integrate soft rituals—warm
                tea, quiet breathing, and rest—to restore the nervous system.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24 max-w-5xl px-6 md:mx-auto md:px-8">
          <div className="flex flex-col items-center gap-12 rounded-xl bg-surface-dim p-10 md:flex-row md:p-16">
            <div className="text-center md:w-1/3 md:text-left">
              <h3 className="font-headline mb-2 text-2xl text-on-surface">
                Qualifications
              </h3>
              <p className="text-sm text-on-surface-variant">
                The foundation of trust.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-8 border-outline-variant/20 md:w-2/3 md:border-l md:pl-12">
              {[
                ["DONA International", "Postpartum Doula (CD)"],
                ["CAPPA Certified", "Lactation Educator (CLE)"],
                ["Red Cross", "Infant CPR & Safety"],
                ["Stillbirthday", "Bereavement Support"],
              ].map(([a, b]) => (
                <div key={a} className="space-y-1">
                  <p className="text-sm font-bold tracking-tighter text-primary uppercase">
                    {a}
                  </p>
                  <p className="text-sm text-on-surface-variant">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-8 text-center md:px-8">
          <Link
            href="/contact"
            className="silk-touch-gradient inline-flex rounded-full px-10 py-4 font-medium text-on-primary"
          >
            Book a consultation
          </Link>
        </section>
      </main>

      <NurtureToast
        title="Weekly Ritual"
        icon="tips_and_updates"
        className="-rotate-2 hover:-translate-y-1"
      >
        <span className="text-on-secondary-container">
          &ldquo;Rest is not a luxury; it is the infrastructure of your
          recovery.&rdquo; — Elena
        </span>
      </NurtureToast>
    </>
  );
}
