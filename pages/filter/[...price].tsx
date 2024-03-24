import CarsPage from "@/Components/templates/CarsPage";
import CarsData from "@/Data/CarsData";
import { GetServerSideProps } from "next";

const FilteredCars = ({ price }: { price?: [string, string] }) => {
  const [minPrice, maxPrice] = price || [];
  const filteredData = CarsData.filter((car) => {
    if (!(minPrice && maxPrice)) return [];
    return car.price > +minPrice && car.price < +maxPrice;
  });
  if (!filteredData.length) return <h2>No cars were found</h2>;
  return (
    <div>
      <CarsPage data={filteredData} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: { price: ctx.query.price },
  };
};
export default FilteredCars;
