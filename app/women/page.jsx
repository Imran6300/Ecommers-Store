import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "Women's Clothing – Autobotwa Store",
  description:
    "Shop women's dresses, tops, fashion essentials and new arrivals.",
};

export default async function WomenPage() {
  const products = await getProducts();
  const women = products.filter((item) => item.category === "women's clothing");

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {women.map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
