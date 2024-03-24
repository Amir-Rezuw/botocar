import CarsPage from "@/Components/templates/CarsPage";
import CarsData from "@/Data/CarsData";
import Link from "next/link";

const Index = () => {
  const cars = CarsData.slice(2, 5);
  return (
    <div>
      <Link
        href={"/cars"}
        className="btn-primary">
        See all cars
      </Link>
      <CarsPage data={cars} />
    </div>
  );
};

export default Index;
