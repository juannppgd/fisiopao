import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  // Determine initial theme using localStorage or system preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
      return;
    }
    if (stored === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      return;
    }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    const nowDark = document.documentElement.classList.toggle("dark");
    setIsDark(nowDark);
    try {
      localStorage.setItem("theme", nowDark ? "dark" : "light");
    } catch (e) {
      // ignore storage errors
    }
  };

  // While determining initial value, render nothing to avoid hydration mismatch
  if (isDark === null) return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="px-2 py-2"
    >
      {isDark ? <Sun className="w-4 h-4 text-accent-foreground" /> : <Moon className="w-4 h-4 text-primary" />}
    </Button>
  );
};

export default ThemeToggle;
