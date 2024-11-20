'use client'

import { Poppins } from "next/font/google";

import styles from "./Checkbox.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const Checkbox = ({ label }: { label: string }) => {

  return (
    <label className={styles["checkbox"]}>
      <input type="checkbox" />
      <span className={styles["checkmark"]} />
      <span className={poppins.className}>{label}</span>
    </label>
  );
};
