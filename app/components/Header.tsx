// Navbar.tsx

import Link from "next/link";
import styles from "./Header.module.css";
import logo from "../../public/trypLogo.svg";
import flight from "../../public/flight.svg";
import user from "../../public/user.svg";
import offer from "../../public/offer.jpg";
import off from "../../public/off.svg";
import compass from "../../public/compass.svg";

import train from "../../public/train.svg";
import Image from "next/image";

const Navbar = () => {
  console.log("logo", logo);

  return (
    <nav className={styles.navbar}>
      <div style={{ alignContent: "baseline" }}>
        <Image src={flight} alt={"flight"} />
        <Image src={logo} alt={"logo"} />
      </div>

      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link className={styles.navItem} href="/">
            Anytime
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navItem} href="/about">
            Anywhare
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navItem} href="/contact">
            1 traveler
          </Link>
        </li>
      </ul>
      <div className={styles.headerLast}>
        <Image height={80} width={100} src={off} alt={"user"} />
        <input className={styles.globalSearch} placeholder="Search" />
        <Image height={40} width={40} src={user} alt={"user"} />
      </div>
    </nav>
  );
};

export default Navbar;
