import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "New Arrivals – Autobotwa Store",
  description: "Check out the latest fashion drops and newly added products.",
};

export default async function NewArrivalsPage() {
  const products = await getProducts();

  const sorted = products.sort((a, b) => b.id - a.id);

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {sorted.map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
