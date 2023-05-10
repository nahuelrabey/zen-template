"use client";

import { useState } from "react";
import style from "./style.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Header() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
    console.log(active);
  };
  return (
    <header className={`${style.header} ${active? style.active : ""}`}>
      <span>ZenAura</span>
      <nav className={`${style.menu} ${active? style.active: ""}`}>
        <ul>
          <li>
            <a href="#">clases</a>
          </li>
          <li>
            <a href="#">retiros</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
        </ul>
      </nav>
      <span className={style.medita}>medita</span>
      <div
        className={style.hamburger}
        onClick={() => {
            handleClick()
        }}
      >
        <RxHamburgerMenu />
      </div>
    </header>
  );
}
