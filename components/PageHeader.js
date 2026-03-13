import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function PageHeader({ breadcrumb = [], title, subtitle, badge }) {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-20 bg-[linear-gradient(135deg,#273277_0%,#1b2357_60%,#0d1230_100%)]">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl bg-[#F91750] translate-x-[30%] -translate-y-[30%]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 blur-2xl bg-[#F91750] -translate-x-[30%] translate-y-[30%]" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_2px_2px,rgba(249,23,80,0.8)_1px,transparent_0)] bg-[length:36px_36px]" />

      <div className="relative mx-auto max-w-7xl">
        {breadcrumb.length > 0 && (
          <nav className="flex flex-wrap items-center gap-2 mb-6 text-sm text-blue-300">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>

            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <FaChevronRight className="text-xs opacity-50" />
                {item.href ? (
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-xs font-semibold border rounded-full bg-[rgba(249,23,80,0.15)] text-[#F91750] border-[rgba(249,23,80,0.3)]">
            <FontAwesomeIcon icon={faStar} className="text-xs" />
            {badge}
          </span>
        )}

        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="max-w-2xl mt-4 text-lg leading-relaxed text-blue-200">
            {subtitle}
          </p>
        )}

        <div className="w-24 h-1 mt-10 rounded-full bg-[linear-gradient(90deg,#F91750,#273277)]" />
      </div>
    </section>
  );
}