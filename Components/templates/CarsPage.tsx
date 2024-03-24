import { ICarData } from "@/Data/CarsData";
import { Fragment } from "react";
import Card from "../module/Card";
import styles from "./CarsPage.module.css";
const CarsPage = ({ data }: { data: ICarData[] }) => {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Fragment key={car.id}>
          <Card {...car} />
        </Fragment>
      ))}
    </div>
  );
};

export default CarsPage;
