import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBg2HIu4G5fXSKyl-mNanZ4BMkkyddnxAK0ubJahNxAlDyA1M3DoG2G5O85qbDkPfI2EhBYA-ywj3a5FJW1jIpzRJbuFdE3V7TTQJuXj6IOhFEiSrmhaRCq_7JLrOQeiUv_XJ-XGR1mOphuc-fE2nspR6yQPB2cZbTtHCwKA_KY60UTfWwlMkH67NlBNyb1eGcYqyVMqPX-mHbZ0J-pG83KEJms-7Lo52RK5f0vstSu-UGiTTvf7KpL4LGAk_0b7FmVR6uQcrC8WmQg";

export default function ContactPage() {
  return (
    <main className="selection:bg-secondary-container selection:text-on-secondary-container pb-16">
      <section className="mx-auto mb-20 grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:mb-24 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="font-headline mb-8 text-5xl leading-tight text-primary md:text-7xl">
            Work with me
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-on-surface-variant">
            Tell me a little about yourself and your needs (if you know them),
            and we&apos;ll go from there.
          </p>
          <p className="mt-6 max-w-xl text-lg font-medium text-on-surface">
            Free consultation available to determine fit.
          </p>
        </div>
        <div className="relative lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-sm">
            <Image
              src={heroImage}
              alt="Serene room with linen drapes and greenery"
              width={640}
              height={800}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 max-w-[280px] rounded-2xl bg-secondary-container p-8 text-on-secondary-container shadow-lg">
            <p className="mb-2 text-sm font-medium italic">Seattle, WA</p>
            <p className="font-headline text-lg leading-tight">
              Tend Postpartum Care
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:gap-24 md:px-8 lg:grid-cols-2">
        <div className="space-y-16">
          <div>
            <h2 className="font-headline mb-12 text-3xl text-on-surface">
              Contact
            </h2>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-3xl text-secondary">
                  mail
                </span>
                <div>
                  <p className="mb-1 text-xs tracking-widest text-outline uppercase">
                    Email
                  </p>
                  <p className="text-xl font-medium text-on-surface">
                    <a
                      className="hover:text-primary"
                      href="mailto:email@example.com"
                    >
                      email@example.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-3xl text-secondary">
                  call
                </span>
                <div>
                  <p className="mb-1 text-xs tracking-widest text-outline uppercase">
                    Phone
                  </p>
                  <p className="text-xl font-medium text-on-surface">
                    <a className="hover:text-primary" href="tel:+19084051661">
                      (908) 405-1661
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-3xl text-secondary">
                  location_on
                </span>
                <div>
                  <p className="mb-1 text-xs tracking-widest text-outline uppercase">
                    Location
                  </p>
                  <p className="text-xl font-medium text-on-surface">
                    Seattle, WA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact-form">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
