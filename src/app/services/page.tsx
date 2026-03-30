import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
};

const heroSide =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPBLULsca6lpKxV6FSETn74b2Ord4uXs-Ri0CQDC36-WGUUT91vTx9DBeV7f0kcWtcx_lAMdg_24dOrtc_J90N1jmU3BWFNOy2uy4RLryy3R0XVwi4NQa7eimUGTigyS0-eVDRu_FPczW9WefR7UyaAiETZo5GUIZq7NiSC4yyDgf4gXNSuif1QQOel6BGgCUe2C1t1N9UZplJXa0raoUb3Jj_rjNgq14AAtW_I_ZUfZZJocGo1xuJ4tmSqT9hbHw6AJRLFAD01hyL";
const daytimeImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ8_eYygBsKhOgdSO9sl1WYg8ojrnfMRwoctA4sqcLNAZYas4Uscr-eV-DANmOwjG2LpZkpYtxlgqLSeKUHYueEHbpB_GXB0bAAllYT13X2Qfwh4zDbJU90BA0A-MF7FejwL9siFF-bsG_JTkgiBL3XeRjxRAcO9wF6TxnRt7GBgZohZ7eIVTX4hW7wOFDTfWfiIhN1iSJEt6uOAdfAXy9QudFqw9xY-RxTuN1nKcJjD2MniyODjLjbWjCEwPymzzfXLYRsaoqbIQ9";
const overnightImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC6UTWVi76yyb-1AUaV7ELJwTUyciYIPiFVD_peP9SybUSAHCnxTvQfrGXFQlBbrTuiYhvkeWe7OOoiDYeW85aveJilQftlZ4hN_7QXbFbpg9dF55rLn4J8G_EM4XeMVpVE82PPZ1jAlt_2p8YTCrEBFpdEpXNuQan26FfX05k3gnSm0SBzQrK7PqbsXNq0y0MZEFNoFtRaN0AKEAScmmNnit-dSYYTGjhANiMUaZQXJKlKH8oxOVs3AHv4hjc6Wf44fVdiWCS2iUmS";
const virtualImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBeRxl1c_nnwWw3IWEyqGVqQhsRUP0KSkTQ_6G4Zv-Zdrge4Kww_5eSTKLqRyJm4VW_3vyJE097cjJaVjGWqHMvBO5r3TvZP8c7oLiLX6El-idVoWb4dBKnVhMD8T-17JVNkBI72i6WMvFt2OtEBDaODzyPmsvIjEMJgNyuxE9tRwyQDeITcXqkXeWWShPP1hjuDaaC-HGe95m1R2OZ10BJIW_fOVbRycbw5QPHqc4-BzW7lDUcGMiFdvk_kUlY0RCtcqKmLec2KYoH";
const testimonialAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAMbs8b54hcrdP3ekI3PHpovvGu-GpRFCr8KHDdP_dbnkyTHlAR-1ZYQ17lPI70NhZjDlvd94VdRK6O-DqMEYS7WxuaxEJMf8ACBl-mE7kSBGVimYEjLhE0kkhQOfiEpuz5RTSq2Ee-jlG40zGdqVReXcU44QIO8jB3xmbkZwoDY_LpDXBQc8sFisYfS6eMJ83E0ivpnYyuCMjTuEIe2CwBu20WvD5sCMcclrfZcJEiZXQZaaSMk9j3tUpWabh1RV75Y15S5SS3qwR0";

export default function ServicesPage() {
  return (
    <main className="selection:bg-secondary-fixed-dim selection:text-on-secondary-fixed pb-16">
      <header className="mx-auto mb-20 grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:mb-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <h1 className="font-headline text-5xl leading-tight text-primary md:text-7xl">
            Holistic Support for <br />
            <span className="italic font-normal">Modern Motherhood.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Transitioning into parenthood is a sacred journey. Our postpartum
            services are designed to provide the physical, emotional, and
            educational scaffolding you need to thrive.
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
          <div className="absolute -bottom-8 -left-8 max-w-[240px] rounded-2xl bg-secondary-container p-8 shadow-lg">
            <p className="font-headline text-lg leading-snug text-secondary italic">
              &ldquo;The support I didn&apos;t know I needed, but now can&apos;t
              imagine living without.&rdquo;
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl space-y-20 px-6 md:space-y-24 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">
              <span className="h-px w-8 bg-primary" />
              Nurturing the Day
            </div>
            <h2 className="font-headline text-4xl text-on-surface">
              Daytime Support
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Comprehensive in-home care during those vital early weeks. We
              handle the logistical weight so you can focus on bonding,
              healing, and rest.
            </p>
            <ul className="space-y-4">
              {[
                "Breastfeeding & infant feeding guidance",
                "Nourishing meal preparation and light housework",
                "Emotional check-ins and recovery monitoring",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface">{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-baseline gap-2 pt-4">
              <span className="text-xs tracking-wider text-outline uppercase">
                Investment:
              </span>
              <span className="font-headline text-2xl text-secondary">
                Starting at $450 / session
              </span>
            </div>
          </div>
          <div className="rounded-[2rem] bg-surface-container-low p-4">
            <Image
              src={daytimeImg}
              alt="Kitchen with fresh produce and organic ingredients"
              width={600}
              height={600}
              className="aspect-square w-full rounded-[1.5rem] object-cover shadow-sm"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 rounded-[2rem] bg-surface-container-low p-4 lg:order-1">
            <Image
              src={overnightImg}
              alt="Peaceful bedroom with soft bedding and bassinet"
              width={600}
              height={600}
              className="aspect-square w-full rounded-[1.5rem] object-cover shadow-sm"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 space-y-8 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">
              <span className="h-px w-8 bg-primary" />
              The Gift of Rest
            </div>
            <h2 className="font-headline text-4xl text-on-surface">
              Overnight Care
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Reclaim your sleep. Our overnight doulas provide specialized
              infant care through the night, ensuring you wake up feeling
              restored and ready for the day ahead.
            </p>
            <ul className="space-y-4">
              {[
                "8-10 hour overnight shifts (10 PM – 7 AM)",
                "Infant soothing and sleep habit foundation",
                "Bottle feeding or bringing baby to you for nursing",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    nights_stay
                  </span>
                  <span className="text-on-surface">{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-baseline gap-2 pt-4">
              <span className="text-xs tracking-wider text-outline uppercase">
                Investment:
              </span>
              <span className="font-headline text-2xl text-secondary">
                Starting at $600 / night
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">
              <span className="h-px w-8 bg-primary" />
              Accessible Wisdom
            </div>
            <h2 className="font-headline text-4xl text-on-surface">
              Virtual Consultations
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Expert guidance wherever you are. Perfect for targeted
              troubleshooting on feeding, sleep transitions, or building your
              postpartum plan.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-6">
                <h4 className="mb-2 font-bold text-primary">Feeding Support</h4>
                <p className="text-sm text-on-surface-variant">
                  Lactation troubleshooting and weaning plans.
                </p>
              </div>
              <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-6">
                <h4 className="mb-2 font-bold text-primary">Sleep Strategy</h4>
                <p className="text-sm text-on-surface-variant">
                  Gentle techniques for better family rest.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-baseline gap-2 pt-4">
              <span className="text-xs tracking-wider text-outline uppercase">
                Investment:
              </span>
              <span className="font-headline text-2xl text-secondary">
                Starting at $150 / hour
              </span>
            </div>
          </div>
          <div className="rounded-[2rem] bg-surface-container-low p-4">
            <Image
              src={virtualImg}
              alt="Laptop and tea suggesting a calm virtual visit"
              width={600}
              height={600}
              className="aspect-square w-full rounded-[1.5rem] object-cover shadow-sm"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mt-24 bg-surface-dim pt-20 pb-20 md:mt-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <span
            className="material-symbols-outlined mb-8 text-5xl text-secondary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            format_quote
          </span>
          <p className="font-headline mb-12 text-3xl leading-relaxed text-on-surface italic md:text-4xl">
            &ldquo;Working with Nurture Editorial was the single best decision I
            made for my second pregnancy. Their doula didn&apos;t just help with
            the baby; she held space for my entire family to transition with
            grace.&rdquo;
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={testimonialAvatar}
                alt="Client portrait"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-on-surface">Eleanor Vance</p>
              <p className="text-sm tracking-widest text-on-surface-variant uppercase">
                Mother of Two, London
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center md:px-8 md:py-32">
        <div className="rounded-[3rem] border border-outline-variant/10 bg-surface-container-lowest p-12 shadow-sm md:p-24">
          <h3 className="font-headline mb-8 text-4xl text-primary md:text-5xl">
            Ready to feel supported?
          </h3>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Every family is unique. We invite you to a complimentary 20-minute
            consultation to discuss your specific needs and how we can best
            serve you.
          </p>
          <Link
            href="/contact"
            className="silk-touch-gradient inline-flex rounded-full px-12 py-5 text-lg font-medium text-on-primary shadow-lg transition-all hover:shadow-xl active:scale-95"
          >
            Book Your Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
