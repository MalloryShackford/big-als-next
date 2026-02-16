import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./menu.module.css";

export const metadata: Metadata = {
  title: "Menu | Big Al's Pizza | Billerica, MA",
  description:
    "Explore the Big Al’s Pizza menu in Billerica, MA. Featuring 16” pies by Chef Tim Maslow.",
  alternates: { canonical: "https://bigalsbillerica.com/menu" },
};

export default function MenuPage() {
  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.h1Menu}>Menu</h1>

      <div className={styles.embedWrap}>
        <iframe
          loading="lazy"
          title="Big Al's Pizza Menu"
          className={styles.iframe}
          src="https://www.canva.com/design/DAG-g5tUbNU/yFcowDmrvjvH4KC9iYb_MQ/view?embed"
          allowFullScreen
        />
      </div>

      <div className={styles.pdfMenu}>
        <a
          href="/BigAlsMenu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.pdfLink}
        >
          View Full Menu
        </a>
      </div>

      <div className={styles.contactContainer}>
        <p className={styles.pContact}>
          <span className={styles.spanTel}>
            <a href="tel:+19786676674">978-667-6674</a>
          </span>
        </p>
      </div>

      <div className={styles.miniLogoContainer}>
        <Link href="/" aria-label="Back to home">
          <Image
            src="/assets/bigAlsSign.png"
            alt="Big Al&apos;s Pizza Sign"
            width={100}
            height={100}
                  />
        </Link>
      </div>
    </div>
  );
}
