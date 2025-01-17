import { ICarData } from "@/Data/CarsData";
import Link from "next/link";
import Location from "../icons/Location";
import styles from "./Card.module.css";
const Card = ({
  name,
  image,
  price,
  location,
  distance,
  year,
  model,
  id,
}: ICarData) => {
  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <img
          alt={`${name} ${model}`}
          src={image}
          className={styles.image}
        />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detail}>{`${year} - ${distance}km`}</p>
        <div className={styles.footer}>
          <p>${price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
