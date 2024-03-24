import CarsData from "@/Data/CarsData";
import { useRouter } from "next/router";
import Back from "../icons/Back";
import Card from "../module/Card";
import styles from "./CarsList.module.css";
const CarsList = ({ selectedCategory }: { selectedCategory: string }) => {
  const carsInSelectedCategory = CarsData.filter(
    (car) => car.category === selectedCategory
  );
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.back}
        onClick={() => router.back()}>
        <Back />
        Back
      </button>
      <div className={styles.cards}>
        {carsInSelectedCategory.map((car) => (
          <Card
            {...car}
            key={car.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CarsList;
