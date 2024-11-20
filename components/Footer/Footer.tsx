import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { emailIcon, locationIcon, phoneIcon } from "../../public/images";
import styles from "./Footer.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const Footer = () => {
  return (
    <div className={`${styles["footer"]} ${poppins.className}`}>
      <span className={styles["footer__header"]}>Logo Here</span>

      <span className={styles["footer__line"]} />

      <div className={styles["footer__nav"]}>
        <div className={styles["footer__nav-column"]}>
          <span className={styles["footer__nav-label"]}>Reach out</span>
          <div className={styles["footer__nav-contact"]}>
            <Image src={phoneIcon} alt="phone icon" />
            <span>+1012 3456 789</span>
          </div>
          <div className={styles["footer__nav-contact"]}>
            <Image src={emailIcon} alt="email icon" />
            <span>demo@gmail.com</span>
          </div>
          <div className={styles["footer__nav-contact"]}>
            <Image src={locationIcon} alt="location icon" />
            <span>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </span>
          </div>
        </div>

        <div className={styles["footer__nav-column"]}>
          <span className={styles["footer__nav-label"]}>Company</span>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Blog</Link>
        </div>

        <div className={styles["footer__nav-column"]}>
          <span className={styles["footer__nav-label"]}>Legal</span>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms & Services</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Refund Policy</Link>
        </div>

        <div className={styles["footer__nav-column"]}>
          <span className={styles["footer__nav-label"]}>Quick Links</span>
          <Link href="#">Techlabz Keybox</Link>
          <Link href="#">Downloads</Link>
          <Link href="#">Forum</Link>
        </div>
        
        <div className={styles["footer__nav-column"]}>
          <div className={styles["footer__nav-join"]}>
            <span className={styles["footer__nav-label"]}>
              Join Our Newsletter
            </span>

            <div className={styles["footer__nav-input"]}>
              <input placeholder="Your email address" type="text" />
              <button>Subsctibe</button>
            </div>

            <span>
              * Will send you weekly updates for your better tool management.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
