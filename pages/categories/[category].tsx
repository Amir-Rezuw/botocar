import CarsList from "@/Components/templates/CarsList";
import { GetServerSideProps } from "next";

const SingleCategory = ({ category }: { category: string }) => {
  return (
    <div>
      <CarsList selectedCategory={category} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const selectedCategory = ctx.params?.category;

  return {
    props: { category: selectedCategory },
  };
};
export default SingleCategory;
