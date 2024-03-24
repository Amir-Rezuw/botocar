import CarDetails from "@/Components/templates/CarDetails";
import CarsData from "@/Data/CarsData";
import { useRouter } from "next/router";
const CarId = () => {
  const {
    query: { carId },
  } = useRouter();

  const currentCar = CarsData.find((car) => car.id.toString() === carId);

  return <div>{currentCar && <CarDetails {...currentCar} />}</div>;
};

export default CarId;
