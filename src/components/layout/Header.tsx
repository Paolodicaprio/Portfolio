"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-lg md:text-xl font-bold text-primary hover:text-primary-dark transition-colors">
          {personalInfo.name.split(" ")[0]} <span className="text-slate-500">{personalInfo.name.split(" ")[1]}</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <Link 
            href="/contact" 
            className="ml-2 btn-primary"
          >
            Hire Me
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center p-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container py-4 flex flex-col space-y-2">
          <MobileNavLink href="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
          <MobileNavLink href="/about" onClick={toggleMobileMenu}>About</MobileNavLink>
          <MobileNavLink href="/projects" onClick={toggleMobileMenu}>Projects</MobileNavLink>
          <MobileNavLink href="/blog" onClick={toggleMobileMenu}>Blog</MobileNavLink>
          <MobileNavLink href="/contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
          <Link 
            href="/contact" 
            className="btn-primary mt-2 text-center"
            onClick={toggleMobileMenu}
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="px-3 py-2 rounded-md text-slate-700 hover:text-primary hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="px-4 py-2 block text-slate-700 hover:text-primary hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 rounded-md"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}