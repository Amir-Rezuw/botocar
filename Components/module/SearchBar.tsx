import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { toast } from "react-toast";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const navigateUser = () => {
    const minPrice = minRef.current?.value;
    const maxPrice = maxRef.current?.value;
    if (!(minPrice && maxPrice)) {
      toast.error("You need to enter a value for both min and max price");
      return;
    }

    if (+minPrice > +maxPrice) {
      toast.error("Minimum price cannot be greater than maximum price.");
      return;
    }
    router.push(`/filter/${minRef.current.value}/${maxRef.current.value}`);
  };
  useEffect(() => {
    if (!router.query.price) return;
    if (!minRef.current) return;
    if (!maxRef.current) return;
    const [minPrice, maxPrice] = router.query.price as string[];

    minRef.current.value = minPrice;
    maxRef.current.value = maxPrice;
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <input
          ref={minRef}
          type="number"
          placeholder="Min Price"
        />
        <input
          ref={maxRef}
          type="number"
          placeholder="Max Price"
        />
      </div>
      <button onClick={navigateUser}>Search</button>
    </div>
  );
};

export default SearchBar;
