"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button
        type="button"
        className={styles.menuIcon}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
        <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><a href="tel:+19786676674">Call Now! 978-667-6674</a></li>
      </ul>
    </nav>
  );
}
