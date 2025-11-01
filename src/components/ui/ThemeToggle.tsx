"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme">
        <span className="h-5 w-5 rounded-full bg-foreground/40" />
      </Button>
    );
  }

  const current = theme === "system" ? systemTheme : theme;

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
    >
      {current === "dark" ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21.64 13A9 9 0 1111 2.36a7 7 0 1010.64 10.64z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 18a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm0-14a1 1 0 011-1V1a1 1 0 10-2 0v2a1 1 0 011 1zm7.07 3.93a1 1 0 011.41 0l1.41 1.41a1 1 0 11-1.41 1.41L19.07 9.34a1 1 0 010-1.41zM4.93 16.07a1 1 0 011.41 0l1.41 1.41a1 1 0 01-1.41 1.41L4.93 17.49a1 1 0 010-1.41zM23 13a1 1 0 110-2h-2a1 1 0 110 2h2zM3 13a1 1 0 110-2H1a1 1 0 100 2h2zm15.07 5.07a1 1 0 010 1.41l-1.41 1.41a1 1 0 11-1.41-1.41l1.41-1.41a1 1 0 011.41 0zM7.34 4.93a1 1 0 010 1.41L5.93 7.75A1 1 0 114.52 6.34L5.93 4.93a1 1 0 011.41 0zM12 7a5 5 0 100 10A5 5 0 0012 7z" />
        </svg>
      )}
    </Button>
  );
}



