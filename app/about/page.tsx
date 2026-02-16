import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About | Big Al's Pizza | Billerica, MA",
  description:
    "Learn the story behind Big Al’s Pizza in Billerica, MA. Family-owned, scratch-made pies crafted by Chef Tim Maslow.",
  alternates: { canonical: "https://bigalsbillerica.com/about" },
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.h1About}>About Us</h1>

      <div className={styles.aboutContainer}>
        <Image
          src="/assets/famPizzaPic.jpg"
          className={styles.imgAbout}
          alt="Tim Maslow, Mallory Shackford, Mohammed Islam, and pizza"
          width={900}
          height={600}
          priority
        />

        <p className={styles.pAbout}>
          At Big Al&apos;s Pizza, we&apos;re more than just a pizza shop—we&apos;re a family.
          Founded by husband and wife duo Tim and Mallory Maslow and family friend Mohammed Islam,
          we set out to create a cozy neighborhood spot where great food and good company come together.
        </p>

        <p className={styles.pAbout}>
          Our passion for pizza goes beyond just the ingredients—it&apos;s about the experience.
          From our carefully crafted dough to our signature sauces, every pizza is made with love
          and a commitment to quality. We believe in bringing people together, whether it&apos;s for
          a quick bite, a family dinner, or a celebration with friends.
        </p>

        <p className={styles.pAbout}>
          We can&apos;t wait to welcome you in and share our love of pizza with you!
        </p>
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
            alt="Big Al&apos;s Pizza sign"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
}
