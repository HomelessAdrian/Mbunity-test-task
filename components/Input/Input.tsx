"use client";

import style from "./Input.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const Input = ({
  label,
  type = "text",
  placeholder = "",
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) => {
  return (
    <div className={`${style["input"]} ${poppins.className}`}>
      <label>
        <span>{label}</span>
      </label>
      <input
        className={poppins.className}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
