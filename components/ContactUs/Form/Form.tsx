"use client";

import { SyntheticEvent } from "react";
import { Poppins } from "next/font/google";

import styles from "./Form.module.css";

import { Input } from "../../Input/Input";
import { Checkbox } from "../../Checkbox/Checkbox";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const Form = () => {
  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles["form"]} onSubmit={submitForm}>
      <div className={styles["form__inputs"]}>
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Email" />
        <Input label="Phone Number" />
      </div>
      <div className={styles["form__checkbox-field"]}>
        <label className={poppins.className}>Select Subject?</label>
        <div className={styles["form__checkboxs"]}>
          <Checkbox label="General Inquiry" />
          <Checkbox label="General Inquiry" />
          <Checkbox label="General Inquiry" />
          <Checkbox label="General Inquiry" />
        </div>
      </div>
      <Input label="Message" placeholder="Write your message" />
      <div className={styles["form__submit-button"]}>
        <button type="submit" className={poppins.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};
