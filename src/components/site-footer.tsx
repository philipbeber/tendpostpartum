import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-dim pt-16 pb-10 md:pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <p className="font-headline mb-6 text-lg text-primary">Nurture Editorial</p>
          <p className="text-sm leading-relaxed tracking-wide text-on-surface-variant">
            A modern sanctuary for new mothers. Expert care rooted in tradition
            and clinical wisdom.
          </p>
        </div>
        <div>
          <h5 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
            Connect
          </h5>
          <ul className="space-y-3">
            <li>
              <a
                className="text-sm text-outline transition-all hover:text-primary"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="text-sm text-outline transition-all hover:text-primary"
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
            Care
          </h5>
          <ul className="space-y-3">
            <li>
              <Link
                href="/contact"
                className="text-sm text-outline transition-all hover:text-primary"
              >
                Terms of Care
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-outline transition-all hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact#faq"
                className="text-sm text-outline transition-all hover:text-primary"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
            Contact
          </h5>
          <p className="mb-4 text-sm text-outline">hello@nurture-editorial.com</p>
          <div className="flex gap-4 text-primary">
            <span className="material-symbols-outlined">verified_user</span>
            <span className="material-symbols-outlined">nest_eco_leaf</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl border-t border-outline-variant/20 px-6 pt-8 md:px-8">
        <p className="text-center text-sm tracking-wide text-on-surface-variant">
          © {new Date().getFullYear()} Editorial Nurturance. A Modern Sanctuary
          for New Mothers.
        </p>
      </div>
    </footer>
  );
}
