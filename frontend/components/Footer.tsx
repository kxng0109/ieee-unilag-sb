import Link from "next/link";

const footerBg = "var(--ieee-footer-bg)";
const separatorColor = "var(--ieee-accent)";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Event", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Contact Us", href: "/contact" },
];

const resources = [
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Workshops", href: "/workshops" },
  { label: "Career Center", href: "/career" },
];

const connect = [
  { label: "Alumni Network", href: "/alumni" },
  { label: "Industry Partners", href: "/partners" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Support Us", href: "/support" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-white">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-white/90 transition hover:text-white hover:underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: footerBg }}>
      <div
        className="h-px w-full"
        style={{ backgroundColor: separatorColor }}
        aria-hidden
      />
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div className="flex flex-col gap-4 lg:max-w-xs">
          <div className="flex items-start gap-2">
            <div>
              <span className="block text-xl font-bold text-white md:text-2xl">
                IEEE
              </span>
              <span className="block text-sm text-white/95">Unilag SB</span>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mt-0.5 shrink-0 text-white"
              aria-hidden
            >
              <path
                d="M12 2L22 12L12 22L2 12L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <p className="text-sm leading-relaxed text-white/90">
            Empowering the next generation of Nigerian engineers and
            technologists through innovation, collaboration, and global
            connections.
          </p>
        </div>
        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="Resources" links={resources} />
        <FooterColumn title="Connect" links={connect} />
      </div>
    </footer>
  );
}
