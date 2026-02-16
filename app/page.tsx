import type { Metadata } from "next";
import Image from "next/image";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "Home | Big Al's Pizza",
  description:
    "Big Al’s Pizza in Billerica, MA. Cash & takeout only. Hours, phone number, and location details.",
  alternates: { canonical: "https://bigalsbillerica.com" },
};

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.imgLogo}
        src="/assets/bigAlsSign.png"
        alt="Chef Tim Maslow preparing NY style pizza at Big Al&apos;s Pizza"
        width={150}
        height={150}
        priority
      />

      <Image
        className={styles.pizzaBoy}
        src="/assets/pizzaBoy.png"
        alt="Pizza Boy"
        width={600}
        height={600}
        priority
      />

      <p className={styles.pHome}>We are cash &amp; takeout only!</p>

      <p className={styles.pContact}>Hours:</p>

      <p className={styles.pContact}>
        Tuesday - Saturday: 12PM - 8PM or &apos;til we run out
      </p>
      <p className={styles.pContact}>
        Trying out Sunday: 12PM - 5PM or &apos;til we run out
      </p>
      <p className={styles.pContact}>Monday: Closed</p>

      <div className={styles.contactContainer}>
        <p className={styles.pTele}>
          <span className={styles.spanTel}>
            <a href="tel:+19786676674">978-667-6674</a>
          </span>
        </p>

        <p className={styles.pAddress}>
          <a
            href="https://maps.app.goo.gl/L2viXbQs36WmTDqL6"
            className={styles.noUnderline}
            target="_blank"
            rel="noopener noreferrer"
          >
            240 Nashua Rd
          </a>
        </p>

        <p className={styles.pAddress}>
          <a
            href="https://maps.app.goo.gl/L2viXbQs36WmTDqL6"
            className={styles.noUnderline}
            target="_blank"
            rel="noopener noreferrer"
          >
            Billerica, MA 01862
          </a>
        </p>
      </div>
    </div>
  );
}
