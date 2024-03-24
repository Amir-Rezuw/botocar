import Link from "next/link";
import { FC } from "react";
import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import styles from "./Categories.module.css";
type Props = {
  categories: string[];
};
const Categories: FC<Props> = ({ categories }) => {
  return (
    <div className={styles.container}>
      {categories.map((item) => {
        return (
          <Link
            href={`/categories/${item}`}
            key={item}>
            <div>
              <p>
                {item
                  .split("")
                  .map((item, index) =>
                    index === 0 ? item.toUpperCase() : item
                  )}
              </p>
              <CategoryIcon category={item} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
const CategoryIcon = ({ category }: { category: string }) => {
  switch (category.toLowerCase()) {
    case "sedan":
      return <Sedan />;
    case "suv":
      return <Suv />;
    case "Hatchback":
      return <Hatchback />;
    default:
      return <Sport />;
  }
};
