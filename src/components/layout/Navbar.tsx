"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/button";

const routes = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80">
      <nav className="main-container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight hover:text-primary transition-colors">
          Uddipta
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={`transition-colors hover:text-primary ${
                    pathname === route.href
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <ul className="flex flex-col">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 transition-colors ${
                    pathname === route.href
                      ? "text-primary font-medium bg-muted"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}