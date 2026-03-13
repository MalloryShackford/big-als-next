"use client";

import { useEffect, useState } from "react";
import styles from "./ClosedNoticePopup.module.css";

export default function ClosedNoticePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("closedNoticeShown");
    if (!hasSeen) {
      setIsOpen(true);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("closedNoticeShown", "true");
  };

  const today = new Date();
  const cutoff = new Date("2026-03-16");

  if (today >= cutoff || !isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p><strong>Quick note:</strong></p>
        <p>We’ll be closed Sunday, March 15th.</p>
        <p>Back at it soon 🍕</p>
        <button className={styles.button} onClick={closePopup}>
          Got it
        </button>
      </div>
    </div>
  );
}