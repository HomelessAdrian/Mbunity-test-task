'use client'

import Image from "next/image";

import { ContactInfo } from "../ContactInfo";
import { Form } from "../Form/Form";
import { letterIcon } from "../../../public/images";
import styles from "./FormContainer.module.css";

export const FormContainer = () => {
  return (
    <div className={styles["form-container"]}>
      <ContactInfo />
      <Form />
      <Image src={letterIcon} alt="letter icon" className={styles['form-container__letter-icon']} />
    </div>
  );
};
