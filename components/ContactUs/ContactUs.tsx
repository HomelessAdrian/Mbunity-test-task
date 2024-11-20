'use client'

import { Poppins } from "next/font/google";

import { FormContainer } from "./FormContainer/FormContainer";
import style from "./ContactUs.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const ContactUs = () => {
  return (
    <div className={style["contact-us"]}>
      <div className={style["contact-us__heading"]}>
        <span className={`${style["contact-us__heading--primary"]}  ${poppins.className}`}>
          Contact Us
        </span>
        <span className={`${style["contact-us__heading--secondary"]}  ${poppins.className}`}>
          Any question or remarks? Just write us a message!
        </span>
      </div>
      
      <FormContainer />
    </div>
  );
};
