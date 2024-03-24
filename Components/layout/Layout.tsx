import CarsData from "@/Data/CarsData";
import Link from "next/link";
import { ReactNode } from "react";
import Categories from "../module/Categories";
import SearchBar from "../module/SearchBar";
import styles from "./Layout.module.css";
const Layout = ({ children }: { children: ReactNode }) => {
  const categories = [...new Set(CarsData.map((item) => item.category))];
  return (
    <div>
      <header className={styles.header}>
        <Link
          href={"/"}
          className={styles.header_home_link}>
          <h2 className={styles.website_title}>BOTOCAR</h2>
          <p className={styles.slogan}>Choose and buy a car</p>
        </Link>
      </header>
      <SearchBar />
      <Categories categories={categories} />
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>&copy; Reserved</footer>
    </div>
  );
};

export default Layout;
