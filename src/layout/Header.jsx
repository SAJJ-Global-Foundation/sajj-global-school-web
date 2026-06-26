import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import sgsLogo from "@/assets/logos/sgs-crest.jpeg";
import Button from "@/components/ui/Button.jsx";

const NAV = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    children: [
      { label: "School Overview", to: "/about#overview" },
      { label: "Vision & Mission", to: "/about#vision" },
      { label: "Management Committee", to: "/about#management" },
      { label: "Principal's Desk", to: "/about#principal" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Curriculum", to: "/academics#curriculum" },
      { label: "Academic Calendar", to: "/academics#calendar" },
      { label: "Co-Curricular", to: "/academics#cocurricular" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Process & Procedure", to: "/admissions#procedure" },
      { label: "Required Documents", to: "/admissions#documents" },
      { label: "Fee Structure", to: "/admissions#fees" },
      { label: "Enquiry Form", to: "/admissions#enquiry" },
    ],
  },
  {
    label: "Students",
    children: [
      { label: "Activities", to: "/students#activities" },
      { label: "Achievements", to: "/students#achievements" },
      { label: "Sports & Events", to: "/students#sports" },
    ],
  },
  {
    label: "Parents",
    children: [
      { label: "Information", to: "/parents#info" },
      { label: "School Policies", to: "/parents#policies" },
      { label: "Downloads", to: "/parents#downloads" },
    ],
  },
  { label: "Society", to: "/society" },
  { label: "Gallery", to: "/gallery" },
  {
    label: "News",
    children: [
      { label: "News & Updates", to: "/news" },
      { label: "Notice Board", to: "/notices" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

function DropdownMenu({ items, onClose }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-card-hover border border-brand-border py-2 z-50 animate-fade-in">
      {items.map((item) => (
        <NavLink
          key={item.label}
          to={item.to}
          onClick={onClose}
          className={({ isActive }) =>
            `block px-4 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "text-navy-700 bg-brand-light"
                : "text-brand-muted hover:text-navy-700 hover:bg-brand-light"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

function NavItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  const isActive = item.children
    ? item.children.some((c) => location.pathname === c.to.split("#")[0])
    : location.pathname === item.to;

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        onClick={onClose}
        className={({ isActive: a }) =>
          `nav-link text-sm whitespace-nowrap ${a ? "active text-navy-700" : ""}`
        }
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`nav-link text-sm flex items-center gap-1 whitespace-nowrap ${isActive ? "active text-navy-700" : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <DropdownMenu items={item.children} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "border-b border-brand-border"
        }`}
      >
        {/* Gradient top line */}
        <div className="h-0.5 bg-brand-gradient" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo lockup */}
            <Link
              to="/"
              className="flex items-center gap-3 flex-shrink-0 group"
              aria-label="Sajj Global School — Home"
            >
              <img
                src={sgsLogo}
                alt="SGS Crest"
                className="h-10 w-10 object-contain rounded-full ring-2 ring-brand-border group-hover:ring-navy-700/30 transition-all"
              />
              <div className="hidden sm:block leading-tight">
                <p className="font-display font-bold text-navy-900 text-base leading-none">
                  Sajj Global School
                </p>
                <p className="text-xs text-brand-muted font-medium tracking-wide">
                  Excellence in Education
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-3 xl:gap-5 mx-5"
              aria-label="Main navigation"
            >
              {NAV.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3 flex-shrink-0 ml-4">
              <Button
                to="/admissions#enquiry"
                variant="gradient"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Admission Enquiry
              </Button>
              <button
                className="lg:hidden p-2 rounded-lg text-brand-muted hover:text-navy-700 hover:bg-brand-light transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl overflow-y-auto flex flex-col"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between p-4 border-b border-brand-border">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <img src={sgsLogo} alt="SGS" className="h-8 w-8 rounded-full" />
                <span className="font-display font-bold text-navy-900 text-sm">
                  Sajj Global School
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg text-brand-muted hover:bg-brand-light"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 py-4 px-2">
              {NAV.map((item) => {
                const isExpanded = mobileExpanded === item.label;
                return (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-brand-muted hover:text-navy-700 hover:bg-brand-light transition-colors"
                          onClick={() =>
                            setMobileExpanded(isExpanded ? null : item.label)
                          }
                        >
                          {item.label}
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isExpanded && (
                          <div className="pl-4 flex flex-col gap-0.5 mb-1">
                            {item.children.map((child) => (
                              <NavLink
                                key={child.label}
                                to={child.to}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                  `block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                                    isActive
                                      ? "text-navy-700 bg-brand-light font-semibold"
                                      : "text-brand-muted hover:text-navy-700 hover:bg-brand-light"
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
                            isActive
                              ? "text-navy-700 bg-brand-light font-bold"
                              : "text-brand-muted hover:text-navy-700 hover:bg-brand-light"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-4 border-t border-brand-border">
              <Button
                to="/admissions#enquiry"
                variant="gradient"
                size="md"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Admission Enquiry
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
