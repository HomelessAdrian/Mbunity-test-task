"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

import {
  circlesIcon,
  phoneIcon,
  emailIcon,
  locationIcon,
  instagramIcon,
  twitterIcon,
  discordIcon,
} from "../../../public/images";
import styles from "./СontactInfo.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const ContactInfo = () => {
  return (
    <div className={styles["contact-info"]}>
      <div className={styles["contact-info__heading"]}>
        <span
          className={`${styles["contact-info__heading--primary"]} ${poppins.className}`}
        >
          Contact Information
        </span>
        <span
          className={`${styles["contact-info__heading--secondary"]} ${poppins.className}`}
        >
          Say something to start a live chat!
        </span>
      </div>

      <div className={styles["contact-info__contacts"]}>
        <div className={styles["contact-info__contact"]}>
          <Image src={phoneIcon} alt="phone icon" />
          <span>+1012 3456 789</span>
        </div>
        <div className={styles["contact-info__contact"]}>
          <Image src={emailIcon} alt="email icon" />
          <span>demo@gmail.com</span>
        </div>
        <div className={styles["contact-info__contact"]}>
          <Image src={locationIcon} alt="location icon" />
          <span>
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </span>
        </div>
      </div>

      <div className={styles["contact-info__media"]}>
        <div className={`${styles["contact-info__media-item"]}`} role="button">
          <Image src={twitterIcon} alt="twitterIcon" />
        </div>
        <div className={`${styles["contact-info__media-item"]}`} role="button">
          <Image src={instagramIcon} alt="twitterIcon" />
        </div>
        <div className={`${styles["contact-info__media-item"]}`} role="button">
          <Image src={discordIcon} alt="twitterIcon" />
        </div>
      </div>

      <Image
        src={circlesIcon}
        alt="circles"
        className={styles["contact-info__circles"]}
      />
    </div>
  );
};
