import { useState } from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="text-sm font-medium text-slate-700 hover:text-slate-900"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [query, setQuery] = useState("");

  return (
    <header className="w-full bg-[#EAF6F3]">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-4">
        {/* Logo */}
        <div className="text-lg font-semibold text-slate-900">
          Knowledge<span className="font-bold">Pulse</span>
        </div>

        {/* Search */}
        <div className="hidden flex-1 md:flex">
          <div className="relative w-full max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search courses"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white px-10 py-2 text-sm outline-none focus:border-slate-300"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="ml-auto flex items-center gap-5">
          <div className="hidden md:flex items-center gap-5">
            <NavLink href="#">Courses</NavLink>
            <NavLink href="#">Pages</NavLink>
            <NavLink href="#">About</NavLink>
          </div>

          <button className="rounded-full bg-[#0E4A46] px-4 py-2 text-sm font-semibold text-white hover:opacity-95">
            Sign in
          </button>
        </nav>
      </div>

      {/* Mobile search */}
      <div className="px-4 pb-4 md:hidden">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search courses"
            className="w-full rounded-full border border-slate-200 bg-white px-10 py-2 text-sm outline-none"
          />
        </div>
      </div>
    </header>
  );
}
