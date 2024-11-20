"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter, Roboto } from "next/font/google";

import { arrowIcon, profileIcon, shopIcon } from "../../public/images";

import style from "./Header.module.css";

const inter = Inter({ subsets: ["latin"], weight: "700" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "900"] });

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`${style["header"]} ${isOpen ? style["open"] : ""}`}>
      <div className={style["header-wrapper"]}>
        <div
          className={`${style["header__logo"]} ${inter.className} ${
            isOpen ? style["header__logo-white"] : ""
          }`}
        >
          Logo Here
        </div>

        <div className={style["header__hamburger-container"]}>
          <div
            className={`${style["header__hamburger"]} ${
              isOpen ? `${style["open"]}` : ""
            }`}
            onClick={toggleMenu}
          >
            <span className={style["bar"]} />
            <span className={style["bar"]} />
            <span className={style["bar"]} />
          </div>
        </div>
      </div>

      <div className={`${style["header__nav"]} ${isOpen ? style["open"] : ""}`}>
        <div className={roboto.className}>Home</div>
        <div
          className={`${roboto.className} ${style["header__nav-item--dropdown"]}`}
        >
          <span>Features</span>
          <Image src={arrowIcon} alt="arrow icon" className="header__arrow" />
        </div>
        <div className={roboto.className}>Blog</div>
        <div className={roboto.className}>Shop</div>
        <div className={roboto.className}>About</div>
        <div className={roboto.className} style={{ fontWeight: "bold" }}>
          Contact
        </div>

        <div className={style["header__nav-icons"]}>
          <div>
            <Image src={profileIcon} alt="profile icon" />
          </div>
          <div>
            <Image src={shopIcon} alt="shop icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
