import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Big Al's Pizza | Billerica, MA",
  description:
    "Contact Big Al’s Pizza. Find hours, location, and info for our takeout-only Billerica shop.",
  alternates: { canonical: "https://bigalsbillerica.com/contact" },
};

export default function ContactPage() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.h1Contact}>Hours &amp; Info</h1>

      <p className={styles.pContact}>
        <a
          href="https://maps.app.goo.gl/L2viXbQs36WmTDqL6"
          className={styles.noUnderline}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </a>{" "}
        or{" "}
        <a href="tel:+19786676674" className={styles.noUnderline}>
          call us
        </a>{" "}
        for a delicious pizza experience!
      </p>

      <p className={styles.pContact}>
        As a family funded and run business, we only have the time and resources
        to keep our efforts focused on providing high quality food and service.
        Things like credit card payments may come in the future. For now, please{" "}
        <a href="tel:+19786676674" className={styles.aTel}>
          order here
        </a>{" "}
        and bring cash!
      </p>

      <p className={styles.pContact}>Hours:</p>
      <p className={styles.pContact}>
        Tuesday - Saturday: 12PM - 8PM or &apos;til we run out
      </p>
        <p className={styles.pContact}>Trying out Sunday: 12PM - 5PM or &apos;til we run out </p>
        <p className={styles.pContact}>Monday: Closed</p>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94072.48628018376!2d-71.4350791375!3d42.5390423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39978d0b4a9b7%3A0xa760dbbfd6e8d91!2sBig%20Al&#39;s%20Pizza!5e0!3m2!1sen!2sus!4v1752929860078!5m2!1sen!2sus"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps showing Big Al's Pizza location"
        />
      </div>

      <div className={styles.detailsBlock}>
        <p className={styles.pContact}>
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

        <div className={styles.miniLogoContainer}>
          <Link href="/" aria-label="Back to home">
            <Image
              src="/assets/bigAlsSign.png"
              alt="Big Al's Pizza in North Billerica, Route 4, Nashua Rd"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
