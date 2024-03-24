import CarsPage from "@/Components/templates/CarsPage";
import CarsData from "@/Data/CarsData";
const Cars = () => {
  return (
    <div>
      <CarsPage data={CarsData} />
    </div>
  );
};

export default Cars;
