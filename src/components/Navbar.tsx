import { useState } from 'react'; // Farouk
import { Link, useLocation } from 'wouter'; // Farouk
import { Sun, Moon, Menu, X, BookOpen } from 'lucide-react'; // Farouk
import { useTheme } from '../lib/theme'; // Farouk

const navLinks = [ // Farouk
  { href: '/', label: 'الرئيسية' }, // Farouk
  { href: '/quran', label: 'المصحف' }, // Farouk
  { href: '/downloads', label: 'التحميلات' }, // Farouk
  { href: '/videos', label: 'الفيديوهات' }, // Farouk
  { href: '/contact', label: 'اتصل بنا' }, // Farouk
]; // Farouk

export default function Navbar() { // Farouk
  const { theme, toggleTheme } = useTheme(); // Farouk
  const [menuOpen, setMenuOpen] = useState(false); // Farouk
  const [location] = useLocation(); // Farouk

  return ( // Farouk
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border shadow-sm" dir="rtl"> {/* Farouk */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"> {/* Farouk */}

        {/* Logo */} {/* Farouk */}
        <Link href="/"> {/* Farouk */}
          <div className="flex items-center gap-2 cursor-pointer group"> {/* Farouk */}
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center"> {/* Farouk */}
              <BookOpen className="w-5 h-5 text-primary-foreground" /> {/* Farouk */}
            </div> {/* Farouk */}
            <span className="font-bold text-base text-foreground group-hover:text-primary transition-colors hidden sm:block"> {/* Farouk */}
              الشيخ عبد الرحمن الزواوي {/* Farouk */}
            </span> {/* Farouk */}
          </div> {/* Farouk */}
        </Link> {/* Farouk */}

        {/* Desktop Nav Links */} {/* Farouk */}
        <div className="hidden md:flex items-center gap-1"> {/* Farouk */}
          {navLinks.map(link => ( // Farouk
            <Link key={link.href} href={link.href}> {/* Farouk */}
              <span className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${ // Farouk
                location === link.href // Farouk
                  ? 'bg-primary text-primary-foreground' // Farouk
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted' // Farouk
              }`}> {/* Farouk */}
                {link.label} {/* Farouk */}
              </span> {/* Farouk */}
            </Link> // Farouk
          ))} {/* Farouk */}
        </div> {/* Farouk */}

        {/* Right actions */} {/* Farouk */}
        <div className="flex items-center gap-2"> {/* Farouk */}
          <button // Farouk
            onClick={toggleTheme} // Farouk
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors" // Farouk
            aria-label="تبديل الوضع" // Farouk
          > {/* Farouk */}
            {theme === 'dark' ? ( // Farouk
              <Sun className="w-5 h-5 text-yellow-400" /> // Farouk
            ) : ( // Farouk
              <Moon className="w-5 h-5 text-blue-600" /> // Farouk
            )} {/* Farouk */}
          </button> {/* Farouk */}

          {/* Mobile menu toggle */} {/* Farouk */}
          <button // Farouk
            className="md:hidden p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors" // Farouk
            onClick={() => setMenuOpen(v => !v)} // Farouk
            aria-label="القائمة" // Farouk
          > {/* Farouk */}
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />} {/* Farouk */}
          </button> {/* Farouk */}
        </div> {/* Farouk */}
      </div> {/* Farouk */}

      {/* Mobile Menu */} {/* Farouk */}
      {menuOpen && ( // Farouk
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 py-3 flex flex-col gap-1"> {/* Farouk */}
          {navLinks.map(link => ( // Farouk
            <Link key={link.href} href={link.href}> {/* Farouk */}
              <span // Farouk
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${ // Farouk
                  location === link.href // Farouk
                    ? 'bg-primary text-primary-foreground' // Farouk
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted' // Farouk
                }`} // Farouk
                onClick={() => setMenuOpen(false)} // Farouk
              > {/* Farouk */}
                {link.label} {/* Farouk */}
              </span> {/* Farouk */}
            </Link> // Farouk
          ))} {/* Farouk */}
        </div> // Farouk
      )} {/* Farouk */}
    </nav> // Farouk
  ); // Farouk
} // Farouk
